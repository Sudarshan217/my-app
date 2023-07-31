import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function Introduction() {
  return (
    <div>
       <BrowserRouter>
                <Routes>
                    <Route path='/' element={<div>Home</div>} />
                    <Route path='/about' element={<div>About</div>} />
                    <Route path='/contact' element={<div>Contact</div>}/>
                </Routes>
            </BrowserRouter>
    </div>
  )
}
