import React, { useEffect, useRef, useState } from 'react'
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaBars } from 'react-icons/fa'

const BottomBar = () => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const categoryDropdownRef = useRef(null);
  const productDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutSite = (event) => {
      if(categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)){
        setIsCategoryDropdownOpen(false)
      }

      if(productDropdownRef.current && !productDropdownRef.current.contains(event.target)){
        setIsProductDropdownOpen(false)
      }
      
    }
    document.addEventListener('mousedown', handleClickOutSite)
    return () => {
      document.removeEventListener('mousedown', handleClickOutSite)
    }
  },[])
  
  const handleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
  }
  
  const handleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen)
  }

  return (
    <div className='bg-[#FF624C]'>
      <Container>
        <div className='flex justify-between items-center py-6'>
          <div>
            <ul className='flex items-center gap-20 font-["Montserrat"] font-bold text-base leading-6 text-white'>
              <li className='relative' ref={categoryDropdownRef}>
                <button className='flex items-center gap-x-4'  onClick={handleCategoryDropdown}><FaBars />All Categories</button>
                {isCategoryDropdownOpen && (
                  <div className='absolute z-10 mt-2 w-48 bg-white rounded shadow-lg'>
                    <ul className='py-2 font-["Montserrat"] font-normal text-base leading-6 text-black'>
                      <li className='px-4 py-2 hover:bg-gray-500 cursor-pointer'>Product-1</li>
                      <li className='px-4 py-2 hover:bg-gray-500 cursor-pointer'>Product-2</li>
                      <li className='px-4 py-2 hover:bg-gray-500 cursor-pointer'>Product-3</li>
                      <li className='px-4 py-2 hover:bg-gray-500 cursor-pointer'>Product-4</li>
                    </ul>
                  </div>
                )}
              </li>
              <li className='relative' ref={productDropdownRef}>
                <button className='flex items-center gap-x-4' onClick={handleProductDropdown}>Products<FaAngleDown /></button>
                {isProductDropdownOpen && (
                  <div className='absolute z-10 mt-2 w-48 bg-white rounded shadow-lg'>
                    <ul className='py-2 font-["Montserrat"] font-normal text-base leading-6 text-black'>
                      <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Product-5</li>
                      <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Product-6</li>
                      <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Product-7</li>
                      <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Product-8</li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className='flex items-center gap-20 font-["Montserrat"] font-bold text-base leading-6 text-white'>
              <li>
                <Link className='flex items-center gap-x-4' to={"#"}>LIMITED SALE 👋🏻</Link>
              </li>
              <li>
                <Link to={"#"}>Best Seller</Link>
              </li>
              <li>
                <Link to={"#"}>New Arrival</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BottomBar