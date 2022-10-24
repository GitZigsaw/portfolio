import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    const projects = ['Static Website','Mathematical Conjectures','Dynamic Website'];
  return (
    <div className='relative h-screen flex justify-center items-center'>
        <h3 className="absolute top-20 uppercase tracking-[20px]
         text-gray-500 text-2xl font-semibold">Projects</h3>

        <motion.div
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:0.2
        }}
        transition={{
            duration:1
        }}
        className='bg-yellow-400 h-[200px] w-full absolute skew-y-12'></motion.div>

        <motion.div 
        initial={{
            opacity:0,
            translateX:200
        }}
        whileInView={{
            opacity:1,
            translateX:0
        }}
        transition={{
            duration:2
        }}
        className='z-10 text-2xl underline text-yellow-400'>
            <ul className="space-y-10">
            {projects.map(project => (
                <li className='hover:text-gray-500 transition duration-500
                hover:translate-x-2'><a href="#projects">{project}</a></li>
            ))}
            </ul>
            
        </motion.div>
        </div>
  )
}

export default Projects