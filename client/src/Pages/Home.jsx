import React from 'react'
import Navbar from '../Components/Navbar'
import Information from '../Components/Information'
import Solution from '../Components/Solution'
import HeroVid from '../assets/herosleepvideo.mp4'

import Footer from '../Components/Footer'
import { useSelector } from 'react-redux'

const Home = () => {
  


  return (
    <div className='w-full bg-gray-800'>
        <div className='w-full h-20 bg-gray-800 flex justify-center items-center sticky top-0 z-30'>
            <Navbar/>
        </div>
        {/* MAIN DIV */}
        <div className='text-white flex flex-col justify-center items-center mt-8 sm:ml-2'>
            <span className='text-8xl font-bold '>
            Unlock the <span className='text-purple-700 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>power</span> <br/>of a Restful <span className='text-indigo-700 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>Sleep</span>.
            </span>
          
           <video 
            src={HeroVid}
            type='video/mp4'
            loop
            controls={false}
            muted
            autoPlay
            className='w-[60rem] h-[30rem] rounded-lg mt-2 mb-[80px]'
            />
            <Information/>
            <Solution/>
            <Footer/>
        </div>
    </div>

  )
}

export default Home
