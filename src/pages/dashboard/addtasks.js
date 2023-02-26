import BottomNavigationBar from "@/components/BottomNavigationBar";
import Nav from "@/components/Nav";
import { auth, db } from "@/firebase/init";
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import { useEffect, useState } from "react";
import addtaskimg from "../../assests/addtasks.svg";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { Router, useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser, signoutuser } from "slices/userSlice";
import { count } from "slices/pendingTasksSlice";

function Addtasks() {
  const user = useSelector(selectUser);

  const [data, setData] = useState([]);
  const [userID, setUserID] = useState("");

  const [tasktitle, settasktitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserID(user.id);
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

  async function addTask(event) {
    event.preventDefault();

    const task = {
      title: tasktitle,
      description: taskDescription,
      uid: user.uid,
      status: "pending",
      time: new Date().toString(),
    };
    await addDoc(collection(db, "tasks"), task);
    toast.success("Task Added Successfully");

    setTaskDescription("");
    settasktitle("");
  }

  return (
    <div className="">
      <Toaster />
      <Nav user={user} />

      <main className=" space-y-8 mt-10 p-4 py-3 mx-4   shadow-lg border md:m-auto rounded-3xl bg-slate-100 md:w-[900px] md:flex md:mt-20">
        <div className=" hidden md:flex md:justify-center">
          <Image
            src={addtaskimg}
            alt="addtask"
            width={100}
            height={100}
            className="w-[250px] md:flex md:w-[500px] "
          />
        </div>

        <div>
          <h1 className="  text-[20px] text-center font-[900] sm:text-[25px] ">
            {" "}
            Add the <span className="text-thingstodo">things</span> you want{" "}
            <span className="text-thingstodo"> todo </span>{" "}
          </h1>

          <form
            onSubmit={addTask}
            value={tasktitle}
            className=" mt-10 p-5  space-y-5 flex flex-col items-center"
          >
            <div>
              <h1 className="text-sm">Task Title</h1>
              <input
                type="text"
                required
                value={tasktitle}
                className="border  outline-none w-[300px] p-2 h-10 rounded-lg"
                onChange={(e) => settasktitle(e.target.value)}
              ></input>
            </div>

            <div>
              <h1 className="text-sm">Description</h1>
              <input
                type="text"
                required
                value={taskDescription}
                className="border  outline-none p-2 w-[300px] h-[100px] rounded-lg"
                onChange={(e) => setTaskDescription(e.target.value)}
              ></input>
            </div>
            <div>
              <button
                type="submit"
                className="p-3 bg-thingstodo rounded-lg text-white"
              >
                {" "}
                Add Task{" "}
              </button>
            </div>
          </form>
        </div>
      </main>
      <BottomNavigationBar />
    </div>
  );
}
export default Addtasks;
