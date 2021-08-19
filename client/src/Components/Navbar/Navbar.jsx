import React from "react";
import {FaUserAlt} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown} from "react-icons/io";
import {RiSearch2Line} from "react-icons/ri";

const MobileNav =() =>{
    return( <div className="flex w-full items-center justify-between lg:hidden">
        <div className="w-28 ">
            <img className="w-full height-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" />
        </div>
        <div className="flex items-center gap-3">
            <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
        <span className="border p-2 border-gray-300 text-zomato-400 rounded-full"><FaUserAlt/></span>
        </div>
    </div>
    );
};

const LargeNav = () => {
 return  <>
 <div className="hidden lg:inline container px-20 mx-auto">
    <div className="hidden gap-4  w-full items-center justify-between  lg:flex  " >
        <div className="w-28 ">
            <img className="w-full height-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" />
        </div>
        <div className="w-3/4 flex bg white shadow-md p-3 items-center border gap-3 border-gray-200 rounded">
            <div className="flex  items-center gap-2 barder-r-2 border-gray-300 pr-2">
                <span className="text-zomato-400">
                    <HiLocationMarker />
                </span>
                <input type="text" className="w-full focus:outline-none" placeholder="Bengaluru" />
                <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
                <RiSearch2Line />
                <input type="text" className="w-full focus:outline-none" placeholder="Search for restaurant, cuisine or a dish" />
            </div>
        </div>
        <div className="ml-20 gap-4 flex gap-2 ">
            <button className="text-gray-500 text-xl hover:text-gray-800">Login</button>
            <button className="text-gray-500 text-xl hover:text-gray-800">signup</button>
        </div>
    </div>
  </div>
 </>
}




const Navbar = () => {
    return(
    <>
    <nav className="p-4 flex bg-white shadow-md w-full items-center ">
            <MobileNav />
            <LargeNav />
    </nav>
    </> 
    )
};

export default Navbar;