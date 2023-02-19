import ReactTimeAgo from "react-time-ago";
import en from 'javascript-time-ago/locale/en.json'


function tasktemplate({ task , date}) {
  return (
    <div >
      <div  className="border w-[300px] p-2 space-y-1 rounded-xl bg-slate-50">
        <h1 className="font-bold">{task.title}</h1>
      
        <p className=" font-light text-sm"> {task.description}</p>
      
      </div>
    </div>
  );
}
export default tasktemplate;
