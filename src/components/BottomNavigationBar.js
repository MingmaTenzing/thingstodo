import { auth, db } from "@/firebase/init";
import { ClockIcon, PlusIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";


function BottomNavigationBar() {
  const [user, setUser] = useState({});
  const [userID, setUserID] = useState('')
  const [data, setData] = useState([]);
  const [taskCounter, setTaskCounter] = useState('');
  


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserID(user.uid)
      }
    })
    async function getPostByUid() {
    
      const postCollectionRef = await query(collection(db, "tasks"),where("uid", '==', userID));
    
      const { docs } = await getDocs(postCollectionRef);
  
      setData(docs.map((doc) => ({...doc.data(), id:doc.id})));
      
  
  
      
    
    }
    getPostByUid()
    



  },[])







  
  

  return (
    <div className="fixed bottom-0 w-full p-2 bg-footer text-white ">
        <div className=" flex justify-around items-center">
        <div className=" relative"> <Link href={'/dashboard/pendingtasks'}   > <ClockIcon className="w-8 sm:w-10 text-orange-400 " /> </Link>
        <span className="absolute top-0 left-9 text-sm bg-thingstodo px-1 rounded-full">{data.length}</span>
        </div>
        
          <Link href={"/dashboard/addtasks"} > <PlusIcon  className="w-8 sm:w-10  text-thingstodo" /> </Link>
            <CheckCircleIcon className="w-8 sm:w-10  text-green-400" />
             
        </div>
    </div>
  )
}
export default BottomNavigationBar