"use client";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'Bella Vista Resort',
        description: "A stunning website showcasing Bella Vista Resort, designed to provide an exceptional online experience for guests. Featuring a user-friendly interface and vibrant visuals, it highlights the resort's luxurious amenities and stunning views.",
        stack: [
            { name: "WordPress" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "JavaScript" }
        ],
        image: '/bvr.png',
        live: 'https://lesoleilbellavista.com/',
        github: "github.com/safahasnaoui22/"
    },
    {
        num: '02',
        category: 'frontend',
        title: 'iPhone',
        description: "An interactive 3D model of the iPhone created using Three.js, allowing users to explore its features in a visually engaging way. This project showcases the capabilities of modern web technologies to enhance user interaction.",
        stack: [
            { name: "Three.js" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "JavaScript" }
        ],
        image: '/phone.png',  
        live: "https://pocketpulse1.netlify.app/",  
        github: "https://github.com/safahasnaoui22/Phone_ThreeJs"  
    },
    
    {
        num: '03',
        category: 'frontend',
        title: 'Abou Sofiane Hotel',
        description: "A dynamic web application built with React.js that showcases the features and amenities of the Abou Sofiane Hotel. This project highlights modern UI/UX practices to enhance user experience and engagement.",
        stack: [
            { name: "React.js" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "JavaScript" }
        ],
        image: '/abous.png',  
        live: "https://abousofianehotel.netlify.app/", 
        github: "https://github.com/safahasnaoui22/Hotel-reactJs"  
    },
    {
        num: '04',
        category: 'frontend',
        title: 'Portfolio',
        description: "An interactive portfolio built with React showcasing my work, skills, and experiences. This project emphasizes responsive design and smooth navigation, providing a comprehensive view of my capabilities.",
        stack: [
            { name: "React.js" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "JavaScript" }
        ],
        image: '/sa.png',  
        live: "https://safadkhili25.netlify.app/",  
        github: "https://github.com/safahasnaoui22/safa"  ,
    },
    {
        num: '05',
        category: 'frontend',
        title: 'Restaurant Page',
        description: "A beautifully designed restaurant page developed with React, featuring a menu display, reservation options, and an elegant layout that enhances the dining experience online.",
        stack: [
            { name: "React.js" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "JavaScript" }
        ],
        image: '/rest.png',  // Use a suitable image for this project
        live: "https://absrestaurent2.netlify.app/",  // Add the live link when available
        github: "https://github.com/safahasnaoui22/abousofiane"  // Add the GitHub link when available
    }
]

const Work = () => {
    const [project , setProject] = useState (projects[0] )
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex ; 
        setProject(projects[currentIndex])
    }
    return (
        <motion.section initial={{opacity : 0 }} animate={{opacity : 1 ,
transition : { delay : 2.4 , duration : 0.4 , ease: "easeIn"}

        } } 
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 ">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px] " >
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
                    xl:justify-between order-2 xl:order-none  ">

<div className="flex flex-col gap-[30px] h-[50%] ">
    {/** outline num */}
    <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
        {project.num}
    </div>
    {/** project category */}
 <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
 transition-all duration-500 capitalize "> 
    {project.title} project</h2>
    {/** project decription */}
    <p className="text-white/60"> {project.description} </p>
    {/** stock */}

    <ul className="flex gap-4">
        {project.stack.map((item , index) => {
            return <li key={index} className="text-xl text-accent">  {item.name}
  
            {index !== project.stack.length - 1 && ","}
             </li>
        })  }
    </ul>

    {/** border */}
    <div className="border border-white/20"></div>
    {/*btns*/ }
    <div className="flex items-center gap-4">
        {/* live project btn*/ }
        <Link href={project.live} >
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px ] rounded-full bg-white/5
                flex justify-center items-center group
                ">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent "/>
                </TooltipTrigger>

<TooltipContent>
    <p>live project</p>
</TooltipContent>


            </Tooltip>
        </TooltipProvider>
        </Link>



  {/* github project btn*/ }
  <Link href={project.github} >
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px ] rounded-full bg-white/5
                flex justify-center items-center group
                ">
                    <BsGithub className="text-white text-3xl group-hover:text-accent "/>
                </TooltipTrigger>

<TooltipContent>
    <p>Github repository</p>
</TooltipContent>


            </Tooltip>
        </TooltipProvider>
        </Link>
        
    </div>
</div>

                    </div>
                    <div className="w-full xl:w-[50%]  ">

                        <Swiper spaceBetween={30}
                        slidesPerView={1}
                        className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}
                        >
                            {projects.map((project , index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex
                                    justify-center items-center bg-pink-50/20
                                    ">
                                        {/** overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full
                                        bg-black/10 z-10
                                        ">

                                        </div >
                                        {/** image */}
                                        <div className="relative w-full h-full">
                                            <Image
                                            src={project.image}
                                            fill
                                            className="object-cover"
                                            alt=""
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            {/** slider btn*/}
                            <WorkSliderBtns 
  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
                  xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none  "
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
                  w-[44px] h-[44px] flex justify-center items-center transition-all
                  " 
/>

                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work
