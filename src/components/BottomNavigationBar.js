import { auth, db } from "@/firebase/init";
import { ClockIcon, PlusIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import { Router, useRouter } from "next/router"
import { useEffect, useState } from "react";
import { copydata } from "@/assests/copydata";
import { useLocalStorage, useSessionStorage } from "usehooks-ts";


function BottomNavigationBar() {
const router = useRouter();
const [pendingTasks, setpendingTasks] = useSessionStorage();
const [test, setTest] =useSessionStorage()


console.log(test)
   
  

  return (
    <div className="fixed bottom-0 w-full p-2 bg-footer text-white ">
        <div className=" flex justify-around items-center">
        <div className=" relative">  <ClockIcon onClick={() => router.push('/dashboard/pendingtasks')}  className="w-8 sm:w-10 text-orange-400 " /> 
        </div>
        
          <Link href={"/dashboard/addtasks"} > <PlusIcon  className="w-8 sm:w-10  text-thingstodo" /> </Link>
           <Link href={"/dashboard/completedtasks"} > <CheckCircleIcon className="w-8 sm:w-10  text-green-400" /> </Link>
             
        </div>
    </div>
  )
}
export default BottomNavigationBar