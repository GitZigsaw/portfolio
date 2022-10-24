import React from 'react'
import {SocialIcon} from "react-social-icons";
import { motion } from 'framer-motion';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center'>
        {/* Left side social icons */}
        <motion.div
        initial={{
            scale:2
        }}
        animate={{
            scale:1
        }}
        transition={{
            duration:1
        }}
        className='flex flex-row items-center'>
            <SocialIcon url="https://github.com/GitZigsaw" fgColor="gray" bgColor="transparent"/>
            <SocialIcon url="https://t.me/yomamagay69" fgColor="gray" bgColor="transparent" />
        </motion.div>
    
    </header>
  )
}