import React from 'react'
import Component from './commonLayouts/Container'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <div className='mt-8 mb-20'>
    <Component>
        <Link to="/">
            <img src="images/banner.png" alt="banner" />
        </Link>
    </Component>
    </div>
  )
}

export default Banner