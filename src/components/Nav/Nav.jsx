import React from "react";
import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";
import Profile from "../../assets/Profile.jpeg";

function Nav() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".name,.profile", {
      y: -100,
      duration: 1,
    });
    tl.from("li", {
      y: -100,
      duration: 1,
      stagger: 0.3,
    });
  });
  const [bar, setBar] = useState(true);
  function openMenu() {
    setBar(!bar);
  }
  return (
    <>
      <nav className="fixed z-10 text-white bg-black border-b border-gray-600 px-7 py-5  w-full flex justify-between items-center ">
        <div className="flex gap-5 items-center">
          <img
            src={Profile}
            alt=""
            className=" profile rounded-3xl h-10 w-10 object-cover"
          />
          <p className="name text-[18px] font-semibold uppercase">
            Tanishq Sharma
          </p>
        </div>
        <ul className="flex justify-end gap-12  font-semibold uppercase max-[820px]:hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#4bff33]" : "text-gray-400"
                } block py-2 pr-4 pl-3 duration-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#4bff33]" : "text-gray-400"
                } block py-2 pr-4 pl-3 duration-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Portfolio"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#4bff33]" : "text-gray-400"
                } block py-2 pr-4 pl-3 duration-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#4bff33]" : "text-gray-400"
                } block py-2 pr-4 pl-3 duration-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="min-[820px]:hidden" onClick={openMenu}>
          {bar ? (
            <i className="ri-menu-line text-3xl"></i>
          ) : (
            <i className="ri-close-large-line text-3xl"></i>
          )}
        </button>
        {!bar && (
          <div className="absolute bg-gray-700 top-20 z-20 text-center right-0  w-full flex flex-c justify-center items-center">
            <ul className=" justify-end gap-12  font-semibold uppercase min-[820px]:hidden">
              <li>
                <NavLink
                  onClick={openMenu}
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-[#4bff33]" : "text-gray-400"
                    } block py-2 pr-4 pl-3 duration-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={openMenu}
                  to="/About"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-[#4bff33]" : "text-gray-400"
                    } block py-2 pr-4 pl-3 duration-200  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={openMenu}
                  to="/Portfolio"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-[#4bff33]" : "text-gray-400"
                    } block py-2 pr-4 pl-3 duration-200  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={openMenu}
                  to="/Contact"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-[#4bff33]" : "text-gray-400"
                    } block py-2 pr-4 pl-3 duration-200  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;
