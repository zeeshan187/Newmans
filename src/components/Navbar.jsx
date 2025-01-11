import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../shared/Wrapper";
import { FaChevronUp, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [selected, setSelected] = useState("UNITED STATES");
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false); // Close dropdown after selection
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#B20000]">
      <Wrapper>
        <div className="flex justify-between items-center w-full h-[81px] px-[20px] md:px-[60px] text-white">
          {/* Logo */}
          <img src="/images/navbar/logo.svg" alt="logo" />

          {/* Desktop Menu */}
          <ul className="hidden xl:flex max-w-[692px] items-center gap-4 text-lg md:text-xl lg:text-2xl">
            <li>
              <Link to="/interior" className="navmenu gotham decrese_space">
                INTERIOR
              </Link>
            </li>
            <li>
              <Link to="/exterior" className="navmenu gotham decrese_space">
                EXTERIOR
              </Link>
            </li>
            <li>
              <Link to="/suspensions" className="navmenu gotham decrese_space">
                SUSPENSIONS
              </Link>
            </li>
            <li>
              <Link to="/electronics" className="navmenu gotham decrese_space">
                ELECTRONICS
              </Link>
            </li>
            <li>
              <Link to="/towing" className="navmenu gotham decrese_space">
                TOWING
              </Link>
            </li>
            <li>
              <Link to="/lighting" className="navmenu gotham decrese_space">
                LIGHTING
              </Link>
            </li>
            <li>
              <Link to="/our-history" className="navmenu gotham decrese_space">
                OUR HISTORY
              </Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="hidden xl:flex items-center gap-3">
            <img src="/images/home/icon1.svg" alt="icon" />
            <img src="/images/home/icon2.svg" alt="icon" />
            <img src="/images/home/icon3.svg" alt="icon" />
          </div>

          {/* Dropdown */}
          <div className="relative hidden xl:block min-w-[125px]">
            <div
              className="flex items-center justify-between cursor-pointer text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="gotham navmenu !text-xl lg:!text-2xl">{selected}</span>
              <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            {isOpen && (
              <ul className="absolute right-0 w-[125px] bg-white text-black mt-1">
                <li
                  className="p-2 cursor-pointer hover:bg-gray-100 navmenu decrese_space"
                  onClick={() => handleSelect("UNITED STATES")}
                >
                  UNITED STATES
                </li>
                <li
                  className="p-2 cursor-pointer hover:bg-gray-100 navmenu"
                  onClick={() => handleSelect("UNITED STATES")}
                >
                  UNITED STATES
                </li>
                <li
                  className="p-2 cursor-pointer hover:bg-gray-100 navmenu"
                  onClick={() => handleSelect("UNITED STATES")}
                >
                  UNITED STATES
                </li>
              </ul>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-2xl text-white"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="xl:hidden flex flex-col items-center bg-[#B20000] text-white py-4 gap-4">
            <ul className="flex flex-col items-center gap-4 text-lg">
              <li>
                <Link
                  to="/interior"
                  className="navmenu gotham decrese_space"
                  onClick={closeMenu}
                >
                  INTERIOR
                </Link>
              </li>
              <li>
                <Link
                  to="/exterior"
                  className="navmenu gotham decrese_space"
                  onClick={closeMenu}
                >
                  EXTERIOR
                </Link>
              </li>
              <li>
                <Link
                  to="/suspensions"
                  className="navmenu gotham decrese_space"
                  onClick={closeMenu}
                >
                  SUSPENSIONS
                </Link>
              </li>
              <li>
                <Link
                  to="/electronics"
                  className="navmenu gotham decrese_space"
                  onClick={closeMenu}
                >
                  ELECTRONICS
                </Link>
              </li>
              <li>
                <Link
                  to="/towing"
                  className="navmenu gotham decrese_space"
                  onClick={closeMenu}
                >
                  TOWING
                </Link>
              </li>
              <li>
                <Link
                  to="/lighting"
                  className="navmenu gotham decrese_space"
                  onClick={closeMenu}
                >
                  LIGHTING
                </Link>
              </li>
              <li>
                <Link
                  to="/our-history"
                  className="navmenu gotham decrese_space"
                  onClick={closeMenu}
                >
                  OUR HISTORY
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <img src="/images/home/icon1.svg" alt="icon" />
              <img src="/images/home/icon2.svg" alt="icon" />
              <img src="/images/home/icon3.svg" alt="icon" />
            </div>
            {/* Dropdown */}
          <div className="relative block xl:hidden min-w-[125px]">
            <div
              className="flex items-center justify-between cursor-pointer text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="gotham navmenu !text-xl lg:!text-2xl">{selected}</span>
              <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            {isOpen && (
              <ul className="absolute right-0 w-[125px] bg-white text-black mt-1">
                <li
                  className="p-2 cursor-pointer hover:bg-gray-100 navmenu decrese_space"
                  onClick={() => handleSelect("UNITED STATES")}
                >
                  UNITED STATES
                </li>
                <li
                  className="p-2 cursor-pointer hover:bg-gray-100 navmenu"
                  onClick={() => handleSelect("UNITED STATES")}
                >
                  UNITED STATES
                </li>
                <li
                  className="p-2 cursor-pointer hover:bg-gray-100 navmenu"
                  onClick={() => handleSelect("UNITED STATES")}
                >
                  UNITED STATES
                </li>
              </ul>
            )}
          </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Navbar;
