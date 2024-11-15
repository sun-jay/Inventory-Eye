import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [cur, setCur] = useState("Home");
    const [color, setColor] = useState("transparent");
    const [textColor, setTextColor] = useState("#090909");

    const handleNav = () => {
        setNav(!nav);
      };
    
    useEffect(() => {
      const changeColor = () => {
        if (window.scrollY >= 90) {
          setColor('#000000');
          setTextColor('#FFFFFF');
        } else {
          setColor('transparent');
          setTextColor('#090909');
        }
      };
      window.addEventListener('scroll', changeColor);
    }, []);

  return (
    <div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full z-20 ease-in duration-300">
      <div className="max-w-[1300px] m-auto flex md:justify-between justify-between items-center p-4 text-white">
        <Link className = "md:block hidden " href="/">
          <h1 style={{ color: `${textColor}` }} className="text-4xl">Inventory Eye</h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden md:flex">
          <li className={cur === "Home"? "p-4 font-bold	": "p-4"}>
            <Link onClick={()=>{handleNav; setCur('Home')}} href="/">Home</Link>
          </li>
          {/* <li className={cur === "Projects"? "p-4 font-bold	": "p-4 "}>
            <Link onClick={()=>{handleNav; setCur('Projects')}} href="/projects">Projects</Link>
          </li> */}
          {/* <li className="p-4">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li> */}
        </ul>
        <div className="block md:hidden">Sunny-Jay.com</div>
        <div onClick={handleNav} className='block md:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: nav ? '#ffffff': `${textColor}`   } } />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* mobile */}
        <div 
          className={
            nav
              ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"
              : "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"
          } 
        >
          <ul>
            <li className={cur === "Home"? "font-bold p-4 text-4xl hover:text-gray-500": "p-4 text-4xl hover:text-gray-500"}>
              <Link onClick={()=>{handleNav(); setCur('Home');}} href="/">Home</Link>
            </li>
            <li className={cur === "Projects"? "font-bold p-4 text-4xl hover:text-gray-500": "p-4 text-4xl hover:text-gray-500"}>
              <Link onClick={()=>{handleNav(); setCur('Projects');}} href="/projects">Projects</Link>
            </li>
            {/* <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/work">Work</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
