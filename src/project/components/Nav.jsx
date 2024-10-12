import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";

const Nav = () => {
  const ulRef = useRef(null);

  //for toggoling the navigation bar
  const handleMenu = () => {
    ulRef.current.classList.toggle("hidden");
    ulRef.current.classList.toggle("flex");
  };

  return (
    <nav className="h-[10%] w-full flex items-center justify-between px-4">
      <RiMenu2Line className="text-2xl" onClick={handleMenu} />
      <ul
        ref={ulRef}
        className="w-full h-screen bg-[#F7E7D8] absolute left-0 flex-col bottom-0 hidden items-center justify-center"
      >
        <NavLink to="/" className="a" onClick={handleMenu}>
          Home
        </NavLink>
        <NavLink to="/about" className="a" onClick={handleMenu}>
          About us
        </NavLink>
        <FaXmark className="text-2xl absolute top-4 right-4" onClick={handleMenu} />
      </ul>

      <div className=" icons  flex items-center justify-between">
        <NavLink to='/card'>
        <IoCartOutline className="text-xl mr-4" />
        </NavLink>
        <CiLogin className="text-xl" />
      </div>
    </nav>
  );
};

export default Nav;
