import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import ErrorPage from './ErrorPage'
export default function NestedRouting() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}>
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
  )
}
