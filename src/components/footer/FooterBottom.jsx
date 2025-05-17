import React from 'react'
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom'

const FooterBottom = () => {
  return (
    <div className='mt-25'>
    <Container>
      <div className='flex'>
        <div className='mr-[167px]'>
          <img src="images/logo.png" alt="footer_logo" /> 
          <ul className='mt-[58px] flex flex-col gap-3'>
            <li>
              <Link to="tel:052612536">+1 (555) 123-4567</Link>
            </li>
            <li>
              <Link to="mailto:information@eshop.com">information@eshop.com</Link>
            </li>
            <li>
              <Link to="https://maps.app.goo.gl/CNnjn97cHNWC33tf6" target='_blank'>123 Main Street, Suite 105, Anytown USA</Link>
            </li>
          </ul>
        </div>
        <div className='mr-24'>
          <h4 className='font-["Poppins"] font-semibold text-xl'>Links</h4>
          <ul className='mt-6 flex flex-col gap-3'>
            <li>Products List</li>
            <li>Order Tracking</li>
            <li>Products Guide</li>
            <li>Shopping Cart</li>
            <li>Tech Blog</li>
          </ul>
        </div>
        <div className='mr-24'>
          <h4 className='font-["Poppins"] font-semibold text-xl'>Supports</h4>
          <ul className='mt-6 flex flex-col gap-3'>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Help Centre</li>
            <li>Store Locations</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className='mr-20'>
          <h4 className='font-["Poppins"] font-semibold text-xl'>Categories</h4>
          <ul className='mt-6 flex flex-col gap-3'>
            <li>Computers & Tablets</li>
            <li>Mobile Phones & Accessories</li>
            <li>TV & Home Theater</li>
            <li>Audio & Headphones</li>
            <li>Cameras & Camcorders</li>
            <li>Gaming Equipment</li>
            <li>Home Appliances</li>
          </ul>
        </div>
        <div>
          <h4 className='font-["Poppins"] font-semibold text-xl mb-6'>Payments</h4>
          <img src="images/payment.png" alt="payment" />
          <h4 className='mt-[73px] font-["Poppins"] font-semibold text-xl'>Follow Us</h4>
          <ul className='mt-6 flex flex-col gap-3'>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
    </Container>
    </div>
  )
}

export default FooterBottom