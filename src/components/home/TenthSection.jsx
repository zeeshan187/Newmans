import React from "react";
import Wrapper from "../../shared/Wrapper";

const TenthSection = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col lg:flex-row px-[50px] md:px-[99px] min-h-[99px] items-center gap-2 xl:gap-4 py-5 xl:py-0 justify-between">
          <h2 className="text-center xl:text-left text-xl xl:text-h2 gotham font-medium decrese_space">
            PROUDLY SERVINCE SINCE 1963. NOW FINALLY AVAILABLE ON:
          </h2>
          <div className="flex flex-wrap gap-5 justify-center xl:justify-start">
                <img src="/images/home/footer1.svg" alt="" className="w-[170px] h-[54px]" />
                <img src="/images/home/footer2.svg" alt="" className="w-[161px] h-[54px]"  />
                <img src="/images/home/footer3.svg" alt="" className="w-[130px] h-[54px]"  />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default TenthSection;
