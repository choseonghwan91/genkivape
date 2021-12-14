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
