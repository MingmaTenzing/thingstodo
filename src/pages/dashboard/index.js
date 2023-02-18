import BottomNavigationBar from "@/components/BottomNavigationBar";
import Nav from "@/components/Nav";
import { auth } from "@/firebase/init";
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import { useEffect, useState } from "react";
import addtaskimg from "../../assests/addtasks.svg";

function dashBoard() {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      }
    });
  }, [user]);

  return (
    <div className="">
      <Nav user={user} />

      <main className="space-y-8 mt-10 w-2/3 p-5 shadow-lg border m-auto rounded-3xl bg-slate-100 md:w-[900px] md:flex md:mt-20" >

     

        <div className="flex justify-center">
          <Image src={addtaskimg} alt="addtask" width={100} height={100} className='w-[250px] md:flex md:w-[500px] '/>
        </div>

        <div>
          <h1 className="  text-[20px] text-center font-[900] sm:text-[25px] ">
            {" "}
            Add the <span className="text-thingstodo">things</span>  you want{" "}
            <span className="text-thingstodo"> todo </span>{" "}
          </h1>

          <form className=" mt-10 space-y-5 flex flex-col items-center">
            <div>
              <h1 className="text-sm">Task Title</h1>
              <input
                type="text"
                className="border  outline-none w-[300px] p-2 h-10 rounded-lg"
              ></input>
            </div>

            <div>
              <h1 className="text-sm">Description</h1>
              <input
                type="text"
                className="border  outline-none p-2 w-[300px] h-[100px] rounded-lg"
              ></input>
            </div>
            <button className="p-3 bg-thingstodo rounded-lg text-white">
              {" "}
              Add Task{" "}
            </button>
          </form>
        </div>
      </main>
      <BottomNavigationBar />
    </div>
  );
}
export default dashBoard;
