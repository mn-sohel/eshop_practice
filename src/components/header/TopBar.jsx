import React from 'react'
import Container from '../commonLayouts/Container'
import TopLeftBar from './topbarComponents/TopLeftBar'
import TopRightBar from './topbarComponents/TopRightBar'

const TopBar = () => {
  return (
    <div className='border-b border-[#BFBFBF] border-solid py-[22px]'>
        <Container>
            <div className='flex justify-between items-center font-["Montserrat"] font-normal text-sm'>
                <TopLeftBar/>
                <TopRightBar/>
            </div>    
        </Container>
    </div>
  )
}

export default TopBar