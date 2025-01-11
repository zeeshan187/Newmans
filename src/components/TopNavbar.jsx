import React from 'react'
import Wrapper from '../shared/Wrapper'

const TopNavbar = () => {
  return (
    <div className='w-full min-h-[40px] bg-[#000000] text-[#FFFFFF] flex justify-center items-center'>
      <Wrapper>
        <div className='flex justify-center items-center gap-2 md:gap-4  flex-col md:flex-row py-3 md:py-0 text-center md:text-left'>
            <img src="/images/navbar/batch.png" alt="batch" className='w-[13px] h-[16px] ' />
            <p className='text-p1 decrese_space untitled uppercase font-normal'>we’re committed to supporting our veterans. Join our team and build your future today. </p>
            <p className='text-p1 font-medium decrese_space untitled uppercase underline ml-4'>APPLY HERE</p>
        </div>
      </Wrapper>
    </div>
  )
}

export default TopNavbar
