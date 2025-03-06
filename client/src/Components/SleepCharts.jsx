import React, { useState,useRef,useEffect, useMemo } from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import sleepsarr from '../constants/data'
import { useSelector } from 'react-redux'

const SleepCharts = () => {
  
    const sleeps = useSelector((state)=>state.sleep.sleeps);
    const data = {};
    sleeps.map((sleep)=>{
        const hours = sleep.hours;
        data[hours] = (data[hours] || 0) + 1;
    })

    const times = Object.keys(data);
    const counts = Object.values(data);
    
    const chartData = {
        labels: times,
        datasets: [
            {
                label: "Times You Slept X hours",
                data: counts
            }
        ]
    }

  return (
    <div>
     
      <Bar data={chartData} options={{}} width={"330px"} height={"400px"}/>
    </div>
  )
}

export default SleepCharts
