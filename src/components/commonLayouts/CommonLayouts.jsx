import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from './Container'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const CommonLayouts = () => {
  return (
    <>
    
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default CommonLayouts