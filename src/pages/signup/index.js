import Image from "next/image";
import { useState } from "react";
import logo from "../../assests/logoxl.png";
import { ScaleLoader } from "react-spinners";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/init";
import { Router, useRouter } from "next/router";
import { blueGrey } from "@mui/material/colors";
import Link from "next/link";
import { login } from "slices/userSlice";
import { useDispatch } from "react-redux";
import Head from "next/head";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [borderRed, setBorderRed] = useState(false);
  const [loading, setLoading] = useState(false);

const dispatch = useDispatch();
  const router = useRouter();

  function registerUser(event) {
    setLoading(true);

    event.preventDefault();

    if (password !== confirmpassword) {
      setBorderRed(true);
    } else {
      createUserWithEmailAndPassword(auth, email, confirmpassword)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(login({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
  
          }))
          setLoading(false);

          router.push("/username");
        })
        .catch((error) => {
          const erroCode = error.code;
          const errorMessage = error.message;
        });
    }
  }

  return (
    <div>
      
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Thingstodo Signup User" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logosm.png" />
      </Head>
      <div className="flex flex-col items-center pt-[100px]">
        <div className="flex flex-col items-center space-y-5 mb-5 ">
       <Link href={"/"} >  <Image src={logo} alt="thingstodo logo" width={200} height={200}  className='cursor-pointer'/> </Link>
          <h1 className="font-bold text-lg ">
            {" "}
            Create your <span className="text-thingstodo">Thingstodo</span>{" "}
            account
          </h1>
        </div>
        <form
          className=" border py-[40px] px-10 rounded-lg space-y-6 "
          onSubmit={registerUser}
        >
          <div>
            <h1 className="text-sm"> Enter your email Address</h1>
            <input
              required
              type="email"
              placeholder="email@gmail.com"
              className="border px-5 py-2 text-sm outline-none rounded-lg"
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>

          {borderRed ? (
            <>
              {" "}
              <div>
                <h1 className="text-sm"> Enter your password </h1>
                <input
                  required
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-red-600 outline-none px-5 py-2 text-sm rounded-lg"
                ></input>
              </div>
              <div>
                <h1 className="text-sm"> Confirm your password </h1>
                <input
                  required
                  type="password"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  className=" border border-red-600 outline-none px-5 py-2 text-sm rounded-lg"
                ></input>
              </div>
            </>
          ) : (
            <>
              <div>
                <h1 className="text-sm"> Enter your password </h1>
                <input
                  required
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border  border-gray-200 outline-none px-5 py-2 text-sm rounded-lg"
                ></input>
              </div>
              <div>
                <h1 className="text-sm"> Confirm your password </h1>
                <input
                  required
                  type="text"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  className="border border-gray-200 outline-none px-5 py-2 text-sm rounded-lg"
                ></input>
              </div>
            </>
          )}
          <div className="flex space-x-2 items-center">
            <button
              type="submit"
              className="border py-2 px-4 bg-thingstodo text-white rounded-lg"
            >
              Sign up
            </button>
           {loading? <> <ScaleLoader color="#5271ff" height={30} /></> : null} 
          </div>
        </form>
        <div className="mt-4 text-sm text-gray-600">
            Already have an account?
            <Link href="/signin">
              <span className="text-thingstodo">Sign In</span>
            </Link>
          </div>
      </div>
    </div>
  );
}
export default Signup;
