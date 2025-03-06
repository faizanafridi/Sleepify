import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import { format } from "date-fns";

import AddSleep from "../Components/AddSleep";
import SleepInfo from "../Components/SleepInfo";

const DashBoard = () => {
    const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);

  
  const user = useSelector((state) => state.auth.user);

  const [addsleep,setAddSleep] = useState(false);
  const today = new Date();
  var hr = today.getHours();
  var sec = today.getFullYear();

  var date = `${today.getUTCDay()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  return (
    
    <div
      className="w-full h-screen bg-gray-800 text-white"
      style={{ fontFamily: "Madimi One" }}
    >
      <div className="w-full h-20 bg-gray-800 flex justify-center items-center sticky top-0 z-100">
        <Navbar />
      </div>
      <div className="w-full h-[400px] flex flex-col">
        <div className="flex flex-col mt-3">
          <span className="text-6xl font-bold mb-3">Hey, {user?.name}</span>
          {addsleep ? (<span className="text-4xl">
            Great Choose your sleep time and Duration. Sweet Dreams &#x2665;
          </span>) : ( <span className="text-4xl flex flex-row gap-10">
            Welcome Back, Here is a quick analysis of your Sleeping Habits.
           <span>
            
           </span>
          </span>)}
          {!addsleep && ( <div className="flex flex-row gap-7 mt-[30px] mb-[10px]">
            <span className="text-4xl mt-1">Add New Sleep Cycle Here </span>
            <button
  className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[2em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 mt-3"
  onClick={()=>setAddSleep(!addsleep)}
>
    Add Sleep
    </button>
          </div>)}
         
        </div>

        <div className="flex justify-center mt-5 bg-gray-800">
            {addsleep ? (<AddSleep close={setAddSleep} add={addsleep}/>):(<SleepInfo/>)}
        </div>
        
      </div>
    </div>
  );
};

export default DashBoard;
