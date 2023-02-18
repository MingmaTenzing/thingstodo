import BottomNavigationBar from "@/components/BottomNavigationBar";
import Nav from "@/components/Nav";
import { auth } from "@/firebase/init";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function dashBoard () {
    const [user, setUser] = useState();

    useEffect (() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              console.log(user)
            }
          })

    }, [user])


   
  return (
    <div>
       
        <Nav user={user} />
        
        

        <main className="mt-10">
            <h1 className="text-lg text-center "> Add the tasks you want <span> to do  </span> </h1>
            <form  className="pl-10 mt-10 space-y-5">
                <div> 
                <h1 className="text-sm">Task Title</h1>
                <input type="text" className="border w-[300px] h-10 rounded-lg"></input>
                </div>

                <div> 
                <h1 className="text-sm">Description</h1>
                <input type="text" className="border w-[300px] h-[100px] rounded-lg"></input>
                </div>
                </form>
        </main>
        <BottomNavigationBar />
    </div>
  )
}
export default dashBoard;