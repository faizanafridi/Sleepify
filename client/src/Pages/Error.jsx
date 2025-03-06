import React from 'react'
import ErrorGif from '../assets/errpg.gif'
const Error = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={ErrorGif}/>
      <span className='text-8xl'>Page Not Found</span>
    </div>
  )
}

export default Error
