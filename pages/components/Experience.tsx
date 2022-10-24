import React from 'react'
import ExpCard from '../components/ExpCard'
import {motion} from 'framer-motion'


type Props = {}

function Experience({}: Props) {
  return (
    <motion.div
    initial={{
        x:300
    }}
    whileInView={{
        x:0
    }}
    transition={{
        duration:1
    }}
    className='p-10 h-screen relative flex justify-center items-center'>
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl
        font-semibold">Experience</h3>
        <div
        className="mt-10 w-full flex overflow-x-scroll snap-x snap-mandatory">
            <ExpCard/>
            <ExpCard/>
            <ExpCard/>
            <ExpCard/>
        </div>
    </motion.div>
  )
}

export default Experience