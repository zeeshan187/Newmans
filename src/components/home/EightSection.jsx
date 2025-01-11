import React from "react";
import Wrapper from "../../shared/Wrapper";
import { Button } from "antd";
import { GoArrowRight } from "react-icons/go";

const EightSection = () => {
  let cards_data = [
    {
      heading: "Pirelli Omega, 20x10, 6x139.7, ET-21 CB, 106.1, Gloss Black",
      para: "SKU: RIOR382423H5OU23Y2829-432",
      stock: "Currently In Stock",
      new_price: "$487.78",
      old_price: "$545.21",
      discount: "Just $26/mo with",
      stock_img: "/images/home/stock.svg",
      tyre: "/images/home/tyre.png",
      logo: "/images/home/logo1.svg",
      afirm: "/images/home/afirm.svg",
    },
    {
      heading: "Pirelli Omega, 20x10, 6x139.7, ET-21 CB, 106.1, Gloss Black",
      para: "SKU: RIOR382423H5OU23Y2829-432",
      stock: "Currently In Stock",
      new_price: "$487.78",
      old_price: "$545.21",
      discount: "Just $26/mo with",
      stock_img: "/images/home/stock.svg",
      tyre: "/images/home/tyre.png",
      logo: "/images/home/logo2.svg",
      afirm: "/images/home/afirm.svg",
    },
    {
      heading: "Pirelli Omega, 20x10, 6x139.7, ET-21 CB, 106.1, Gloss Black",
      para: "SKU: RIOR382423H5OU23Y2829-432",
      stock: "Currently In Stock",
      new_price: "$487.78",
      old_price: "$545.21",
      discount: "Just $26/mo with",
      stock_img: "/images/home/stock.svg",
      tyre: "/images/home/tyre.png",
      logo: "/images/home/logo1.svg",
      afirm: "/images/home/afirm.svg",
    },
    {
      heading: "Pirelli Omega, 20x10, 6x139.7, ET-21 CB, 106.1, Gloss Black",
      para: "SKU: RIOR382423H5OU23Y2829-432",
      stock: "Currently In Stock",
      new_price: "$487.78",
      old_price: "$545.21",
      discount: "Just $26/mo with",
      stock_img: "/images/home/stock.svg",
      tyre: "/images/home/tyre.png",
      logo: "/images/home/logo2.svg",
      afirm: "/images/home/afirm.svg",
    },
  ];
  return (
    <div className="bg-[#ECEEEF]">
      <Wrapper>
        <div className="px-[20px] py-7 lg:px-[57px] w-full flex flex-col gap-7">
          <div className="flex justify-between items-center flex-col md:flex-row gap-2">
            <div className="flex items-center gap-4">
              <img src="/images/home/icon4.svg" alt="flash" />
              <h2 className="text-2xl md:text-h2 gotham decrese_space font-medium">
                ULTRA-FAST DELIVERY PRODUCTS
              </h2>
            </div>
            <Button className="w-[262px] px-5 gotham text-2xl text-white !font-medium decrese_space h-[47px] rounded-full bg-black flex justify-between items-center">
              <span className="">SHOP NOW</span>
              <span>
                <GoArrowRight />
              </span>
            </Button>
          </div>
          <div className="flex flex-wrap gap-[19px] justify-between">
            {cards_data.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-[25px] w-full md:w-[calc(50%-9.5px)] lg:w-[calc((100%-3*19px)/4)] flex flex-col gap-2"
              >
                <img src={item.tyre} alt="" />
                <h3 className="text-h3 font-bold gothic">{item.heading}</h3>
                <h4 className="text-xl font-medium gotham">{item.para}</h4>
                <div className="flex items-center gap-2">
                  <img src={item.stock_img} alt="stock_img" />
                  <h5 className="text-lg gothic font-bold text-[#0F770D]">
                    {item.stock}
                  </h5>
                </div>
                <div className="flex items-end gap-2 my-2">
                  <h2 className="text-h2 font-bold gothic text-[#B20000]">
                    {item.new_price}
                  </h2>
                  <h6 className="text-base font-bold gothic line-through">
                    {item.old_price}
                  </h6>
                </div>
                <div className="flex items-end gap-1">
                  <p className="text-p2 font-medium gothic">{item.discount}</p>
                  <img src={item.afirm} alt="" />
                  <p className="text-p2 font-medium gothic underline">
                    Learn More
                  </p>
                </div>
                <div className="flex justify-between items-center gap-2 mt-2">
                  <Button className="bg-[#B20000] text-white w-[125px] h-[32px] gotham text-[19px]">
                    VIEW MORE
                  </Button>
                  <img src={item.logo} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default EightSection
