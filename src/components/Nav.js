import Image from "next/image"
import biglogo from "../assests/logoxl.png"
function Nav() {
  return (
<div className=' p-4 flex items-center justify-between'>
       <div className='flex items-center space-x-4 '>
        <Image src={biglogo} alt="logo" className='w-[90px] md:w-[100px] ' />
        <div className='md:flex hidden space-x-3 text-sm'>
          <p>Home</p> 
          <p>Product</p> 
          <p>Pricing</p> 
          <p>Resources</p> 
          <p>Contact Us</p> 
           </div>
           </div>
           <div className='flex space-x-2'>
           <button className='border py-1 px-2 md:py-2 md:px-3 rounded-lg text-sm'>Log in</button>
           <button className='border py-1 px-2  md:py-2 md:px-3 rounded-lg text-sm bg-black text-white'>Sign up</button>
      </div>
      </div>
  )
}
export default Nav