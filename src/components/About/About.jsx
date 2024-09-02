import React from 'react'
import Skill from '../Skills/Skills';
import Data from '../../data/SkillData';

function About() {
  return (
    <div className='h-screen max-[1170px]:h-full text-white w-full flex justify-between max-[880px]:flex-col items-center bg-[#252525] ' id='about'>
    <div className='mt-52 text-center flex flex-col items-center justify-center'>
      <h1 className='text-3xl '>ABOUT ME</h1>
      <div className='bg-black max-[480px]:h-[300px] flex items-center justify-center max-[480px]:w-[300px] relative h-[400px] w-[400px] rounded-full mt-5'>
      <p className='absolute w-[80%] max-[490px]:text-xl text-2xl '>I hold a Master's degree in Computer Applications , my experties lies in creating clean, efficient, and scalable code, with a focus on front-end technologies.</p>
      </div>
    </div>
    <div className='mt-32'>
      <h1 className='text-3xl text-center mb-5'>SKILLs</h1>
      <div className='grid grid-cols-2 gap-y-[73px] gap-x-[100px] p-10 max-[1170px]:grid-cols-1'>
      {Data.map((dta)=>(
    <div key={dta.id}>
      <Skill name={dta.name} percent={dta.percent} svg={dta.svg}/>
    </div>
))}
      </div>
    </div>
  </div>
  )
}

export default About