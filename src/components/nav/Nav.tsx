import React from "react";

export function Nav() {
  return (
    <div className="bg-purple-200 h-20 bg-opacity-70">
      <nav className=" container mx-auto h-full">
        <ul className="flex-row flex justify-around h-full items-center">
          <li>
            <a href="#" className=" p-3 hover:text-white">
              Logo
            </a>
          </li>
          <li>
            <a href="#" className=" p-3 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className=" p-3 hover:text-white">
              Products
            </a>
          </li>
          <li>
            <a href="#" className=" p-3 hover:text-white">
              Location
            </a>
          </li>
          <li>
            <a href="#" className=" p-3 hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
