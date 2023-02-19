import BottomNavigationBar from "@/components/BottomNavigationBar";
import Nav from "@/components/Nav"
import TaskTemplate from "@/components/TaskTemplate"
import { auth, db } from "@/firebase/init";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

function Pendingtasks() {

    const [user, setUser] = useState({});
    const [userID, setUserID] = useState('')
    const [data, setData] = useState([]);
    


    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setUserID(user.uid)
        }
      })
  

    },[])


  
   


  async function getPostByUid() {
    
    const postCollectionRef = await query(collection(db, "tasks"),where("uid", '==', userID));
  
    const { docs } = await getDocs(postCollectionRef);

    setData(docs.map((doc) => ({...doc.data(), id:doc.id})));
  
    
  
  }
  getPostByUid();





    

  return (
    <div>
        <Nav  user={user}/>

        <main>
            <h1>Your Tasks</h1>

            <div className="space-y-3 ">

            {
             data.map((task) => <TaskTemplate key={task.id} task={task} />)
             
             }
             </div>


            
          


        </main>



        <BottomNavigationBar data={data} />

    </div>
  )
}
export default Pendingtasks