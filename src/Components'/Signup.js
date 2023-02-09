import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import * as yup from "yup";
import {Signup_api}  from "../Apis/Api"

import {useState} from "react"

const schema = yup.object({

username:yup.string().min(6,"tooshort").required("required"),
	email: yup.string().email().max(150, "Too Long!").required('Required'),
	password: yup.string().min(8,"too short").required('Required'),
  confirmpassword:yup.string().min(8,"too short").required('Required')
	
})


function Signup() {
  const [loading,setloading]=useState(false)
 

  const{register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  })


  const myOwn= async(data)=>{
    setloading(true)
    try{
      const response=await Signup_api(data);
      setloading(false)
     toast.success(response.data)
     setTimeout(()=>{
      window.location.href="/Login"
     },6500)
  
    }
      catch(error){
        console.log(error)
      if(error && error.response && error.response.data){
        toast.error(error.response.data.message)
        setloading(false)
      }
        
        return false;

      }
   
    
  

  }
  return (
    <div className='w-full bg-gray-100 h-[100vh] flex justify-center items-center'>
     {loading?<div class="flex justify-center items-center">
        <p>creating account please  wait..</p> 
      <div class="spinner-border animate-spin  bg-green-700 inline-block w-8 h-8 border-4 rounded-full" role="status">
    
      
      </div>
    </div>:<div className='bg-white w-[400px] h-[500px] rounded-lg shadow-lg text-center  '>
    <h1 className='text-black text-xl'>Create account  Here</h1>
   
    <form onSubmit={handleSubmit(myOwn)}>
      <div className='flex flex-col space-y-7 justify-center  place-items-center mt-8'>
      <div className='input w-[250px]  '>
        <input {...register("username")} type="text" className='w-full rounded-lg shadow-lg h-[50px] border-none outline-none text-center ' placeholder=' Username '/>
       
        <small>{errors.username?.message}</small>
      </div>
      <div className='input w-[250px]  '>
        <input {...register("email")} type="email" className='w-full rounded-lg shadow-lg h-[50px] border-none outline-none text-center ' placeholder='Email '/>
       <small>{errors.email?.message}</small>

      </div>
      <div className='input w-[250px]  '>
        <input {...register("password")} type="password" className='w-full rounded-lg shadow-lg h-[50px] border-none outline-none text-center' placeholder='Password '/>
        <small className='capitalize text-red-700'>{errors.password?.message}</small>

      </div>
      <div className='input w-[250px]  '>
        <input {...register("confirmpassword")} type="password" className='w-full rounded-lg shadow-lg h-[50px] border-none outline-none text-center ' placeholder='Confirm Password '/>
        <small className='capitalize text-red-700'>{errors.confirmpassword?.message}</small>

      </div>
      <div className='flex flex-col space-y-6 justify-between'>
        <button className='btn bg-gray-700 rounded-lg shadow-lg p-2 inline-block text-white' type="submit">Sign up Here</button>
        <p className='capitalize'>already   have an account?<a className='text-blue-400' href="/Login">Login Here</a>?</p>
      </div>

      </div>
      </form>
     
     


    </div>}
    
    
    
    </div>
  )
}

export default Signup