import BottomNavigationBar from "@/components/BottomNavigationBar";
import Nav from "@/components/Nav"
import { auth } from "@/firebase/init";
import { BottomNavigation } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function pendingtasks() {

    const [user, setUser] = useState();
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        }
      })
      console.log(user)

  return (
    <div>
        <Nav  user={user}/>

        <main>
            <h1> Tasks Todo </h1>


        </main>



        <BottomNavigationBar />

    </div>
  )
}
export default pendingtasks