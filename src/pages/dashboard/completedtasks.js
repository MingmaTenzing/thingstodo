import Nav from "@/components/Nav";
import BottomNavigationBar from "@/components/BottomNavigationBar";
import TaskTemplate from "@/components/TaskTemplate";
import { auth, db } from "@/firebase/init";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";

import { copydata } from "@/assests/copydata";
import CompleteTemplate from "@/components/CompleteTemplate";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser, signoutuser } from "slices/userSlice";
import Loading from "@/components/Loading";

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
      setLoading(false);
      
    }
    getPostByUid();
  }, [userID, completedTasks]);

  return (
    <div>
      <Nav user={user} />

      <main className="mt-5">
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
        )}
      </main>

      <BottomNavigationBar data={data} />
    </div>
  );
}
export default CompletedTasks;
