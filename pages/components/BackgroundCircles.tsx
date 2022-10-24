import React from 'react'
import {motion} from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
        scale:2,
        opacity:0.5
    }}
    animate={{
        scale:1,
        opacity:1
    }}
    transition={{
        duration:2
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-yellow-400 rounded-full h-[220px] w-[220px] 
        mt-64 animate-ping' />
        <div className='absolute border border-yellow-400 rounded-full h-[450px] w-[450px] 
        mt-64 opacity-20' />
    </motion.div>
  )
}

export default BackgroundCircles