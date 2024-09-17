"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "ChatSpark",
    description:
      "ChatSpark is a real-time chat platform built with the MERN stack, Socket.io, and Material UI. It offers seamless instant messaging, multimedia sharing, and real-time online status updates. The application is designed to handle high traffic, providing a smooth and responsive user experience through a reliable and scalable communication system.",
    href: "https://chat-spark-app.vercel.app/",
    github: "https://github.com/sasaurabh11/ChatSpark-Real-Time-Chat-App",
    imageUrl: "/assests/chatsparkpreview.mp4",
  },
  {
    num: "02",
    title: "SnapSizzle",
    description:
      "SnapSizzle is a dynamic snap application built with Next.js, offering user-to-user messaging with text and photos. It features media sharing for seamless snap exchanges and real-time notifications to keep users updated on new messages and snaps. The app is designed for efficient performance with server-side rendering, providing an engaging and responsive user experience.",
    href: "https://snap-sizzle.vercel.app/",
    github: "https://github.com/sasaurabh11/SnapSizzle",
    imageUrl: "/assests/snapsizzlepreview.mp4",
  },
  {
    num: "03",
    title: "Company Directory App",
    description:
      "The Company Directory App is an adaptive platform built using React.js and Flask, designed for seamless user interaction. It integrates RESTful APIs to manage data efficiently with MongoDB, ensuring smooth CRUD operations. With Axios and CORS, the app handles secure HTTP requests and manages cross-origin communication, providing a responsive and secure experience for users.",
    href: "https://comapany-directory.vercel.app/",
    github: "https://github.com/sasaurabh11/ComapanyDetails",
    imageUrl: "/assests/company-directory.png",
  },
];

function Work() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 1.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[40px]"
        >
          {projects.map((service, index) => {
            const isVideo = service.imageUrl.endsWith(".mp4") || service.imageUrl.endsWith(".webm");
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex-1 flex flex-col justify-center gap-3 group transition-transform duration-500"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>

                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* title */}
                <div className="w-full flex justify-between items-center">
                  <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                  <Link
                    href={service.github}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <FaGithub className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* website preview */}
                <div className="w-full h-[300px] relative">
                  {isVideo ? (
                    <video
                    src={service.imageUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="rounded-lg w-full h-full object-cover"
                  />
                  ) : (
                    <Image
                      src={service.imageUrl}
                      alt={`${service.title} preview`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  )}
                </div>


                {/* description */}
                <p className="text-white/60">{service.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Work;
