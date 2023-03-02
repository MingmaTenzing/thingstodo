import Nav from "@/components/Nav";
import BottomNavigationBar from "@/components/BottomNavigationBar";
import TaskTemplate from "@/components/TaskTemplate";
import { auth, db } from "@/firebase/init";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import emptytasks from "../../assests/emptycomplete.svg";

import { copydata } from "@/assests/copydata";
import CompleteTemplate from "@/components/CompleteTemplate";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser, signoutuser } from "slices/userSlice";
import Loading from "@/components/Loading";
import Image from "next/image";
import Head from "next/head";

function CompletedTasks() {
  const [userID, setUserID] = useState("");
  const [data, setData] = useState([]);
  const router = useRouter();
  const user = useSelector(selectUser);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserID(user.uid);

        dispatch(
          login({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(signoutuser());
        router.push("/signin");
      }
    });
  }, []);

  useEffect(() => {
    async function getPostByUid() {
      const postCollectionRef = await query(
        collection(db, "tasks"),
        where("uid", "==", userID)
      );

      const { docs } = await getDocs(postCollectionRef);

      setData(docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setCompletedTasks(data.filter((task) => task.status === "completed"));
    }
    getPostByUid();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [userID, completedTasks]);

  return (
    <div>
      <Head>
        <title>Completed Tasks</title>
      </Head>
      <Nav user={user} />

      <main className="mt-5">
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            {completedTasks.length == 0 ? (
              <div className="flex flex-col items-center space-y-8 mt-10 ">
                <div className="space-y-3">
                  <h1 className="text-center w-[340px] sm:w-[500px] text-[20px] font-[700] ">
                    {" "}
                    Feels lonely here as well 
                  </h1>
                  <h1 className="text-center w-[340px] sm:w-[500px]  text-sm font-light">
                    {" "}
                    Add tasks to get started
                  </h1>
                </div>
                <div>
                  <button
                    className="bg-thingstodo text-white px-3 py-2  text-sm rounded-xl "
                    onClick={() => router.push("/dashboard/addtasks")}
                  >
                    {" "}
                    Add Tasks
                  </button>
                </div>
                <div>
                  <Image
                    src={emptytasks}
                    alt="wating"
                    width={400}
                    height={200}
                    className="w-[300px] mt-10 "
                  />
                </div>
              </div>
            ) : (
              <>
                <h1 className="text-center font-bold text-[25px]">
                  Your completed{" "}
                  <span className="text-thingstodo"> tasks </span>{" "}
                </h1>
                <div className=" mt-5 p-4 mb-20 flex flex-col items-center  sm:flex sm:flex-row sm:items-start  sm:flex-wrap    sm:justify-center sm:space-x-4">
            {completedTasks.map((task) => (
              <CompleteTemplate key={task.id} task={task} />
            ))}
          </div>
              </>
            )}
          </>
        )}

        {/*    {completedTasks.length === 0 ? ( <div className="flex flex-col items-center space-y-8 mt-10 ">
              <div className="space-y-3">
              <h1 className="text-center w-[340px] sm:w-[500px] text-[20px] font-[700] "> You haven&apos;t completed any tasks at the moment</h1>
              <h1 className="text-center w-[340px] sm:w-[500px]  text-sm font-light"> Add tasks to get started</h1>
              </div>
              <div>
              <button className="bg-thingstodo text-white px-3 py-2  text-sm rounded-xl " onClick={() => router.push("/dashboard/addtasks")}> Add Tasks</button>
           </div>
           <div>
            <Image src={emptytasks} alt='wating' width={400} height={200} className="w-[300px] mt-10 " />
            </div>
           
            </div>):(<>
        <h1 className="text-center font-bold text-[25px]">
          Your completed <span className="text-thingstodo"> tasks </span>{" "}
        </h1>

        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <div className=" mt-5 p-4 mb-20 flex flex-col items-center  sm:flex sm:flex-row sm:items-start  sm:flex-wrap    sm:justify-center sm:space-x-4">
            {completedTasks.map((task) => (
              <CompleteTemplate key={task.id} task={task} />
            ))}
          </div>
        )}</>)}

         */}
      </main>

      <BottomNavigationBar />
    </div>
  );
}
export default CompletedTasks;
