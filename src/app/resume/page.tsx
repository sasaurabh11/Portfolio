"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

const about = {
  title : "About me",
  description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsa, quo tempore cum sint repudiandae labore corrupti sed, aut, architecto maxime nemo? Animi, aperiam explicabo alias illum obcaecati praesentium amet! In officiis labore alias qui est ipsum veniam rerum accusantium.",

  info : [
    {
      fieldName : "Name",
      fieldValue : "Saurabh"
    },
    {
      fieldName : "Phone",
      fieldValue : "+91 6393722861"
    },
    {
      fieldName : "Email",
      fieldValue : "sesaurabh8052@gmail.com"
    },
    {
      fieldName : "Nationality",
      fieldValue : "Indian"
    },
    {
      fieldName : "Languages",
      fieldValue : "English, Hindi"
    }
  ]
}

const experience = {
  icon : '/assests/resume/badge.svg',
  title : "My Experience",
  description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsa, quo tempore cum sint repudiandae labore corrupti sed, aut, architecto maxime nemo? Animi, aperiam explicabo alias illum obcaecati praesentium amet! In officiis labore alias qui est ipsum veniam rerum accusantium.",
  items : [
    {
      position : "Frontend Developer",
      company : "Google",
      duration : "2019 - 2021",
    },
    {
      position : "Backend Developer",
      company : "Facebook",
      duration : "2017 - 2019",
    }
  ]
}

const education = {
  icon : "/assests/resume/cap.svg",
  title : "My Education",
  description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsa, quo tempore cum sint repudiandae labore corrupti sed, aut, architecto maxime nemo? Animi, aperiam explicabo alias illum obcaecati praesentium amet! In officiis labore alias qui est ipsum veniam rerum accusantium.",
  items : [
    {
      degree : "B.Tech in Computer Science",
      institute : "IIIT Vadodara - International Campus Diu",
      duration : "2022 - 2026",
    },
    {
      degree : "Intermediate",
      institute : "S.K Modern Inter College Janghai, Jaunpur - Uttar Pradesh",
      duration : "2019 - 2021",
    }
  ]
}

const skills = {
  title : "My skills",
  description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsa, quo tempore cum sint repudiandae labore corrupti sed, aut, architecto maxime nemo? Animi, aperiam explicabo alias illum obcaecati praesentium amet! In officiis labore alias qui est ipsum veniam rerum accusantium.",
  skillList : [
    {
      icon : <FaHtml5 />,
      name : "HTML 5"
    },
    {
      icon : <FaCss3 />,
      name : "CSS 3"
    },
    {
      icon : <FaJs />,
      name : "JavaScript"
    },
    {
      icon : <FaReact />,
      name : "React JS"
    },
    {
      icon : <SiTailwindcss />,
      name : "Tailwind CSS"
    },
    {
      icon : <FaNodeJs />,
      name : "Node JS"
    },
    {
      icon : <SiNextdotjs />,
      name : "Next JS"
    }
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { animate, motion } from "framer-motion"

function Resume() {
  return (
    <motion.div
      initial= {{ opacity: 0 }}
      animate= {{ opacity: 1, 
        transition: {delay : 1.4, duration : 0.4, ease : "easeIn"}
      }}

      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >

      <div className=" container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[360px] mx-auto xl:mx-0">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="w-full">
            experience
          </TabsContent>

          <TabsContent value="education" className="w-full">
            education
          </TabsContent>

          <TabsContent value="skills" className="w-full">
            skills
          </TabsContent>

          <TabsContent value="about" className="w-full">
            about
          </TabsContent>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume