import React from 'react'
import { ApiCategories } from '../Apis/Api'
const Token=localStorage.getItem("Token")
export const redirect=()=>{
    if(Token){
        window.location.href="/Products"
    }
    else{
        window.location.href="/Login"
    }

}

function Dummy_Products() {
  
    
  return (
    <div className='mt-4 grid grid-cols-4 justify-around gap-4 px-10' onClick={()=>{
        redirect()
    }}>
        <div className='shadow-xl relative h-[250px] hover:cursor-pointer'>
            <img src="https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311__340.jpg" className='rounded-lg h-full'/>
            <p className='absolute top-24 left-28 text-white text-2xl'>
</p>
        </div>
        <div className='shadow-xl relative h-[250px] hover:cursor-pointer'><img className='rounded-lg shadow-xl  h-full' src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__340.jpg"/></div>
        <div className='shadow-xl relative h-[250px] hover:cursor-pointer'><img  className='rounded-lg shadow-xl  h-full'  src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg"/></div>
        <div className='shadow-xl relative h-[250px] hover:cursor-pointer'><img  className='rounded-lg shadow-xl  h-full' src="https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519__340.jpg"/></div>
    </div>
  )
}

export default Dummy_Products