import React, { useEffect, useState } from 'react'
import { cart_data } from '../Apis/Api';
import { delete_Product } from '../Apis/Api';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined, Search, AppRegistrationOutlined, LoginOutlined } from '@mui/icons-material'

function Cart() {
    const Navigate=useNavigate()
    var total=0;
    const[cart_total,setcart_total]=useState()
    const Token=localStorage.getItem("Token")

    const[data,setdata]=useState([])
    const loadcart=async()=>{
        const resp=await cart_data();
        
        setdata(resp.data)
       
       
    }
    useEffect(()=>{
loadcart()
    },[data])

    useEffect(()=>{
     loadcart()
      total_cart()
    })
   
    

    const total_cart=()=>
    {
        data.map((item)=>{
        total=total+item.price

    })
    setcart_total(total)
  
   

    }
    const delete_item=async(id)=>{
       
        
        const resp=await delete_Product(id)
       
   window.location.reload()
         
       
        
    }
  

  return (<>
  <div className=''>
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
    {data.length>0?
    <div className='w-full h-[50vh] flex justify-around items-center'>
 
        <div className='w-[50%] shadow-xl p-3 mt-[100px] flex flex-col bg-gray-500 text-white'>
            
            <div className='flex justify-around w-[100%] font-semibold ml-[50px] mb-[10]'>
                <p>Title</p>
            <p>Price</p> 
            <p>Action</p>
            </div>
           < div className='mt-10'></div>
            
            {
                data.map((item)=>{
                    return(<>
                    
                    <div className='flex justify-around p-3 '>
                        <div className='w-[250px] text-center '>
                        <p>{item.title}</p>
                        </div>
                        <div className='w-[250px] text-center '>
                        <p>$ {item.price}</p>
                        </div>
                        <div><button className='btn bg-red-500 rounded-lg shadow-lg p-2 border-none outline-none capitalize text-white '
                         onClick={()=>{delete_item(item.id)}}>delete product</button></div>
                        
                        
                    </div>
                    </>)
                })
            }
        </div>
        
        <div className='flex flex-col w-[250px] h-[200px] border mt-36 space-y-6 border-slate-300 p-5 shadow-lg' >
        <div className='flex justify-between'><p>Total Items:</p><p>{data.length}</p></div>
                <div className='flex justify-between'> <p>Total price:</p><p>${cart_total}</p></div>
               <div className='flex justify-between'><p>Disocunt:</p><p>${0}</p></div>
                <div className='flex justify-between'><p>Total price:</p><p>${cart_total}</p></div>
              
                
                
            </div>
            
        
        
       

    </div>
    :<>
    <div className='flex justify-center items-center space-x-10  h-[50vh]'>
    <p  className='w-[200px] h-[100px]'>
        <img src="https://thumbs.gfycat.com/MenacingOrneryCaimanlizard-size_restricted.gif" className='w-full h-full rounded-lg shadow-lg'/></p>
        <p className='text-2xl font-bold text-red-500'>'No Products available Add products and Come Back'</p>
        <button className='btn bg-orange-500 p-2 rounded-lg text-white  shadow-lg' onClick={()=>{
            Navigate("/Products")
           // window.location.href="/Products"
        }}>Add products</button>
        </div>
        
       </>}
       {
        data.length>0?<div className='mt-10 flex justify-center'>
       <button className='btn bg-green-500 p-2 rounded-md shadow-lg outline-none border-none text-white ' onClick={()=>{
          toast.success("successfully placed order")
          setTimeout(()=>{
            window.location.href="/"
          },3000)
       }}>Place Order</button>
       </div>:null
       }
       </div>
       
  </>
   
  )
}

export default Cart