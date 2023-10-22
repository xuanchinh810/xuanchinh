import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'
import Header from './component/Header'
import { ShopContextProvider } from './page/context/shop-context';
export const Layout = () => {
  return (
    <div>
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    </div>
  )
}
