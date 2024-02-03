import { MenuIcon } from "lucide-react"
import Image from "next/image"
import MaxWidthWrapper from "../helpComponents/MaxWidhtWrapper"
import ThemeToggleButton from "../themeToggleButton/ThemeToggleButton"

const Navbar =()=>{
    return(
        <MaxWidthWrapper className="">
        <div className="w-full  bg--900 grid grid-cols-7 lg:grid-cols-12  mt-7 items-center gap-3">
           <div className="socialLogo lg:flex gap-2 hidden bg--200">
                <Image src="/facebook.png" alt="" width={24} height={24}/>
                <Image src="/instagram.png" alt="" width={24} height={24}/>
                <Image src="/youtube.png" alt="" width={24} height={24}/>
                <Image src="/tiktok.png" alt="" width={24} height={24}/>
           </div>
           <div className="bg--200 siteName col-span-5 lg:col-span-6 text-2xl font-bold flex lg:justify-center">
                    Blog Site Fewbe
           </div>
           <div className="bg--900 col-span-1 lg:col-span-1 flex justify-end md:justify-center">
            <ThemeToggleButton/>
           </div> 
           <div className=" bg--200 ml-0 col-span-1 flex justify-end lg:hidden mr-1" ><MenuIcon/></div>
           <div className="ml-0 hidden lg:col-span-2   lg:flex gap-3 bg--400 " >
            <div className="homepage">Homepage</div>
            <div className="contact">Contact</div>
            <div className="about">About</div>
            <div className="login">Login</div>
            <div className="login">Login</div>
           </div>
        </div>
        </MaxWidthWrapper>
        
    )
}

export default Navbar