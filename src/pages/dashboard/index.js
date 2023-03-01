import Head from "next/head";
import { useRouter } from "next/router"


function Index() {
  const router = useRouter();
  router.push("/dashboard/addtasks")
  return (
    <>
      
      <Head>
        <title>ThingsToDo</title>
        <meta name="description" content="Thingstodo Web Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logosm.png" />
      </Head>
      
    </>
  )
}
export default Index