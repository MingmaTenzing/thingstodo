import { ClockIcon, PlusIcon, CheckCircleIcon } from "@heroicons/react/24/outline"


function BottomNavigationBar() {
  return (
    <div className="fixed bottom-0 w-full p-2 bg-footer text-white ">
        <div className=" flex justify-around items-center">
            <ClockIcon className="w-10 text-orange-400 " />
            <PlusIcon  className="w-10  text-thingstodo" />
            <CheckCircleIcon className="w-10  text-green-400" />
             
        </div>
    </div>
  )
}
export default BottomNavigationBar