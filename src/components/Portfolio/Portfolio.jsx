import React from 'react'
import { useRef } from 'react'
import Project from '../Projects/Projects'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ProjectData from '../../data/ProjectData'
import { Link } from 'react-router-dom'

function Portfolio() {
  const projRefs = useRef([]);
  projRefs.current = []; // Reset the array of refs on every render

  const addToRefs = (el) => {
    if (el && !projRefs.current.includes(el)) {
      projRefs.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.from(projRefs.current, {
      x: 200,
      opacity: 0,
      duration: 1,
      delay: 1,
      stagger: 1,
    });
  });

  return (
    <div className="bg-[#252525] overflow-hidden h-full w-full flex flex-col items-center justify-center">
      <div className="mt-20  mx-16 max-[550px]:mx-0 p-8 bg-black">
        <h1 className="text-gray-600 text-3xl font-semibold">MY PORTFOLIO</h1>
        <h1 className="text-white text-5xl mt-2">
          {" "}
          Look at My Work & <br />
          <Link to="/Contact">
            <span className="mt-3 block text-[#4bff33] hover:text-[#167e08]">Contact Me</span>
          </Link>
        </h1>
        <div className="grid grid-cols-2 place-items-center gap-x-12 gap-y-16 mt-16 mx-8 max-[550px]:mx-0 p-8 bg-black max-[800px]:grid-cols-1">
          {ProjectData.map((data) => (
            <div key={data.id} ref={addToRefs}>
              <Project name={data.name} img={data.img} link={data.load} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio