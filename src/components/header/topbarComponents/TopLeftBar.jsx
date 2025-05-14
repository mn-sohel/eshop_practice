import React from 'react'
import { Link } from 'react-router-dom'
import { CiLocationOn } from 'react-icons/ci'
import { LuPhone } from 'react-icons/lu'
const TopLeftBar = () => {
  return (
    <div className='flex items-center gap-[50px] relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[62%] after:top-[50%] after:-translate-y-1/2'>
        <Link to="https://maps.app.goo.gl/wqh5Rb2rKrHev3fo7" target='_blank' className='flex items-center'><CiLocationOn />123 Main Street, Anytown USA</Link>
        <Link to="tel:012563269"  className='flex items-center'><LuPhone />+1 (555) 123-4567</Link>
    </div>
  )
}

export default TopLeftBar