"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "SmartGenie - AI",
    description:
      "SmartGenie a comprehensive full-stack AI SaaS platform using React and Express, designed to provide seamless AI-powered solutions for image generation, website summarization, and automated video creation. Integrated a real-time AI chatbot that allows users to ask questions instantly, alongside an intelligent web scraping and summarization system that efficiently transforms web content into concise summaries.",
    href: "https://smart-genie-ai.vercel.app",
    github: "https://github.com/sasaurabh11/SmartGenie",
    imageUrl: "https://res.cloudinary.com/dz41q2wez/video/upload/v1741804212/Recording_2025-03-12_234241_iu1768.mp4",
  },
  {
    num: "02",
    title: "ChatSpark",
    description:
      "ChatSpark is a real-time chat platform built with the MERN stack, Socket.io, and Material UI. It offers seamless instant messaging, multimedia sharing, and real-time online status updates. The application is designed to handle high traffic, providing a smooth and responsive user experience through a reliable and scalable communication system.",
    href: "https://chat-spark-app.vercel.app/",
    github: "https://github.com/sasaurabh11/ChatSpark-Real-Time-Chat-App",
    imageUrl: "https://res.cloudinary.com/dz41q2wez/video/upload/v1726757542/fwng9hur4zyqgz0fwdw6.mp4",
  },
  {
    num: "03",
    title: "SnapSizzle",
    description:
      "SnapSizzle is a dynamic snap application built with Next.js, offering user-to-user messaging with text and photos. It features media sharing for seamless snap exchanges and real-time notifications to keep users updated on new messages and snaps. The app is designed for efficient performance with server-side rendering, providing an engaging and responsive user experience.",
    href: "https://snap-sizzle.vercel.app/",
    github: "https://github.com/sasaurabh11/SnapSizzle",
    imageUrl: "https://res.cloudinary.com/dz41q2wez/video/upload/v1726757933/zsa6rooi3sgosbjv7hpg.mp4",
  },
  {
    num: "04",
    title: "Drive App",
    description:
      "Drive App is a full-stack web application that enables users to sign up and log in using Google authentication, create and edit text-based letters, and save them directly to their Google Drive as Google Docs files. It features a simple text editor for letter creation, secure JWT-based session management, and an intuitive letter management system that provides easy access to saved documents with direct Google Drive links.",
    href: "https://drive-app-roan.vercel.app",
    github: "https://github.com/sasaurabh11/Drive-app",
    imageUrl: "/assests/drive-app.png",
  },
  {
    num: "05",
    title: "Role-Based Access Control",
    description:
      "Role-Based Access Control (RBAC) Application is a robust platform designed to streamline user and role management while enhancing security and operational efficiency. Built with React.js, Redux, and Axios for the frontend, and optionally powered by Node.js and Express.js for backend API simulation, this application enables seamless CRUD operations on users, roles, and permissions.",
    href: "https://role-based-access-control-three.vercel.app/",
    github: "https://github.com/sasaurabh11/Role-Based-Access-control",
    imageUrl: "https://res.cloudinary.com/dz41q2wez/image/upload/v1736971899/Screenshot_2025-01-16_013934_im7roa.png",
  },
  {
    num: "06",
    title: "Flight Finder",
    description:
      "Flight Finder is a web application that allows users to search for flight prices from their origin to destination. It supports both one-way and round-trip searches, providing accurate fare details for different routes. The app features a seamless authentication system powered by Clerk, ensuring secure user sessions.",
    href: "https://flight-api-blond.vercel.app",
    github: "https://github.com/sasaurabh11/flight-api",
    imageUrl: "/assests/FlightFinder.png",
  },
  {
    num: "07",
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
