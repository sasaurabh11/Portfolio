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
    },
    {
      position : "Backend Developer",
      company : "Facebook",
      duration : "2017 - 2019",
    },
    {
      position : "Backend Developer",
      company : "Facebook",
      duration : "2017 - 2019",
    },
    {
      position : "Backend Developer",
      company : "Facebook",
      duration : "2017 - 2019",
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

          <div className="min-h-[70vh] w-full">

            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {
                        experience.items.map((item, index) => {
                          return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        })
                      }
                    </ul>
                  </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {
                        education.items.map((item, index) => {
                          return <li key={index} className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.institute}</p>
                            </div>
                          </li>
                        })
                      }
                    </ul>
                  </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {
                      skills.skillList.map((skill, index) => {
                        return <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>

                              </TooltipTrigger>
                              <TooltipContent>
                                <p className=" capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      })
                    }
                  </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
                    <div className="flex flex-col gap-[30px]">
                      <h3 className="text-4xl font-bold">{about.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {about.description}
                      </p>

                      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                        {
                          about.info.map((item, index) => {
                            return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                              <span className="text-white/60">{item.fieldName}</span>
                              <span className="text-xl">{item.fieldValue}</span>
                            </li>
                          })
                        }
                      </ul>
                    </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume