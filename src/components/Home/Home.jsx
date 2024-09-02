import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React from 'react'
import Resume from '../../assets/Resume-Js.pdf'

function Home() {
  useGSAP(()=>{
    gsap.from("#home h1,.desc",{
      scale:0,
      opacity:0,
      y:50,
      duration:1,
      delay:0.4,
    })
    gsap.from("#resume",{
      opacity:0,
      scale:0,
      delay:1.4
    })
  })
  return (
    <div className='h-screen bg-[#000000fd] w-full text-white flex flex-col justify-center items-center ' id='home'>
      <div className='flex  flex-col items-center max-[450px]:text-center max-[450px]:gap-9'>
      <h1 className='text-4xl  font-bold'>HEY, I'M <span className=' text-[#4bff33]'>TANISHQ SHARMA</span></h1>
      <p className='desc text-2xl font-thin mt-4'>Passionate Software Developer crafting solutions with code.</p>
      </div>
      <div  id='resume'  className=' font-semibold text-[18px] mt-6 origin-center   '>
      <a href={Resume} target='_blank' className='rounded-md border-2 py-2 px-4 custom-transform inline-block hover:text-black hover:bg-white hover:-rotate-0 transition-all duration-500' >DownLoad CV</a>
      </div>
    </div>
  )
}

export default Home