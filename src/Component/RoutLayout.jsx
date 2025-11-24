import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

export default function RoutLayout() {
  return (
    <>
      <Header/>

        <Outlet/>

       <Footer/>
    </>
  )
}
