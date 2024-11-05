"use client";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { SiCanva, SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
     FaBriefcase, FaCss3, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact, FaWordpress } from "react-icons/fa";

const about = {
    title: "About me",
    description: "I am a dedicated Full-Stack Digital Marketer with expertise in web development and digital strategies. I thrive on creating engaging online experiences that connect with audiences and drive results.",
    info: [
        { filedName: "Name", filedValue: "Safa Dkhili" },
        { filedName: "Phone", filedValue: "+216 54 812 998" },
        { filedName: "Experience", filedValue: "5 years" },
        { filedName: "Nationality", filedValue: "Tunisian" },
        { filedName: "Email", filedValue: "dkhilisafadev@gmail.com" },
    ]
};

const experience = {
    icon: <FaBriefcase />,
    title: 'Full-Stack Digital Marketer',
    description: "Skilled in web development, digital marketing, and content creation. Experienced in leveraging modern technologies to build dynamic websites and effective marketing campaigns.",
    items: [
        { company: 'Pytunity', position: "React Developer", duration: "15-08-2022 - 30-09-2022" },
        { company: 'Freelancer', position: "Full Stack Developer", duration: "10-2022 - 02-2024" },
        { company: 'Abou Sofiane Hotel & Aquapark', position: "Full-Stack Digital Marketer", duration: "03-2024 - 10-2024" },
    ]
};

const education = {
    icon: <FaGraduationCap />,
    title: 'Education',
    description: "Educational background in management information technology, specializing in full stack development.",
    items: [
        {  degree: "Higher Technician in Management Information Technology", duration: "2020 - 2022" }
    ]
};
const skills = {
    icon: '',
    title: 'Skills',
    description: "Proficient in web development and design tools, with a strong background in modern technologies and frameworks.",
    skillList: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <FaWordpress />, name: "WordPress" },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <SiCanva />, name: "Canva" },
        { icon: <SiNextdotjs />, name: "Next.js" },

     
    ]
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* Dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* Dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index}>
                                          <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl
                                                flex justify-center items-center group
                                                " >
                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                        {skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize" >{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                            </TooltipProvider>  
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                           <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold"> {about.title} </h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 "> {about.description} </p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                            mx-auto xl:mx-0 ">
                                {about.info.map ((item , index) =>  {
                                    return <li key={index} className="flex items-center justify-center
                                    xl:justify-start gap-4
                                    " >
                                        <span className="text-white/60">
                                            {item.filedName}
                                        </span>
                                        <span className="text-xl">
                                            {item.filedValue}
                                        </span>
                                    </li>
                                }) }
                            </ul>
                           </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
