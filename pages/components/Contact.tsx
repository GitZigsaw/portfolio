import React from 'react'
import {SocialIcon} from "react-social-icons";

type Props = {}

function Contact({}: Props) {
  return (
    <div className='h-screen flex relative flex-col justify-center items-center'>

        <h3 className='absolute top-20 uppercase tracking-[20px]
         text-gray-500 text-2xl font-semibold'>Contact Me</h3>
        <div className='flex flex-col justify-center items-center space-y-5 mt-5'>
                <h3 className='text-yellow-400
                text-2xl font-semibold'>How may I be of your service ? </h3>
            <div>
            <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
                <span className='text-gray-400'>prakaas.poudell@gmail.com</span> 
            </div>
        </div>

        <form className='flex flex-col space-y-10 items-center mt-10'>
            <input type="text" className='contactInput' placeholder="Your Full Name" required/>
            <input type="email" className='contactInput' placeholder="Your Email(optional)"/>
            <textarea className='contactInput' placeholder='Your Message' required/>
            <button type='submit' className="bg-yellow-400 rounded w-[70px] text-gray-600 font-bold">Submit</button>
        </form>
        
    </div>
  )
}

export default Contact