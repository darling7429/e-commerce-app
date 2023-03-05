import { ShoppingCartOutlined, Search, AppRegistrationOutlined, LoginOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
const Token=localStorage.getItem("Token")


function Navbar() {
  return (
    <>
    
     <div className='parent mt-2 shadow-xl  '>
         <div className='flex justify-around h-[50px] items-center  pb-[20px] pt-[10px] '>
            <div className='flex left items-center space-x-6 '>
                <div className='w-[250px] h-[30px] flex justify-center  items-center  '>
              <a href="/"> <img src="https://th.bing.com/th/id/OIP.hOMELxe0qjXuMnioxkpfDAHaFZ?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='w-[50px] h-full rounded-lg shadow-lg'/>  </a> 
          &nbsp;    <p  className='text-xl text-blue-800 italic shadow-neutral-600
              '> Shopsy</p>
                </div>
                
              
                <div className='search_input ml-5 rounded-md  focus-within:border-[#8a4af3]  flex border-[2px] border-solid border-lightgray'>
                    <Search className='cursor-pointer '/>
                    <input type="text" className='input outline-none  border-none '/>
                </div>
                
            </div>
           
            <div className='uppercase flex flex-end items-center space-x-6 '>
                {Token?null :<div className='ml-[25px] cursor-pointer' onClick={()=>{
                    window.location.href="/Signup"
                }}>
                    register <AppRegistrationOutlined/>
                </div>}
                
                {
                    Token?<button className='btn bg-gray-500 rounded-lg shadow-lg  p-2  text-white' onClick={()=>{
                        localStorage.clear()
                        window.location.href="/"
                    }}>Logout </button>: <div className='ml-[25px] cursor-pointer' onClick={()=>{
                        window.location.href="/Login"
                    }}>
                        login <LoginOutlined/>
                    </div>
                }
                
               
                <div className='ml-[25px] cursor-pointer' onClick={()=>{
                    window.location.href="/Products"
                }}>
                    Products
                </div>
                
               
            </div>


        </div>
    </div>
    </>
   
  )
}

export default Navbar