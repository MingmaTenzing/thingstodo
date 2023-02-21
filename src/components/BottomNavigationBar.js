import { auth, db } from "@/firebase/init";
import { ClockIcon, PlusIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { copydata } from "@/assests/copydata";


function BottomNavigationBar() {

   
  

  return (
    <div className="fixed bottom-0 w-full p-2 bg-footer text-white ">
        <div className=" flex justify-around items-center">
        <div className=" relative"> <Link href={'/dashboard/pendingtasks'}   > <ClockIcon className="w-8 sm:w-10 text-orange-400 " /> </Link>
        </div>
        
          <Link href={"/dashboard/addtasks"} > <PlusIcon  className="w-8 sm:w-10  text-thingstodo" /> </Link>
           <Link href={"/dashboard/completedtasks"} > <CheckCircleIcon className="w-8 sm:w-10  text-green-400" /> </Link>
             
        </div>
    </div>
  )
}
export default BottomNavigationBar