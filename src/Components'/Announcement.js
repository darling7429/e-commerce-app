import React, { useState } from 'react'
import { Close } from '@mui/icons-material';

function Announcement() {
    const[classs,setclass]=useState("flex justify-center bg-violet-500 p-1 text-white text-xl items-center ")
    const hide=()=>{
        setclass(classs +" hidden")

    }
  return (
    <>
    <div className='bg-red-500 text-white capitalize h-[30px] text-center items-center '>
note:-Please install cors plugin 

    </div>
    
    <div className={classs}>
    <p>Hurry up up to 70% Discount</p><Close className='hover:cursor-pointer' onClick={()=>{
            hide()
        }} ></Close>
        

     </div></>
   
  )
}

export default Announcement