"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "From sleek user interfaces to robust backend solutions, I specialize in creating modern, responsive, and dynamic websites using cutting-edge technologies like React, Next.js, and Tailwind CSS.",
    href: "",
  },
  {
    num: "02",
    title: "Software Development",
    description:
      "With expertise in full-stack software development, I can build custom software solutions tailored to your needs. Whether it's a desktop application, a REST API, or a scalable microservice architecture.",
    href: "",
  },
  {
    num: "03",
    title: "Flask Development",
    description:
      "Leveraging the power of Python and Flask, I can design and deploy efficient backend systems that integrate seamlessly with your frontend.",
    href: "",
  },
  {
    num: "04",
    title: "Competitive Programming & Problem Solving",
    description:
      "With over 600+ Data Structures and Algorithms problems solved, I have honed my problem-solving skills in competitive programming. I can help you prepare for coding competitions, improve algorithmic thinking, and solve complex challenges efficiently.",
    href: "",
  },
  {
    num: "05",
    title: "SEO Optimization",
    description:
      "In today’s competitive landscape, visibility is key. I can optimize your website to rank higher on search engines, driving organic traffic and boosting your online presence through effective SEO strategies.",
    href: "",
  },
];

import { motion } from "framer-motion";

function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className=" container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 1.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>

                {/* description */}
                <p className="text-white/60">{service.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
