import { auth } from "@/firebase/init";

import { signOut } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import biglogo from "../assests/logoxl.png";
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'

function Nav({ user }) {
  const [accountClick, setAccountClick] = useState(false);

  const router = useRouter();



  function logout() {
    signOut(auth)
      .then(() => {
        router.push('/signin')
        console.log("logged out");
        setCurrentUser();
        
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className=" p-4 flex items-center justify-between border-b  ">
      <div className="flex items-center space-x-4 ">
        <Image src={biglogo} alt="logo" className="w-[90px] md:w-[100px] " onClick={() => router.push('/')}/>
        <div className="md:flex hidden space-x-3 text-sm">
          <p>Home</p>
          <p>Product</p>
          <p>Pricing</p>
          <p>Resources</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="flex space-x-2">
        {user ? (
          <>
          <div
            className="relative px-3 text-white py-2  rounded-full cursor-pointer pr-3"
            onClick={() => setAccountClick(() => !accountClick)}
            
          >
            {
              <p className="bg-thingstodo py-1.5 px-3  rounded-full ">
                {user.displayName[0].toUpperCase()}
              </p>
            }
          </div>
          {accountClick && ( <div onClick={logout} className=" cursor-pointer absolute top-[70px] border right-6 flex items-center p-2 rounded-lg space-x-2">
         <ArrowLeftOnRectangleIcon className="w-5 text-red-500 " />
            <h1 className="text-sm"> Logout</h1>
            </div>)}
         
            </>

        ) : (
          <>
            <button
              className="border py-1 px-2 md:py-2 md:px-3 rounded-lg text-sm"
              onClick={() => router.push("/signin")}
            >
              Log in
            </button>
            <button
              className="border py-1 px-2  md:py-2 md:px-3 rounded-lg text-sm bg-thingstodo text-white"
              onClick={() => router.push("/signup")}
            >
              Sign up
            </button>
          </>
        )}
      </div>
    </div>
  );
}
export default Nav;
