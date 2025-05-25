import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { CiHeart, CiShare2 } from 'react-icons/ci'

const ProductLayout = () => {
  return (
    <div className='border-1 border-transparent hover:border-[#C3C3C3] duration-300 rounded-lg p-6 group'>
        <div className='relative'>
            <img className='w-full' src="images/productImg.png" alt="product_image" />
            <div className='bg-[#FF624C] py-[7px] px-5 rounded-md font-["Montserrat"] font-bold text-base text-white absolute top-[-8px] right-[-9px]'>50%</div>
            <div className='flex items-center absolute bottom-[6px] left-[48%] -translate-x-[50%] gap-5 scale-0 group-hover:scale-100 duration-300'>
                <div className='w-[50px] h-[50px] rounded-full border border-[#FF624C] flex items-center justify-center text-[25px] bg-white text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer'>
                    <IoCartOutline />
                </div>
                <div className='w-[50px] h-[50px] rounded-full border border-[#FF624C] flex items-center justify-center text-[25px] bg-white text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer'>
                <CiHeart />
                </div>
                <div className='w-[50px] h-[50px] rounded-full border border-[#FF624C] flex items-center justify-center text-[25px] bg-white text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer'>
                <CiShare2 />
                </div>
            </div>
        </div>
        <div>
            <p className='font-["Montserrat"] font-normal text-sm leading-5 uppercase tracking-[5px] mt-[46px] mb-4'>PHONE</p>
            <h3 className='font-["Poppins"] font-semibold text-xl leading-[30px] group-hover:text-[#FF624C] group-hover:underline'>JPhone 13 High Quality Value Buy Best Cam...</h3>
            <div className='flex items-center gap-2 text-[#FFD550] mt-1 mb-6'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className='text-[#303030] font-["Montserrat"]  font-normal text-base'>( 100 )</span>
            </div>
            <p className='font-["Poppins"] font-semibold text-2xl leading-[30px]'>$1199.00</p>
        </div>
    </div>
  )
}

export default ProductLayout