import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { cart_add } from '../Apis/Api'




function Individual() {
  const Navigate=useNavigate()
  const Location=useLocation()
  const data=Location.state.item

  
  
   

  const carts=async ()=>{
    const resp=await cart_add(data.id)
   
    toast.info(resp.data.message)
  }
  
  
  return (
    <>
    <p className='bg-red-500 text-white flex justify-around p-2 items-center '>{carts.length>0?<p> <p className='w-[100px]'>
      <ShoppingCartIcon className='w-[full] h-[50px] hover:cursor-pointer' 
    onClick={()=>{
      window.location.href="/cart_feed"
    }} /> <span className='-ml-2'>{carts.length}</span></p></p>:<button onClick={()=>{
      Navigate("/cart_feed")
      // window.location.href="/cart_feed"
    }} className='bg--gray-700'><ShoppingCartIcon  className='hover:cursor'/>View cart</button> }
    <button className='btn bg-white text-black rounded-lg shadow-lg p-2' onClick={()=>{
      
      Navigate("/products")

    }}>
      Home</button></p>
    <div className='flex justify-around space-x-[100px]  w-[60%] ml-[250px] mt-[100px] '>
    <div className='flex w-[800px] flex-col   mt-[50px] justify-between'>
      <div><img src={data.images[0]} className="w-[350px] h-[300px] rounded-md shadow-lg" /></div>
      
      <button className='w-[400px] btn bg-orange-500 rounded-lg shadow-lg p-2 mt-9 text-white  font-bold' onClick={()=>{toast.success("thank you you'll get notified")}}>NOTIFY ME </button>
      
      
    </div>
    <div className='mt-[90px] space-y-4'>
      <p className='font-semibold text-3xl'>{data.title}</p>
      <p className='font-bold'>$ {data.price}</p>
      <p>{data.description}</p>
      <p className='capitalize'>warranty : 2 years</p>
      <div className='flex justify-between space-x-10'>
        <button className='btn bg-gray-500 p-2 rounded-lg text-white shadow-lg' onClick={()=>{
          carts()
        }}>Add to cart </button>
<button className='btn bg-red-400 p-2 rounded-lg text-white shadow-lg'   >Place order</button></div>
      
    </div>
   
    
   
    
   </div>
  
 </>
   
  )
}

export default Individual