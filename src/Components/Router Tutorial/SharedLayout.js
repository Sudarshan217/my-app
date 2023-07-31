import React from 'react'
import { Outlet } from 'react-router-dom'

export default function SharedLayout() {
  return (
    <div>
      <Header />
      {/* In Shared Layer Home is converted in navbar */}
      {/* Outlet is passed for show the about and contact input data */}
      <Outlet/>
    </div>
  )
}
