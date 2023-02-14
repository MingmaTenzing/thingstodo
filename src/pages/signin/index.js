import Image from "next/image";
import { useState } from "react";
import logo from "../../assests/logoxl.png";
import { auth } from "@/firebase/init";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ScaleLoader } from "react-spinners";
import Link from "next/link";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();

  const [error, setError] = useState();

  function signInUser(event) {
    event.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false);
        setUser(user);
        
      })
      .catch((error) => {
        setError(error.code);
        setLoading(false);
      });
  }

  return (
    <div>
      <div className="flex flex-col items-center pt-[100px]">
        <div className="flex flex-col items-center space-y-5 mb-5 ">
          <Image src={logo} alt="thingstodo logo" width={200} height={200} />
          <h1 className="font-bold text-lg ">
            {" "}
            SignIn to your <span className="text-thingstodo">
              Thingstodo
            </span>{" "}
            account
          </h1>
        </div>
        <form
          className=" border py-[70px] px-10 rounded-lg space-y-6 "
          onSubmit={signInUser}
        >
          {error === "auth/user-not-found" && (
            <div>
              <h1 className=" text-red-500 text-sm">
                No user exists with this email address
              </h1>
            </div>
          )}
          {error === "auth/wrong-password" && (
            <div>
              <h1 className=" text-red-500 text-sm">Your password is wrong</h1>
            </div>
          )}

          <div>
            <h1 className="text-sm"> Enter your email Address</h1>
            <input
              required
              type="email"
              placeholder="email@gmail.com"
              className="border px-5 py-2 text-sm outline-none rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div>
            <h1 className="text-sm"> Enter your password </h1>
            <input
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border outline-none px-5 py-2 text-sm rounded-lg"
            ></input>
          </div>

          <div className="flex space-x-2 items-center">
            <button
              type="submit"
              className="border py-2 px-4 bg-thingstodo text-white rounded-lg"
            >
              Sign In
            </button>
            {loading ? (
              <>
            
                <ScaleLoader color="#5271ff" height={30} />
              </>
            ) : null}
          </div>
         
        </form>
        <div className=" text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup">
              <span className="text-thingstodo">Sign Up</span>
            </Link>
          </div>
      </div>
    </div>
  );
}
export default SignIn;
