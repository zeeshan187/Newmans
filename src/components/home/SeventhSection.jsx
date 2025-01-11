import React, { useState } from "react";
import Wrapper from "../../shared/Wrapper";
import { Button, Select } from "antd";
import { FaChevronUp, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const SeventhSection = () => {
  let options = [
    {
      value: "1",
      label: "Not Identified",
    },
    {
      value: "2",
      label: "Closed",
    },
    {
      value: "3",
      label: "Communicated",
    },
    {
      value: "4",
      label: "Identified",
    },
    {
      value: "5",
      label: "Resolved",
    },
    {
      value: "6",
      label: "Cancelled",
    },
  ];
  const [selected, setSelected] = useState("MY GARAGE");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="bg-black">
      <Wrapper>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:h-[673px] ">
          <img
            src="/images/home/fourth.svg"
            alt=""
            className="w-full h-full lg:w-[57%] object-cover order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2 w-full flex flex-col gap-5 lg:gap-12 lg:w-[45%] px-[20px] py-7 lg:px-[58px] bg-[#000000] min-h-full text-white justify-center">
            <h1 className="text-5xl lg:text-h1 decrese_space gotham flex items-center gap-7 ">
              <span>SEARCH BY Wheel</span>
              <img src="/images/home/hero_icon.svg" alt="" />
            </h1>
            <div className="w-full flex flex-col gap-4">
              <Select
                className="w-full h-[47px] !rounded-none gothic !text-xs font-semibold flex items-center custom_select"
                showSearch
                defaultValue="YEAR"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={options}
              />
              <Select
                className="w-full h-[47px] rounded-none gothic text-xs font-semibold flex items-center custom_select"
                showSearch
                defaultValue="MAKE"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={options}
              />
              <Select
                className="w-full h-[47px] rounded-none gothic text-xs font-semibold flex items-center custom_select"
                showSearch
                defaultValue="MODEL"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={options}
              />
              <Select
                className="w-full h-[47px] rounded-none gothic text-xs font-semibold flex items-center custom_select"
                showSearch
                defaultValue="SUBMODEL"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={options}
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="relative hidden xl:block w-[125px]">
                <div
                  className="flex items-center justify-between cursor-pointer text-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="gotham navmenu !text-xl lg:!text-[28px]">
                    {selected}
                  </span>
                  <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
                </div>
                {isOpen && (
                  <ul className="absolute right-0 w-[125px] bg-white text-black mt-1">
                    <li
                      className="p-2 cursor-pointer hover:bg-gray-100 navmenu decrese_space"
                      onClick={() => handleSelect("MY GARAGE")}
                    >
                      MY GARAGE
                    </li>
                    <li
                      className="p-2 cursor-pointer hover:bg-gray-100 navmenu"
                      onClick={() => handleSelect("MY GARAGE")}
                    >
                      MY GARAGE
                    </li>
                    <li
                      className="p-2 cursor-pointer hover:bg-gray-100 navmenu"
                      onClick={() => handleSelect("MY GARAGE")}
                    >
                      MY GARAGE
                    </li>
                  </ul>
                )}
              </div>
              <Button className="w-[262px] px-5 gotham text-2xl !font-semibold decrese_space h-[47px] rounded-full bg-white flex justify-between items-center">
                <span className="">SHOP NOW</span>
                <span>
                  <GoArrowRight />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SeventhSection
