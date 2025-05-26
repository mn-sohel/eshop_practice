import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { CiHeart, CiShare2 } from 'react-icons/ci'

const ProductLayout = ({
    percentTag, 
    category, 
    title, 
    rating,
    totalRating,
    price,
    border,
    bg,
    stock,
    stockAmount
}) => {

    let [ratingValue, setRatingValue] = useState(new Array(+rating).fill(rating))

  return (
    <div style={{background:bg}} className='border-1 border-transparent hover:border-[#C3C3C3] duration-300 rounded-lg p-6 group'>
        <div className='relative'>
            <img className='w-full' src="images/productImg.png" alt="product_image" />
            {percentTag &&
            <div className='bg-[#FF624C] py-[7px] px-5 rounded-md font-["Montserrat"] font-bold text-base text-white absolute top-[-8px] right-[-9px]'>50%</div>
            }
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
            <p className='font-["Montserrat"] font-normal text-sm leading-5 uppercase tracking-[5px] mt-[46px] mb-4'>{category}</p>
            <h3 className='font-["Poppins"] font-semibold text-xl leading-[30px] group-hover:text-[#FF624C] group-hover:underline'>{title}</h3>
            <div className='flex items-center gap-2 text-[#FFD550] mt-1 mb-6'>
                {ratingValue.map((item, index) => (
                    <FaStar />
                ))}
                <span className='text-[#303030] font-["Montserrat"]  font-normal text-base'>( {totalRating} )</span>
            </div>
            <p className='font-["Poppins"] font-semibold text-2xl leading-[30px]'>$ {price}</p>
            {stock && 
                <div className='w-full h-[30px] bg-[#ddd] rounded-[25px] relative'>
                    <div className='w-1/2 h-[30px] bg-[#333] rounded-[25px]'></div>
                    <p className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white font-bold font-["Montserrat"] text-sm'>$ {stockAmount} AVAILABLE</p>
                </div>
            }
        </div>
    </div>
  )
}

export default ProductLayout