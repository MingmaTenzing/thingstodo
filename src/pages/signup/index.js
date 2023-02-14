import Image from "next/image";
import { useState } from "react";
import logo from "../../assests/logoxl.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/init";
import { Router, useRouter } from "next/router";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [borderRed, setBorderRed] = useState(false);
  const [user , setUser] = useState()

  const router = useRouter();


  function registerUser(event) {
    event.preventDefault();
    if (password !== confirmpassword) {
      setBorderRed(true);
    } else {
        
      createUserWithEmailAndPassword( auth, email, confirmpassword).then ((userCredential) => {
       setUser(userCredential.user);
       router.push('/')
        
      }).catch ((error) => {
        const erroCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      })
    }


   
  


  }
  




  return (
    <div>
      <div className="flex flex-col items-center pt-[100px]">
        <div className="flex flex-col items-center space-y-5 mb-5 ">
          <Image src={logo} alt="thingstodo logo" width={200} height={200}  />
          <h1 className="font-bold text-lg ">
            {" "}
            Create your <span className="text-thingstodo">Thingstodo</span>{" "}
            account
          </h1>
        </div>
        <form
          className=" border py-[70px] px-10 rounded-lg space-y-6 "
          onSubmit={registerUser}
        >
          <div>
            <h1 className="text-sm"> Enter your email Address</h1>
            <input required 
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
                <input required
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-red-600 outline-none px-5 py-2 text-sm rounded-lg"
                ></input>
              </div>
              <div>
                <h1 className="text-sm"> Confirm your password </h1>
                <input required
                  type="text"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  className=" border border-red-600 outline-none px-5 py-2 text-sm rounded-lg"
                ></input>
              </div>
            </>
          ) : (
            <>
              <div>
                <h1 className="text-sm"> Enter your password </h1>
                <input required
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border  border-gray-200 outline-none px-5 py-2 text-sm rounded-lg"
                ></input>
              </div>
              <div>
                <h1 className="text-sm"> Confirm your password </h1>
                <input required
                  type="text"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  className="border border-gray-200 outline-none px-5 py-2 text-sm rounded-lg"
                ></input>
              </div>
            </>
          )}

          <button
            type="submit"
            className="border py-2 px-4 bg-thingstodo text-white rounded-lg"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
