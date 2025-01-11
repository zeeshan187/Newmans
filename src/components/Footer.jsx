import React from "react";
import Wrapper from "../shared/Wrapper";

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <Wrapper>
        <div className="mx-auto flex-wrap py-5 flex flex-col md:flex-row gap-5 md:gap-0 justify-center md:justify-between min-h-[302px] items-center px-[50px] md:px-[99px]">
          <div className="text-center md:text-left">
            <h3 className="mb-5 text-h2 gotham font-medium decrese_space">
              ACCOUNT
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="gothic text-lg md:text-h4 font-medium">My Account</li>
              <li className="gothic text-lg md:text-h4 font-medium">My Orders</li>
              <li className="gothic text-lg md:text-h4 font-medium">My Cards</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="text-center md:text-left">
            <h3 className="mb-5 text-h2 gotham font-medium decrese_space">
              ABOUT
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="gothic text-lg md:text-h4 font-medium">Locations</li>
              <li className="gothic text-lg md:text-h4 font-medium">History</li>
              <li className="gothic text-lg md:text-h4 font-medium">Franchise</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="text-center md:text-left">
            <h3 className="mb-5 text-h2 gotham font-medium decrese_space">
              SUPPORT
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="gothic text-lg md:text-h4 font-medium">Contact</li>
              <li className="gothic text-lg md:text-h4 font-medium">Privacy Policy</li>
              <li className="gothic text-lg md:text-h4 font-medium">FAQs</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="text-center md:text-left">
            <h3 className="mb-5 text-h2 gotham font-medium decrese_space">
              OTHER
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="gothic text-lg md:text-h4 font-medium">
                Terms of Conditions
              </li>
              <li className="gothic text-lg md:text-h4 font-medium">Return Policy</li>
              <li className="gothic text-lg md:text-h4 font-medium">Shipping Policy</li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <div className="border-b-2 border-white w-full h-1 "></div>
      <Wrapper>
        <div className="text-center md:text-left py-3 md:py-0 min-h-[91px] justify-center flex flex-col md:flex-row md:justify-between items-center gap-3 px-[50px] md:px-[99px]">
          <h3 className="text-xl md:text-3xl font decrese_space gotham">
            Copyright © 2025 NEWMAN’S PARTS. All Rights Reserved.
          </h3>
          <h3 className="text-xl md:text-3xl font decrese_space gotham">
            Developed, Marketed, and Protected By Sundancæ Inc.
          </h3>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
