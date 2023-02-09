import React, { useEffect, useState } from 'react'
import { ShoppingCartOutlined,Badge, ThumbUpAltOutlined,  FavoriteOutlined} from '@mui/icons-material'
import { load } from '../Apis/Api'
import Feedback from './Feedback'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Token=localStorage.getItem("Token")

function Products() {
  const Navigate=useNavigate();
  
  
  useEffect(()=>{
    load_products()
  },[])
  const [loading,setloading]=useState(false)

  const[data,setdata]=useState([])

  const[product,setproduct]=useState({})

  
  
  

  const load_products=async()=>{
    
    setloading(true)
    const resp=await load();
    setdata(resp.data)
    setloading(false)
  
  

  }
  
  const Datas=(item)=>{
    
    
  
Navigate(`/products/individual/${item.id}/${item.title}`, {state:{item}})
    
  
  }

  return (
  
   <>
   
   <div className='bg-gray-200 flex justify-around p-2'>
   <div className='w-[200px] h-[30px] flex hover:cursor-pointer  '>
               <a href="/"> <img src="https://th.bing.com/th/id/OIP.hOMELxe0qjXuMnioxkpfDAHaFZ?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='w-full h-full rounded-lg shadow-lg'/></a> 
               &nbsp;<p  className='text-xl text-blue-800 italic shadow-neutral-600
              '> Shopsy</p>
                 </div>
                 
                 
                 <div className='ml-[25px] cursor-pointer space-x-6  rounded-lg  flex justify-start items-center  '>
                    
                     {
                     Token?<button className='btn bg-white rounded-lg shadow-lg  p-2  text-black' onClick={()=>{
                         localStorage.clear()
                         window.location.href="/"
                     }}>Logout </button>: null
                 }
                     
                 </div>
                 
    </div>
    
    
    
    
    <div className='w-full mt-20'>
      {
        loading?<p className='ml-[700px] mt-[300px] capitalize '>loading products please wait </p>:<>
        <div className='w-full grid grid-cols-4 gap-4 px-6'>
          {
            data.map((item,index)=>{
              return(
                <div className=' hover:shadow-2xl hover:cursor-pointer rounded-lg  p-3  w-[300px] h-[450px]' onClick={()=>{
                Datas(item)
                  }} >
                  
                  
                  <div className='w-[100%] h-[70%] mt-3'>
                    <img src={item.images[0]} alt="imags" className='w-full h-full rounded-lg'/>

                  </div>
                  <div className='mt-4'>
                    <a  href={`/products/individual/${item.id} `}className='hover:text-blue-700 hover:cursor-pointer font-bold italic '>{item.title}</a>
                  </div>
                  <p className='mt-2'>{item.description.substring(0,50)}</p>
                  {
                    item.id%3==0? <small className='text-green-800 font-bold'>Free delivery by Shopsy</small>:null
                  }
                 


                </div>
              )

            })
          }

        </div><Feedback/>
        <Footer/></>
        
      }
    </div>
    
   
    
    
    </>
   
  )
}

export default Products