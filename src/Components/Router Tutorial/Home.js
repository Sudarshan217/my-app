import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
// import { Button } from 'bootstrap'

export default function Home() {
  
  return (
    <div>
      <Header />
      {/* <Button onclick={gotoAbout}>Go to About Page</Button> */}
      <Outlet/>
    </div>
  )
}

