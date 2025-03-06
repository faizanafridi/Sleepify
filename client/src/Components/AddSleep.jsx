import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addSleep } from '../store/sleep/sleepslice';


const AddSleep = ({close,add}) => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [currentTime, setCurrentTime] = useState(new Date());
    const dispatch = useDispatch();
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); 
        return () => clearInterval(interval);
    }, []);

    

    const handleTime1 = (e)=>{
        setValue1(e.target.value);
        
    }
    const handleTime2 = (e)=>{
        setValue2(e.target.value);
    }

    const handleAdd = (e)=>{
        e.preventDefault();
        const added = {
          startTime:e.target[0].value,
          endtime:e.target[1].value
        }
        dispatch(addSleep(added));
        setValue1('');
        setValue2('');
        close(!add);
    }

  return (
    <div className="bg-slate-600 w-[500px] h-[450px] rounded-lg">
  <div className="flex p-2 gap-4">
    <div className="">
      <span className="bg-blue-500 inline-block center w-5 h-5 rounded-full cursor-pointer" onClick={()=>close(!add)} >
        <span className='ml-1'>
        &#10006;
        </span>
       
        </span>
    </div>
    <div className="circle">
      <span className="bg-purple-500 inline-block center w-5 h-5 rounded-full cursor-pointer" onClick={()=>close(!add)}>
      <span className='ml-1'>
        &#10006;
        </span>
      </span>
    </div>
    <div className="circle">
      <span className="bg-pink-500 box inline-block center w-5 h-5 rounded-full cursor-pointer" onClick={()=>close(!add)}>
      <span className='ml-1'>
        &#10006;
        </span>
      </span>
    </div>
  </div>
  <div className="flex flex-col">
    <div className='mb-3'>
        <span className='text-3xl ml-2'>Currently the time is : </span>
<span> {currentTime.toLocaleTimeString()}</span>
    </div>
    <h1 className='flex justify-center text-4xl text-blue-300 underline mb-[40px]'>
        Add Your Sleep
    </h1>
    <form className='flex flex-col gap-10' onSubmit={handleAdd}>
        <div className='flex flex-row gap-4 ml-2'>
        <label className='mt-1 text-[25px]'>Select Start Time:</label>
    <input type='time' value={value1} onChange={handleTime1} step='0' className='text-black w-[200px] h-[30px] bg-transparent border-2 border-blue-300 p-5'/>  
        </div>
        <div className='flex flex-row gap-8 ml-2'>
        <label className='mt-1 text-[25px]'>Select End Time:</label>
    <input type='time' value={value2} onChange={handleTime2} step='0' className='text-black w-[200px] h-[30px] bg-transparent border-2 border-blue-300 p-5'/>  
        </div>
        <button
  className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[2em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 ml-[180px]"
>
    Add Sleep
    </button>
    </form>
    
  </div>
</div>

  )
}

export default AddSleep
