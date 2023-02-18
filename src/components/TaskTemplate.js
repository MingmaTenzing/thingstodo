function tasktemplate({ task }) {
  return (
    <div >
      <div  className="">
        <h1 className="font-bold">{task.title}</h1>
      
        <p className=" font-light"> {task.description}</p>
      </div>
    </div>
  );
}
export default tasktemplate;
