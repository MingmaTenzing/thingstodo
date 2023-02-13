import Head from "next/head";
import Image from "next/image";

import Nav from "@/components/Nav";
import todo from "../assests/todocolor.svg";
import womencalender from "../assests/womencalender.svg";
import tasks from "../assests/taskss.svg";
import visualdata from "../assests/visualdata.svg";
import opinion from "../assests/opinion.svg";
import review from "../assests/Review.png";
import review1 from "../assests/Review (1).png";
import review2 from "../assests/Review (2).png";
import review3 from "../assests/Review (3).png";
import review4 from "../assests/Review (4).png";
import socialmedia from "../assests/social media.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div className="">
      <Head>
        <title>ThingsToDo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
     <Nav />
        {/* TIME MANAGEMENT SECTION */}

       <main className="p-4 ">
        <div className=" md:space-x-2 lg:space-x-10 mt-20 md:mt-10 flex flex-col sm:flex-row sm:justify-center sm:space-x-6 items-center space-y-10">
          <div className=" max-w-[400px] md:max-w-[500px] space-y-2 md:space-y-3">
            <p className="   text-[30px] text-center font-[900] sm:text-[38px]  sm:text-start md:text-[38px]">
              {" "}
              <span className=" text-[#5271ff]">ThingsToDo</span> helps you
              acheive your goals
            </p>
            <p className=" text-center opacity-60 text-sm md:text-base md:max-w-[350px] sm:text-start  ">
              {" "}
              Whether you&apos;re a student, professional, or someone looking to
              improve their productivity, this todo app is the perfect tool to
              help you achieve your goals and stay organized.
            </p>
            <div className="flex justify-center sm:justify-start pt-3">
              <button className="border py-2 px-6 bg-[#5271ff] text-white rounded-lg">
                Get Started
              </button>
            </div>
          </div>

          <div className="flex flex-col ">
            <Image
              src={todo}
              alt=''
              width={100}
              height={100}
              className="w-[250px] md:w-[350px] "
            />
            <Image
              src={womencalender}
              width={100}
              alt=''
              height={100}
              className=" hidden md:inline w-[250px]  md:w-[350px]"
            />
          </div>
  </div> 

        {/* TIME MANAGEMENT SECTION */}
       
        <div className="p-5">

        <div className="border lg:w-[1000px] m-auto p-10 sm:p-4 rounded-lg sm:rounded-full  bg-slate-100 mt-20 flex flex-col-reverse sm:space-x-10 sm:flex-row sm:items-center sm:justify-center items-center ">
        <div className="mt-10">
            <Image src={tasks} width={100} height={100} alt='' className="w-[250px]  md:w-[350px]" />
          </div>
          <div className="space-y-3 ">
            <p className="font-[900] text-[30px] sm:text-[38px]  text-center sm:text-start ">Stay focus on your <span className=" text-thingstodo">tasks.</span></p>
            <p className="text-sm opacity-60 text-center sm:text-start">
              {" "}
              Schedule your tasks effortlessly and focus on the things you want
              to get done no matter how small it is. 
            </p>
          </div>

          
        </div>
        </div>
      


        {/* VISUAL DATA SECTION*/}
       
       <div className="flex flex-col justify-center items-center sm:flex-row  md:space-x-10 space-y-8 mt-20 ">

          <div className="space-y-3 ">
            <h1 className="font-[900] text-[30px] sm:text-[38px]  text-center sm:text-start"> <span className=" text-thingstodo">Visual Data</span>  for you to analyze </h1>
            <h1 className="text-sm opacity-60 text-center sm:text-start "> We provide you real time visual data of your tasks pending, completed, or upcoming. </h1>

          </div>

          <div>
            <Image src={visualdata} width={100} height={100} alt='' className="w-[250px]  md:w-[350px]" />

          </div>

        </div>




        {/* SHARE ACHIEVEMENTS*/}
      
     <div className="flex flex-col justify-center items-center sm:flex-row-reverse  space-y-8 mt-20 ">
     

          <div className="space-y-3 p-4">
            <h1 className="font-[900] text-[30px] sm:text-[38px]  text-center sm:text-start">Share your <span className=" text-thingstodo">  achievements</span> </h1>
            <h1 className="text-sm opacity-60 text-center sm:text-start max-w-[300px] m-auto sm:m-0"> Share you achievements and motivate others to get organized as well.</h1>

          </div>
          <div>
            <Image src={socialmedia} width={100} height={100} alt='' className="w-[250px]  md:w-[350px] sm:mr-10" />

          </div>

         

        </div>
        


        
        {/* CLIENT REVIEWS */}
        <div className="w-full p-10 mt-20  ">

        <div className="md:space-x-5 md:w-[700px] lg:w-[800px] md:m-auto md:flex md:justify-center md:items-center border rounded-lg md:rounded-3xl sm:rounded-3xl mt-20  bg-thingstodo text-white">

          <div className=" flex flex-col items-center">
            <div className="flex justify-between items-center md:max-w-[300px] mt-10 md:mt-0">
            <h1 className="font-semibold md:text-2xl "> Let&apos;s see what our clients say about us </h1>
           
         </div>
         <div className=" hidden md:flex pt-10">
            <Image src={opinion} width={100} height={100} alt='' className="w-[200px]" />
        </div>
          </div>

          <div className="  md:mt-10 md:w-[300px] lg:w-[300px]   ">

          <Carousel className="p-4 md:p-0  " >
            <div className="w-[300px] m-auto rounded-lg border overflow-hidden">
              <Image src={review} width={400} height={400}  alt='' className='w-10' />
            </div>
            <div className="w-[300px] m-auto rounded-lg border overflow-hidden">
              <Image src={review1} width={400} height={400} alt=''  className='w-10' />
            </div>
            <div className="w-[300px] m-auto rounded-lg border overflow-hidden">
              <Image src={review2} width={400} height={400}  alt='' className='w-10' />
            </div>
            <div className="w-[300px] m-auto rounded-lg border overflow-hidden">
              <Image src={review3} width={400} height={400} alt ='' className='w-10' />
            </div>
            
            <div className="w-[300px] m-auto rounded-lg border overflow-hidden">
              <Image src={review4} width={400} height={400} alt='' className='w-10' />
            </div>
            
            
            
          </Carousel>
          </div>
          
          

        </div>
        </div>
      </main>
      <Footer/>
    
    </div>
    
  );
}
