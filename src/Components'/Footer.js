import { EmailOutlined, FacebookOutlined, Instagram, LocationCityRounded, Phone, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-gray-200 flex justify-start space-x-96 p-2 '>
        <div className='w-[40%] ml-10'>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis
                  hendrerit dolor magna</p>
                  <div className='flex justify-start space-x-6 items-center mt-4'>
                    <div className='bg-blue-700 text-white rounded-lg shadow-lg p-1 hover:cursor-pointer'><FacebookOutlined/></div>
                    <div className='bg-blue-400 text-white rounded-lg shadow-lg p-1 hover:cursor-pointer'><Twitter/></div>
                    <div className='bg-red-700 text-white rounded-lg shadow-lg p-1 hover:cursor-pointer'><Pinterest/></div>
                    <div className='bg-orange-700 text-white rounded-lg shadow-lg p-1 hover:cursor-pointer'><Instagram/></div>
                  </div>
        </div>
    
        

            <div className='flex flex-col space-y-8'>
                <div><LocationCityRounded/> Hyderabad,india</div>
                <div><Phone/>+91 995xxxxxx9</div>
                <div><EmailOutlined/> nareshguptha@gmail.com</div>
         </div>
          
       
    </div>
    <div className=' text-center text-2xl bg-gray-200  '> Designed by Naresh with ❤️</div>
   
    </>
  )
}

export default Footer