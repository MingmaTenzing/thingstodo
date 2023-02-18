import BottomNavigationBar from "@/components/BottomNavigationBar";
import Nav from "@/components/Nav"
import TaskTemplate from "@/components/TaskTemplate"
import { auth, db } from "@/firebase/init";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

function pendingtasks() {

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

  console.log(data)




    

  return (
    <div>
        <Nav  user={user}/>

        <main>
            <h1> Tasks Todo </h1>

            { data.map((task) => <TaskTemplate key={task.id} task={task} />)}


            
          


        </main>



        <BottomNavigationBar />

    </div>
  )
}
export default pendingtasks