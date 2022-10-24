import React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Image from "next/image"
import avatar from "../assets/me.jpg";
import {motion} from "framer-motion";
import Link from "next/link";

type Props = {}

export default function 
({}: Props) {
    const [text] = useTypewriter({
        words:  ["Computer Engineer", "Web Developer", "Writer","Reader"],
        loop:true,
        delaySpeed:2000
    });
  return (
    <div className='relative h-screen flex flex-col space-y-2 items-center justify-center 
        text-center pt-24'>

        <BackgroundCircles/>

        {/* Avatar Image */}
        <motion.div
        initial={{
            scale:1.5,
            opacity:0,
            y:100
        }}
        animate={{
            scale:1,
            opacity:1,
            y:0
        }}
        transition={{
            duration:2
        }}>
        <Image
            src={avatar}
            height="250"
            width="250"
            className="rounded-full object-cover"
            />
        </motion.div>


        {/* My Name */}
        <div>
            <motion.h2
            initial={{
                x:600
            }}
            animate={{
                x:0
            }}
            transition={{
                duration:2
            }}
            className='uppercase text-gray-500 font-semibold text-xl tracking-[5px]'>Prakash Poudel</motion.h2>

            {/* Typewriter */}
            <motion.h1 
            initial={{
                x:-600
            }}
            animate={{
                x:0
            }}
            transition={{
                duration:2
            }}
            className="text-2xl text-yellow-400 font-bold ">
                <span>{text}</span>
                <Cursor cursorColor="red"/>
            </motion.h1>
        </div>

        <motion.div
        initial={{
            opacity:0,
            y:200
        }}
        animate={{
            opacity:1,
            y:0
        }}
        transition={{
            duration:2
        }}
        >
            <Link href="#about"><button className="heroButton">About</button></Link>
            <Link href="#experience"><button className="heroButton">Experience</button></Link>
            <Link href="#skills"><button className="heroButton">Skills</button></Link>
            <Link href="#projects"><button className="heroButton">Projects</button></Link>
            <Link href="#contact"><button className="heroButton">Contact Me</button></Link>
        </motion.div>
        
        
    </div>
  )
}