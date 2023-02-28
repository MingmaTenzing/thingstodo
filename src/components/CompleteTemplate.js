import { db } from "@/firebase/init";
import { CheckBadgeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"
import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast"
import TimeAgo from "react-time-ago"
import ReactTimeago from "react-timeago";


function CompleteTemplate({ task }) {
  const [loading, setLoading] = useState(true);
  

  async function concludeTask () {

    await deleteDoc(doc(db, 'tasks', task.id));
    toast.success('Task Concluded 🥳')
  }
  return (
    <>
    <Toaster />
      
      <div className="flex items-center p-2">

      
      <div className="relative border w-[360px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
        <h1 className="font-bold w-[200px] ">{task.title}</h1>
  
        <p className=" font-light text-sm">
          {task.description}
        </p>
        <div className="flex justify-between items-center ">
         
       <ReactTimeago date={task.time} className="text-sm opacity-40" /> 

        
          <button onClick={concludeTask} className="border text-sm   px-3 py-2 bg-green-500 rounded-xl  text-white">
            Conclude
          </button>
        </div>
  
        <span className="  flex absolute top-0 right-4 sm:right-0 p-2 space-x-2">
         <CheckBadgeIcon className="w-7 text-green-500 " />
        </span>
      </div>
     
    </div>
    </>
  )
}
export default CompleteTemplate;