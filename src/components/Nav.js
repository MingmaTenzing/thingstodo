import { auth } from "@/firebase/init";
import { signOut } from "firebase/auth";
auth
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import biglogo from "../assests/logoxl.png";
function Nav({ user }) {
  
  const router = useRouter();



  function logout() {
    signOut(auth).then (() => {
      console.log("logged out");
      setCurrentUser();
      
    }). catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className=" p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4 ">
        <Image src={biglogo} alt="logo" className="w-[90px] md:w-[100px] " />
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
          <div className="bg-thingstodo px-3 text-white py-2 border rounded-full cursor-pointer" onClick={logout}>{((user.email[0]).toUpperCase())}</div>
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
