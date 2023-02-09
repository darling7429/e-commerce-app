import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Login_api} from "../Apis/Api"
import { ToastContainer, toast } from 'react-toastify';
import { ShoppingCartOutlined, Search, AppRegistrationOutlined, LoginOutlined } from '@mui/icons-material'
import * as yup from "yup";
import { useState } from 'react';
const Token=localStorage.getItem("Token")





const schema = yup.object({

	email: yup.string().email().max(150, "Too Long!").required('Required'),
	password: yup.string().required('Required'),
	
})


function Login() {
  const[loading,setloading]=useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});

    const  myOwnFunc=async(data)=>{
      setloading(true)
      if(Token)
      {
        alert("you are already  logged in taking  to products page ")
        window.location.href="/Products"
        setloading(false)
      } 
      else{
        try {
          const response=await Login_api(data);
         setloading(false)
  
  
       if(response.status===200)
       
       {
        toast.success("successful login")
        localStorage.setItem("Cart_id",response.data.cart_id);
        localStorage.setItem("Token",response.data.token)
        setTimeout(()=>{
          window.location.href="/Products"
        },6500)

        
        
      }
     
        } 
        catch (error) {
          setloading(false)
          toast.error(error.response.data.message)
          
        }

      }
      
     
      
    }
    
  return (<>
  <div className='flex left justify-around items-center space-x-6 bg-gray-500 p-2 shadow-lg  '>
                <div className='w-[50px] h-[30px] '>
              <a href="/"> <img src="https://th.bing.com/th/id/OIP.hOMELxe0qjXuMnioxkpfDAHaFZ?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='w-full h-full rounded-lg shadow-lg'/></a> 
                </div>{
Token?<div className='ml-[25px] cursor-pointer'>
<button className='bg-red-500 p-2 text-white rounded-lg shadow-lg' onClick={()=>{
  if(Token){
   alert("Logging out ")
    localStorage.clear()
    window.location.href="/"
  }
  
  else{
    alert('you must login first 😒 ')
  }
   
}}>Logout</button>

</div>:<div className='ml-[25px] cursor-pointer text-white capitalize' onClick={()=>{
                    window.location.href="/Signup"
                }}>
                    register <AppRegistrationOutlined/>
                </div>
                }
                
                
                
               
                
            </div>
    
    <div className='w-full bg-gray-100 h-[100vh] flex justify-center items-center'>
    {
      loading?<div className="flex justify-center items-center">
        <p>Logging in please wait....</p>
      <div className="spinner-border animate-spin  bg-green-500 inline-block w-8 h-8 border-4 rounded-full" role="status">
      <p className='bg-red-800'></p>
      
      </div>
    </div>:<div className='bg-white w-[400px] h-[350px] rounded-lg shadow-lg text-center  '>
      <h1 className='text-black text-xl'>Login Here</h1>
      <form onSubmit={handleSubmit(myOwnFunc)}>
        <div className='flex flex-col space-y-7 justify-center  place-items-center mt-8'>
       
        <div className='input w-[250px]  '>
          <input {...register("email")} type="email" className='w-full rounded-lg shadow-lg h-[50px] border-none outline-none text-center ' placeholder='Email '/>
          <small id="emailHelp" class="form-text text-danger">{errors["email"]?.message}</small>
  
        </div>
        <div className='input w-[250px]  '>
          <input {...register("password")} type="password" className='w-full rounded-lg shadow-lg h-[50px] border-none outline-none text-center' placeholder='Password '/>
          <small id="emailHelp" class="form-text text-danger">{errors["password"]?.message}</small>
  
        </div>
        
        <div className='flex flex-col space-y-6 justify-between'>
          <input className='btn bg-green-700 rounded-lg shadow-lg p-2 inline-block text-white' type='submit'/>
          <p className='capitalize'>Dont  have an account?<a className='text-blue-400' href="/Signup">Signup Here</a>?</p>
        </div>
  
        </div>
        </form>
       
       
  
  
      </div>
    }
    
    
    </div>
    </>
  )
}

export default Login