import React from 'react'
import Container from './commonLayouts/Container'
import HeadphoneIcon from '../icons/HeadphoneIcon'
import SecurityIcon from '../icons/securityIcon'
import ShippingIcon from '../icons/ShippingIcon'
import TransparentIcon from '../icons/TransparentIcon'

const Facility = () => {
  return (
    <div className='mb-20'>
        <Container>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center'>
                        <HeadphoneIcon/>
                    </div>
                    <div>
                        <h6 className='font-["Montserrat"] font-bold text-base'>Responsive</h6>
                        <p className='font-["Montserrat"] font-normal text-sm'>Customer service available 24/7</p>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center'>
                        <SecurityIcon/>
                    </div>
                    <div>
                        <h6 className='font-["Montserrat"] font-bold text-base'>Secure</h6>
                        <p className='font-["Montserrat"] font-normal text-sm'>Certified marketplace since 2017</p>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center'>
                        <ShippingIcon/>
                    </div>
                    <div>
                        <h6 className='font-["Montserrat"] font-bold text-base'>Shipping</h6>
                        <p className='font-["Montserrat"] font-normal text-sm'>Free, fast, and reliable worldwide</p>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center'>
                        <TransparentIcon/>
                    </div>
                    <div>
                        <h6 className='font-["Montserrat"] font-bold text-base'>Transparent</h6>
                        <p className='font-["Montserrat"] font-normal text-sm'>Hassle-free return policy</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Facility