import React from "react";
import Info from "./Info";
import { benefits } from "../constants/constants";

const Information = () => {
  

  return (
    <div className="mt-[30px] mb-[60px]">
      <h1 className="text-7xl font-bold mb-11">
        Why Should you{" "}
        <span className="text-indigo-700 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
          Track
        </span>{" "}
        your{" "}
        <span className="text-indigo-700 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
          Sleep Cycles
        </span>
        ?
      </h1>
      <div className="w-full h-[750px] flex justify-center items-center z-0">
        <div className="md:w-[650px] lg:w-[800px] h-[100px] bg-slate-400 rounded-[50px] flex flex-row "></div>
        <div className="absolute flex flex-row lg:space-x-28 md:space-x-20 ">

            {benefits.map((benefit)=><Info key={benefit.id} data={benefit}/>)}
        
         
        </div>
      </div>
    </div>
   
  );
};

export default Information;
