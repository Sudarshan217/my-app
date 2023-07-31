import React from 'react'
import{BrowserRouter, Route, Routes} from "react-router-dom";
export default function Newbar() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<div>Home Page</div>}/>
    <Route path='/about' element={<div>About Page</div>}/>
    <Route path='/contact' element={<div>Contact Page</div>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}
