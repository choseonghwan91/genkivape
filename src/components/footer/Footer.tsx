import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" flex flex-row justify-center">
        <div>
          <div className="">
            <div className="">
              <img
                className="w-[150px] h-[200px]"
                src="https://www.genkiyaki.com/wp-content/uploads/2021/09/genkiyaki-logo.png"
              ></img>
            </div>
            <div className="flex justify-around">facebook instagram</div>
            <div className="">
              <ul className="flex justify-around">
                <li>Our Story</li>
                <li>Products</li>
                <li>Location</li>
                <li>Contact</li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <p>©2021 Genkivape. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
