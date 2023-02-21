import BottomNavigationBar from "@/components/BottomNavigationBar";
import Nav from "@/components/Nav";
import TaskTemplate from "@/components/TaskTemplate";
import { auth, db } from "@/firebase/init";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";

import { copydata } from "@/assests/copydata";

function Pendingtasks() {
  const [user, setUser] = useState({});
  const [userID, setUserID] = useState("");
  const [data, setData] = useState([]);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserID(user.uid);
      }
    });
  }, []);

 useEffect (() => {
    async function getPostByUid() {
      const postCollectionRef = await query(
        collection(db, "tasks"),
        where("uid", "==", userID)
      );
  
      const { docs } = await getDocs(postCollectionRef);
  
      setData(docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    }
  getPostByUid()

  }) 

  

  return (
    <div>
      <Nav user={user} />

      <main className="mt-5">
        <h1 className="text-center font-bold text-[25px]">
          Your pending <span className="text-thingstodo"> tasks </span>{" "}
        </h1>

        <div className=" mt-5 p-4 mb-20 sm:flex sm:items-start  sm:flex-wrap    sm:justify-center sm:space-x-4">
          { 
          
          data.filter((task) => task.status === 'pending').map((task) => <TaskTemplate key={task.id} task={task} />)
             
             } 

        


     



        </div>
      </main>

      <BottomNavigationBar data={data} />
    </div>
  );
}
export default Pendingtasks;
