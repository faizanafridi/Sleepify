import React, { useEffect, useState } from 'react'
import SleepLogo from '../assets/Sleepify_transparent.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../store/auth/authSlice'

const Navbar = () => {

  const user = useSelector((state)=>state.auth.user);
  console.log(user);

  const dispatch = useDispatch();

  const handleLogout = ()=>{
    dispatch(logOut())
    navigate('/');
    console.log('clicked')
  }

  return (
    <div className='flex flex-row w-5/6 justify-between z-50'>
      <Link to='/'>
      <img src={SleepLogo} className='w-[100px] h-[100px]'/>
      </Link>
     
      <div className='mt-7 flex flex-row gap-5'>
        <Link to='/dashboard'>
        <button
  className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[2em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
>
    Dashboard
    </button>
        </Link>
     
    
    
    {user ? ( 
    <button
  className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[2em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
  onClick={handleLogout}
>
  Hey {user.name}

</button>
    ) : ( <Link to='/login'>
    <button
  className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[2em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
>
  Log in

</button>
    </Link>)}
   
      

      </div>
    </div>
  )
}

export default Navbar
