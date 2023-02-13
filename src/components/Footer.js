import Image from "next/image";
import logo from "../assests/logoxl.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Instagram from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <div className="bg-footer text-white flex flex-col items-center space-y-8 p-8 mt-10">
      <div className="flex items-center md:space-x-[200px] lg:space-x-[400px]">
        <div className=" flex  flex-col space-y-4 invert brightness-0 ">
          <Image src={logo} alt="thingstodo logo" width={100} height={100}  className='w-[120px]  '/>
        <p className="text-sm opacity-60 hidden md:flex ">The best todo app in the world. </p>
        </div>

        <div className="hidden md:flex space-x-10 md:pt-10 ">

          <div>
            <h1 className="font-bold"> Services</h1>
            <p className="text-sm  opacity-90"> About Us</p>
            <p className="text-sm  opacity-90"> Contact Us</p>
            <p className="text-sm  opacity-90"> Contact Us</p>
            <p className="text-sm  opacity-90"> Feature Us</p>
          </div>

          <div>
            <h1 className="font-bold"> Resources</h1>
            <p className="text-sm  opacity-90"> Apps</p>
            <p className="text-sm  opacity-90"> Developer</p>
            <p className="text-sm  opacity-90"> Integration</p>
            <p className="text-sm  opacity-90"> Pricing</p>
          </div>
          <div>
            <h1 className="font-bold"> Support </h1>
            <p className="text-sm  opacity-90"> License</p>
            <p className="text-sm  opacity-90"> Get Started</p>
            <p className="text-sm  opacity-90"> Affiliate</p>
            <p className="text-sm  opacity-90"> FAQs</p>
          </div>
          <div>
            <h1 className="font-bold"> Contact </h1>
            <p className="text-sm  opacity-90"> email@gmail.com</p>
            <p className="text-sm  opacity-90">+12345678</p>
   
          </div>
          
        </div>
      </div>

      <div className="flex text-white md:pt-10 ">
        <div className="space-x-5">
          <InstagramIcon style={{ fontSize: "25" }} />
          <FacebookIcon style={{ fontSize: "25" }} />
          <GitHubIcon style={{ fontSize: "25" }} />
          <LinkedInIcon style={{ fontSize: "25" }} />
  
        </div>
        
      </div>
      <p className="text-center text-[10px]"> Copyright @ MINGMA TENZING SHERPA 2023</p>
    </div>
  );
}
export default Footer;
