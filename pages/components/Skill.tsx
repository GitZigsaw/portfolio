import React from 'react'

type Props = {}

function Skill({}: Props) {
  return (
    <div className="relative flex group cursor-pointer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="" 
        className=' aspect-square rounded-full border border-gray-500 w-[60px]
        group-hover:scale-[1.25] transition duration-300'/>
        
            <div className="absolute bg-gray-500 rounded-full aspect-square
             w-[60px] opacity-0 group-hover:opacity-80
             group-hover:scale-[1.25] transition duration-300">
                <div className="flex justify-center items-center h-full text-yellow-400">
                    60%
                </div>
            </div>
        
    </div>
  )
}

export default Skill