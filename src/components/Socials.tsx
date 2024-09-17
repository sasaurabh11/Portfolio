import Link from "next/link"
import {FaGithub, FaLinkedinIn , FaInstagram } from "react-icons/fa"
import {CgMail} from "react-icons/cg"

const socials = [
    {icon : <FaGithub />, path: "https://github.com/sasaurabh11"},
    {icon : <FaLinkedinIn />, path: "https://www.linkedin.com/in/11-saurabh-jaiswar/"},
    {icon : <FaInstagram />, path: "https://www.instagram.com/sasaurabh11/"},
    {icon : <CgMail />, path: "mailto:sesaurabh8052@gmail.com"}
]

function Socials({containerStyles, iconStyles} : {containerStyles : any, iconStyles : any}) {
  return (
    <div className={containerStyles}>
        {
            socials.map((item, index) => {
                 return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                 )
            })
        }
    </div>
  )
}

export default Socials