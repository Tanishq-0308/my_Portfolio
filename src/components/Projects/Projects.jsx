import React from "react";

function Projects({ name, link, img }) {
  return (
    <div className=" text-white group relative">
      <div className="border border-transparent group-hover:border-green-400  rounded-2xl group-hover:transition-all duration-100 ">
        <img
          src={img}
          alt=""
          className="h-[400px] w-[550px] object-cover rounded-2xl p-1"
        />
      </div>
      <div className="flex items-center justify-between p-5 mt-7 ">
        <h1 className="text-xl group-hover:scale-110 transition-scale duration-500">
          {name}
        </h1>
        <a
          href={link}
          target="_blank"
          className="text-4xl group-hover:text-green-400 hover:scale-150 transition-scale duration-500"
        >
          ↗️
        </a>
      </div>
    </div>
  );
}

export default Projects;
