import React from 'react'
import { Link } from 'react-router-dom'

const Solution = () => {
  return (
    <div>
      <h1 className='text-7xl font-bold'>
        Let's Maintain your <span className='text-indigo-700 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>Sleep Cycle</span>.
      </h1>
      <div className='flex flex-col justify-center items-center w-full h-[500px] gap-5'>
        <h3 className='text-4xl font-bold'>First Step Towards Good Sleep Hygeine</h3>
        <Link to='/dashboard'>
        <button className="smky-btn3 relative hover:text-[#778464] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-white">TRY OUR TRACKER</button>

        </Link>
        
      </div>
    </div>
  )
}

export default Solution
