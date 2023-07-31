// Introduction
import React from 'react'
import { Routes, Route } from 'react-router-dom'
export default function Introduction() {
  return (
    <>
      {/* <Routes>
      <Route path='/' element={<div>Element</div>}/>
      <Route path='/about' element={<div>About</div>}/>
    </Routes> */}
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<div>Home</div>} />
          <Route path='/about' element={<div>About</div>} />
          <Route path='/contact' element={<div>Contact</div>} />
        </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}
