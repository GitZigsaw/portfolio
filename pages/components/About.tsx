import React from 'react'
import Image from 'next/image';
import Avatar from '../assets/me.jpg';
import {motion} from 'framer-motion';

type Props = {}

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row
    max-w-7xl p-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl
        font-semibold">
            About</h3>
            <motion.div
            initial={{
                x:-200
            }}
            whileInView={{
                x:0
            }}
            transition={{
                duration:0.5
            }}
           
            className="relative aspect-square w-[20vw] md:w-[40%] 
            lg:w-[30%] mx-10 lg:mx-24 top-10 md:top-2"
            >
                <Image
                src={Avatar}
                layout="fill"
                className="object-cover rounded-full"
                />
            </motion.div>

            <div className="relative w-[100%] space-y-5">
                {/* Heading */}
                <motion.h4
                initial={{
                    x:200,
                    opacity:0
                }}
                whileInView={{
                    x:0,
                    opacity:1
                }}
                transition={{
                    duration:0.5
                }}
              
                className="text-3xl font-semibold text-yellow-400">Hi, I'm Prakash Poudel.</motion.h4>

                {/* Description -> I am a ... */}
                <motion.p 
                initial={{
                    x:200,
                    opacity:0
                }}
                whileInView={{
                    x:0,
                    opacity:1
                }}
                transition={{
                    duration:1
                }}
               
                className="text-gray-400 text-sm">
                    <span className="text-yellow-400">I am a : </span>
                 Student, Computer Engineer, Reader, Writer, Creator.
                </motion.p>

                {/* Description -> Hobbies */}
                <motion.p 
                initial={{
                    x:200,
                    opacity:0
                }}
                whileInView={{
                    x:0,
                    opacity:1
                }}
                transition={{
                    duration:1.5
                }}
                
                className="text-gray-400 text-sm">
                    <span className="text-yellow-400">Hobbies : </span>
                    Reading, Writing, Movies, Folk Music, Playing the flute
                </motion.p>
            </div>
    </div>
  )
}

export default About