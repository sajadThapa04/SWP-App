import React from 'react'
import Header from './components/Headers/Header'
import Footer from './components/footers/Footers'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout