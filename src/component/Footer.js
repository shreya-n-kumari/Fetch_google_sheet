import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-black">
        <div className=" text-white flex justify-between font-sans font-medium py-2">
          <h2 className="py-4 px-8">Google Sheet</h2>
          <ul className="flex flex-col items-baseline pr-3 md:flex-row md:justify-end md:space-x-11 md:px-28 md:py-4">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <hr class="h-px   border-0 bg-slate-400" />

        <h5 className="text-xs md:text-base text-slate-400 text-center py-2">
          GoogleSheet copyright 2025 | developed by Shreya
        </h5>
      </div>
    </>
  );
}

export default Footer;
