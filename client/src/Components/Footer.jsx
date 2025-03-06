import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-2'>
      <span>Developed With &#x2665;</span>
      <div className='flex flex-row pb-3'>
        <a href='https://www.linkedin.com/in/chirag-gupta-528294217/'>
        <FaLinkedin className='cursor-pointer' size={20}/>
        </a>
      </div>
    </div>
  )
}

export default Footer
