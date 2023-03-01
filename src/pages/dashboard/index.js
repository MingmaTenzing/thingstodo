import { useRouter } from "next/router"


function Index() {
  const router = useRouter();
  router.push("/dashboard/addtasks")
  return (
    <>
      
      
    </>
  )
}
export default Index