
import TimeAgo from "react-timeago";
import { auth,db  } from "@/firebase/init";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import { useLocalStorage } from 'usehooks-ts'
import { useDispatch } from "react-redux";




function Tasktemplate({ task }) {

  const dispatch = useDispatch()



  function taskCompleted() {
    dispatch(onclick())
 
    
    const postRef = doc(db, 'tasks', task.id); 
    const markasComplete = {
      description: task.description,
      title: task.title,
      time: task.time, 
      uid: task.uid,
      status: 'completed'
    }
    updateDoc(postRef, markasComplete);
    toast.success("Congratulations on Completing your task");


  }

  async function deleteTask () {
    await deleteDoc(doc(db, 'tasks', task.id));
  }


 



  return (<>
  <Toaster />
    
    <div className="flex items-center p-2">
    
    <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
      <h1 className="font-bold w-[200px]">{task.title}</h1>

      <p className=" font-light text-sm">
        {task.description}
      </p>
      <div className="flex justify-between items-center ">
        <TimeAgo date={task.time} className="text-sm opacity-40" />
       
      
      
        <button  onClick={taskCompleted} className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
          Done
        </button>
      </div>

      <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
        <TrashIcon onClick={deleteTask} className="w-5 text-red-500" />
      </span>
    </div>
    <div className="flex ml-5 sm:hidden space-x-3">
      <TrashIcon onClick={deleteTask} className="w-5 text-red-500" />
    </div>
  </div>
  </>
  );
}
export default Tasktemplate;
