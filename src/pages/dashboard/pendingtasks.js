import BottomNavigationBar from "@/components/BottomNavigationBar";
import Nav from "@/components/Nav";
import TaskTemplate from "@/components/TaskTemplate";
import { auth, db } from "@/firebase/init";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";

import { useRef } from "react";
import { useOnClickOutside } from 'usehooks-ts'
import { copydata } from "@/assests/copydata";
import { useRouter } from "next/router";
import { useSelect } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser, signoutuser } from "slices/userSlice";
import { Clicked } from "slices/clickedSlice";
import { useLocalStorage, useSessionStorage } from "usehooks-ts";
import { count } from "slices/pendingTasksSlice";

function Pendingtasks() {

  const ref = useRef(null)
  const [userID, setUserID] = useState("");
  const [data, setData] = useState([]);
  const [pendingtasks, setPendingTasks] = useState([]);
  
  const router = useRouter();

  
 
  
  
  const user = useSelector(selectUser);
  const clicked = useSelector(Clicked);

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

  useEffect(()=> {
    async function getPostByUid() {
      const postCollectionRef = await query(
        collection(db, "tasks"),
        where("uid", "==", userID)
      );
  
      const { docs } = await getDocs(postCollectionRef);
  
      setData(docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPendingTasks(data.filter((task) => task.status === "pending"))


    }
    getPostByUid();
  
  },[userID,pendingtasks])
 
  useEffect(() => {
    dispatch(count({
      tasks:pendingtasks.length.toString()
      
     }))
  },[pendingtasks])


  








  


  

  return (
    <div>
      <Nav user={user} />

      <main className="mt-5">
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
      </main>

      <BottomNavigationBar />
    </div>
  );
}
export default Pendingtasks;
