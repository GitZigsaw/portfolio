import React from 'react'
import Image from 'next/image'
import avatar from '../assets/me.jpg'

type Props = {}

function ExpCard({}: Props) {
  return (
    <div className='flex flex-col flex-shrink-0 mx-2 p-5  my-10
    bg-[#292929] w-full snap-center items-center'>
        <div className='relative aspect-square h-[100px] '>
            <Image
                src={avatar}
                layout="fill"
                className="object-cover rounded-full"
            />
        </div>
        <h3 className='text-3xl font-semibold text-yellow-400'>Pokhara University</h3>
        <h4 className='text-2xl text-yellow-400'>School of Engineering</h4>
        <p className="my-5 text-gray-500">College Third Year Project Supervisor</p>
        <ul className="list-disc mx-5 text-gray-500">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript, JQuery</li>
            <li>PHP</li>
            <li>MySQL</li>
        </ul>
    </div>
    
  )
}

export default ExpCard