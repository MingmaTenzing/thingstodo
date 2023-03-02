import BottomNavigationBar from "@/components/BottomNavigationBar";
import Nav from "@/components/Nav";
import TaskTemplate from "@/components/TaskTemplate";
import { auth, db } from "@/firebase/init";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import waiting from "../../assests/waiting.svg";

import { useRef } from "react";
import { copydata } from "@/assests/copydata";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser, signoutuser } from "slices/userSlice";
import { useLocalStorage, useSessionStorage } from "usehooks-ts";
import { count } from "slices/pendingTasksSlice";
import Loading from "@/components/Loading";
import Image from "next/image";
import Head from "next/head";

function Pendingtasks() {
  const ref = useRef(null);
  const [userID, setUserID] = useState("");
  const [data, setData] = useState([]);
  const [pendingtasks, setPendingTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const user = useSelector(selectUser);

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

        setPendingTasks(data.filter((task) => task.status === "pending"));
      }
      
      getPostByUid();
      setTimeout(() => {
        setLoading(false);
      },3000)
   
  }, [userID, pendingtasks]);

  return (
    <div>
      <Head>
        <title>Pending Tasks</title>
      </Head>
      <Nav user={user} />

      <main className="mt-5">
       
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            {pendingtasks.length == 0 ? (
              <>
                {" "}
                <div className="flex flex-col items-center space-y-8 mt-10 ">
                  <div className="space-y-3">
                    <h1 className="text-center w-[340px] text-[20px] font-[700] ">
                      {" "}
                      Feels lonely in here
                    </h1>
                    <h1 className="text-center w-[340px] text-sm font-light">
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
                      src={waiting}
                      alt="wating"
                      width={400}
                      height={200}
                      className="w-[200px] "
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
               <h1 className="text-center font-bold text-[25px]">
          Your pending <span className="text-thingstodo"> tasks </span>{" "}
        </h1>
                <div className=" mt-5 p-4 mb-20 sm:flex sm:items-start  sm:flex-wrap    sm:justify-center sm:space-x-4">
                  {data
                    .filter((task) => task.status === "pending")
                    .map((task) => (
                      <TaskTemplate key={task.id} task={task} />
                    ))}
                </div>
              </>
            )}
          </>
        )}

        {/* { pendingtasks.length === 0 ?  (
          <>
           
          </>
        ) : (
         null
        )}

        */}
      </main>

      <BottomNavigationBar />
    </div>
  );
}
export default Pendingtasks;
