import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React, { useRef } from 'react'


function Skills({name,percent,svg}) {
  const gsapRef=useRef();
  useGSAP(()=>{
    gsap.from(gsapRef.current,{
      width:0,
      duration:1,
      delay:0.5
    })
  })
  return (
    <div className='border group hover:scale-110 hover:transition-scale duration-500 relative overflow-y-hidden h-[120px] rounded-2xl border-gray-700 text-white max-[410px]:w-auto w-[350px] bg-black '>
        <div className='flex p-7 items-center gap-7'>
            <p className='text-3xl'>
            {svg}    
            </p>
            <h3 className='text-xl '>{name}</h3>
            <p className='absolute top-2 right-3 text-[13px]  border border-gray-500 px-3 py-[2px] font-semibold rounded-2xl'>{percent}%</p>
        </div>
        <div className='w-[90%]   h-1 rounded-xl bg-gray-700 group-hover:transition-all duration-300 group-hover:shadow-[0_-10px_100px_13px_rgba(51,255,51,0.73)] absolute bottom-0 left-5'>
            <div ref={gsapRef} className=' bg-[rgba(51,255,51,0.73)]  rounded-xl h-1 absolute bottom-0 left-0' style={{width:`${percent}%`}}></div>
        </div>
    </div>
  )
}

export default Skills