import React from "react";

export const Hamburger = () => {
  return (
    <>
      <button className="space-y-1 group md:hidden mr-4 z-10">
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>

        <ul className="bg-[#252525] w-screen pb-10 absolute -top-full right-0 duration-150 group-focus:top-0 flex flex-col justify-end space-y-3">
          <button className="px-10 py-8 relative ml-auto">
            <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
            <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
          </button>
          <li className="flex justify-center w-full y-4 hover:bg-[#202020] text-white">
          Home
          </li>
          <li className="flex justify-center w-full y-4 hover:bg-[#202020] text-white">
          About Us
          </li>
          <li className="flex justify-center w-full y-4 hover:bg-[#202020] text-white">
          Services
          </li>
          <li className="flex justify-center w-full y-4 hover:bg-[#202020] text-white">
          Contact Us
          </li>
        </ul>
      </button>
    </>
  );
};
