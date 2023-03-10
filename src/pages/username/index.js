import { auth } from "@/firebase/init"
import { updateProfile } from "firebase/auth"
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";
import { login, selectUser } from "slices/userSlice";
import logo from '../../assests/logoxl.png'


function CreateProfile() {
   

    
    const [userName, setUserName] = useState(""); 
    const [photoLink, setPhotoLink] = useState(""); 
    const [loading, setLoading] = useState(false); 
    
    const router = useRouter();
    console.log(userName, photoLink)

    const user = useSelector(selectUser);
    const dispatch = useDispatch();



function addnameandImage(event) {
    event.preventDefault();
    

    updateProfile(auth.currentUser, {
        displayName: userName,
        photoURL: photoLink,
    }).then (()=> {

      dispatch(login({
        uid: user.uid,
        email: user.email,
        displayName: userName,

      }))
        console.log("Profile Updated");
        console.log(auth.currentUser);
        router.push("/dashboard/addtasks")
        
    }).catch((error) => {
        console.log(error);
    })

}


  return (
    <div>
      <Head>
        <title>Set UserName </title>
        <link rel="icon" href="/logosm.png" />
        
      </Head>
    <div className="flex flex-col items-center pt-[100px]">
      <div className="flex flex-col items-center space-y-5 mb-5 ">
        <Image src={logo} alt="thingstodo logo" width={200} height={200} onClick={() => router.push('/')} className='cursor-pointer'/>
        <h1 className="font-bold text-lg ">
          {" "}
        Almost There !!!
        </h1>
      </div>
      <form
        className=" border py-[40px] px-10 rounded-lg space-y-6 "
        onSubmit={addnameandImage}
      >
        <div>
          <h1 className="text-sm">What should we call you?</h1>
          <input
            required
            type="text"
            placeholder="John Doe"
            className="border px-5 py-2 text-sm outline-none rounded-lg"
            onChange={(event) => setUserName(event.target.value)}
          ></input>
        </div>
 
      
            <div>
              <h1 className="text-sm"> Enter your profile image URL !Optional! </h1>
              <input
                
                type="text"
                placeholder="https://image/profile.jpg"
                onChange={(e) => setPhotoLink(e.target.value)}
                className="border  border-gray-200 outline-none px-5 py-2 text-sm rounded-lg"
              ></input>
            </div>
          

        <div className="flex space-x-2 items-center">
          <button
            type="submit"
            className="border py-2 px-4 bg-thingstodo text-white rounded-lg"
          >
            Let&apos;s Go!
          </button>
         {loading? <> <ScaleLoader color="#5271ff" height={30} /></> : null} 
        </div>
      </form>
      <div className=" text-sm text-gray-600 pt-2">
          Already have an account?
          <Link href="/signin">
            <span className="text-thingstodo">Sign In</span>
          </Link>
        </div>
    </div>
  </div>
);
  
}
export default CreateProfile