import { useRouter } from "next/router"


function index() {
  const router = useRouter();
  router.push("/dashboard/addtasks")
  return (
    <>
      
      
    </>
  )
}
export default index