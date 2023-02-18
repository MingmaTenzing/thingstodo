import { ClockIcon, PlusIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import Link from "next/link";
import { useRouter } from "next/router"


function BottomNavigationBar() {
  

  return (
    <div className="fixed bottom-0 w-full p-2 bg-footer text-white ">
        <div className=" flex justify-around items-center">
        <Link href={'/dashboard/pendingtasks'}   >  <ClockIcon className="w-8 sm:w-10 text-orange-400 " /></Link>
            <PlusIcon  className="w-8 sm:w-10  text-thingstodo" />
            <CheckCircleIcon className="w-8 sm:w-10  text-green-400" />
             
        </div>
    </div>
  )
}
export default BottomNavigationBar