import BottomNavigationBar from "@/components/BottomNavigationBar";
import Nav from "@/components/Nav";
import TaskTemplate from "@/components/TaskTemplate";
import { auth, db } from "@/firebase/init";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";

function Pendingtasks() {
  const [user, setUser] = useState({});
  const [userID, setUserID] = useState("");
  const [data, setData] = useState([]);

  console.log(new Date());

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserID(user.uid);
      }
    });
  }, []);

  {
    /*  async function getPostByUid() {
    const postCollectionRef = await query(
      collection(db, "tasks"),
      where("uid", "==", userID)
    );

    const { docs } = await getDocs(postCollectionRef);

    setData(docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
getPostByUid();*/
  }

  return (
    <div>
      <Nav user={user} />

      <main className="mt-5">
        <h1 className="text-center font-bold text-[25px]">
          Your pending <span className="text-thingstodo"> tasks </span>{" "}
        </h1>

        <div className="space-y-4 mt-5 p-4 mb-20 sm:flex  sm:flex-wrap  sm:items-center sm:justify-center sm:space-x-4">
          {/*{
             data.map((task) => <TaskTemplate key={task.id} task={task} />)
             
             
             } */}

          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative border w-[270px] sm:w-[300px] p-5 space-y-3 rounded-xl bg-slate-50">
              <h1 className="font-bold">Go to work at 4PM </h1>

              <p className=" font-light text-sm">
                Get ready for a busy afternoon sldkfj lkjsdlk fd;lskaj
                lkf;sdj;lk jfds;lk jlkds fj;l
              </p>
              <div className="flex justify-between items-center">
                <TimeAgo
                  date="Sun Feb 19 2023 11:49:57 GMT+0800 (Australian Western Standard Time)"
                  className="text-sm font-light opacity-60"
                />
                <button className="border text-sm   px-3 py-2 bg-thingstodo rounded-xl  text-white">
                  Done
                </button>
              </div>

              <span className="hidden  sm:flex absolute top-0 right-0 p-2 space-x-2">
                <PencilSquareIcon className="w-5" />{" "}
                <TrashIcon className="w-5 text-red-500" />
              </span>
            </div>
            <div className="flex sm:hidden space-x-3">
              <PencilSquareIcon className="w-6" />
              <TrashIcon className="w-5 text-red-500" />
            </div>
          </div>



        </div>
      </main>

      <BottomNavigationBar data={data} />
    </div>
  );
}
export default Pendingtasks;
