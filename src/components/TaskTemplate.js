
import TimeAgo from "react-timeago";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";


function tasktemplate({ task }) {


  return (
    <div className="flex items-center p-2">
    <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
      <h1 className="font-bold w-[200px]">{task.title}</h1>

      <p className=" font-light text-sm">
        {task.description}
      </p>
      <div className="flex justify-between items-center ">
        <TimeAgo date={task.time} className="text-sm opacity-40" />
       
      
      
        <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
          Done
        </button>
      </div>

      <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
        <PencilSquareIcon className="w-5" />{" "}
        <TrashIcon className="w-5 text-red-500" />
      </span>
    </div>
    <div className="flex ml-5 sm:hidden space-x-3">
      <PencilSquareIcon className="w-6" />
      <TrashIcon className="w-5 text-red-500" />
    </div>
  </div>
  );
}
export default tasktemplate;
