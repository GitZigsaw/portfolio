import React from 'react'
import Skill from '../components/Skill'
import {motion} from 'framer-motion'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:2
    }}
    className='h-screen relative flex
    flex-col text-center md:text-left justify-center items-center'>
        <h3 className="absolute top-20 uppercase tracking-[20px]
         text-gray-500 text-2xl font-semibold">Skills</h3>

         <h3 className="text-gray-500 tracking-widest absolute top-[150px]">Hover over a skill for current proficiency</h3>

         <div className="relative mt-28 grid grid-cols-4 gap-[5vw]">
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
         </div>
    </motion.div>
  )
}

export default Skills