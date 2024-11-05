import Link from "next/link";
import Photo from "@/components/Photo";
import React from "react";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <section className="h-full">
<div className="container mx-auto h-full">
<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
 
 {/*text*/ }
  <div className="text-center xl:text-left order-2 xl:order-none">
  <span className="text-xl"> Full-Stack Digital Marketer
  </span>
  <h1 className="h1 mb-6"> Hello i'm <br/> <span className="text-accent">Safa Dkhili</span></h1>
  <p className="max-w-[500px] mb-9 text-white/80"> 
  I specialize in creating dynamic and responsive websites using MERN stack, WordPress, and Next.js. With a strong background in these technologies, I deliver high-quality and efficient solutions for various web development projects.
  </p>
    {/* btn and  socials*/ }
    <div className="flex flex-col xl:flex-row items-center gap-8">
    <a href="/safadkhilicv.pdf" download="safadkhilicv.pdf">
      <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
        <span>Download CV</span>
        <FiDownload className="text-xl" />
      </Button>
    </a>
    <div className="mb-8 xl:mb-0">
      <Social  containerStyles="flex gap-6" iconStyles='w-9 h-9 border border-accent
       rounded-full flex justify-center items-center
        text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500
      
      ' />
    </div>
  </div>
  </div>
 

  {/*photo*/ }
  <div className="order-1 xl:order-none mb-8 xl:mb-0">
    <Photo/>
  </div>
</div>

</div>
<Stats/>
    </section>
  )
}

export default page
