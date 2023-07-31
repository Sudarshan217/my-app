import React from 'react'
// import Header from './Header'
import { useNavigate } from 'react-router-dom'
export default function About() {
  const navigate = useNavigate()
  const gotoAbout=()=>{
    navigate("/contact");
  }
  const goBack =() =>{
    navigate(-1);
  }
  return (
    <div>
      {/* <Header/> */}
      <h1>About Page</h1>
      <button onClick={gotoAbout}>Go To Contact</button>
      <button onClick={goBack} className='mx-2'>Go Back</button>
    </div>
  )
}
