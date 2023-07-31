import React from 'react'
// import Header from './Header'
import { useNavigate } from 'react-router-dom'
export default function Contact() {
  const navigate = useNavigate();
  const gotoHome = () =>{
    navigate("/");
  }
  const goBack = ()=>{
    navigate(-1);
  }
  return (
    <div>
      {/* <Header/> */}
      <h1>Contact Page</h1>
      <button onClick={gotoHome}>Go To Home</button>
      <button onClick={goBack} className='mx-2'>Go Back</button>
    </div>
  )
}
