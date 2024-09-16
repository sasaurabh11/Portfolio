"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const info = [
  {
    icon : <FaPhoneAlt />,
    title : "Phone",
    description : "+91 6393722861"
  },
  {
    icon : <FaEnvelope />,
    title : "Email",
    description : "sesaurabh8052@gmail.com"
  },
  {
    icon : <FaMapMarkerAlt />,
    title : "Address",
    description : "Jaunpur, Uttar Pradesh, India - 222165"
  }
]

import { motion } from "framer-motion"

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {delay : 1.4, duration : 0.4, ease : "easeIn"}
      }}

      className="py-6"
    >
      <div className=" container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              
              <h3 className="text-4xl text-accent">Let's work together</h3>

              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis quae, maiores doloremque impedit consectetur nisi. Quisquam rem cum, nemo deleniti quam vero obcaecati culpa doloribus beatae, consequatur est! Saepe.</p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Firstname"/>
                  <Input type="lastname" placeholder="Lastname"/>
                  <Input type="email" placeholder="Email Address"/>
                  <Input type="phone" placeholder="Phone Number"/>
              </div>

              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Software Development</SelectItem>
                    <SelectItem value="cst">Frontend Development</SelectItem>
                    <SelectItem value="mst">Backend Development</SelectItem>
                    <SelectItem value="fst">Flask Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea 
                className="h-[200px]"
                placeholder="Type your message here..."
              />

              {/* button */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>

            </form>
          </div>

          <div className="flex-1 xl:ml-5 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {
                info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>

                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>

                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>

      </div>
      
    </motion.section>
  )
}

export default Contact