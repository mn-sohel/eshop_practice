import React from 'react'
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaBars } from 'react-icons/fa'

const BottomBar = () => {
  return (
    <div className='bg-[#FF624C]'>
      <Container>
        <div className='flex justify-between items-center py-6'>
          <div>
            <ul className='flex items-center gap-20 font-["Montserrat"] font-bold text-base leading-6 text-white'>
              <li>
                <Link className='flex items-center gap-x-4' to={"/product-details"}><FaBars />All Categories</Link>
              </li>
              <li>
                <Link className='flex items-center gap-x-4' to={"/product-list"}>Products<FaAngleDown /></Link>
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