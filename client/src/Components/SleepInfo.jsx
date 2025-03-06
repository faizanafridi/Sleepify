import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSleep } from "../store/sleep/sleepslice";
import sleepsarr from "../constants/data";
import SleepTable from "./SleepTable";
import SleepCharts from "./SleepCharts";
import Footer from "./Footer";

const SleepInfo = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSleep(user.id));
  }, []);

  const sleeps = useSelector((state) => state.sleep.sleeps);
  let avg = 0;
  if (sleeps.length > 0) {
    sleeps.forEach((sleep) => {
      avg += Number(sleep.hours);
    });
    avg /= sleeps.length;
    avg = Math.floor(avg);
  }
  console.log(avg);

  return (
    <div className="h-full">
      {/* <button className='border-2' onClick={handleClick}>click</button> */}
      <div className="flex flex-col gap-5 md:ml-4">
        <h1 className="lg:text-8xl md:text-6xl">
          Your{" "}
          <span className="text-indigo-700 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
            Stats
          </span>
        </h1>
        <div className="flex md:flex-col lg:flex-row lg:space-x-16 md:space-y-12">
          <div className="flex flex-col items-center">
          <SleepCharts />
          <span>Visual Representation</span>
          </div>
          <div className="md:ml-[150px]">
          <SleepTable />
          </div>
          
        </div>
      </div>
      <div className="flex flex-col gap-[80px]">
        <div className="flex flex-col justify-center items-center gap-10 mt-[100px]">
          <span className="lg:text-7xl md:text-5xl">
            Your{" "}
            <span className="text-indigo-700 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              Average Sleep Time
            </span>{" "}
            : {avg}
          </span>
          {avg >= 8 ? <span className="text-6xl">
            Great ! Keep It Up!
          </span> : <span className="text-6xl">
            You Seem Busy ! Please Sleep More
            </span>}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default SleepInfo;
