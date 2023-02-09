import React from 'react'
import { redirect } from './Dummy_Products'

function Home() {
  return (
    <div className='px-20 flex justify-around  items-center -space-x-80 bg-white p-10 '>
        <div className=' flex flex-col space-y-4' >
            <p className=' capitalize mt-10  '> Welcome to  </p> <p className='text-3xl font-semibold capitalize'>Shopsy store</p>
          
               
                <p className='text-5xl mt-3 capitalize '>Summer offer</p><p className='text-5xl mt-3 capitalize '> 2023 Collection</p>
                <button className='btn bg-blue-700  w-[100px]  text-white rounded-lg shadow-lg p-2 mt-3' onClick={()=>{
                    redirect()
                }}>Shop now</button>
            
        </div>
        <div>
            <img  className='bg-slate-100 'src="https://media.istockphoto.com/id/472350048/photo/surprised-young-female-student-over-white-background.jpg?b=1&s=170667a&w=0&k=20&c=m0AE7nVi9qS0wzI5ZcMUtEvttxn4HLzLMS7WcUq3alI="/>
        </div>
    </div>
  )
}

export default Home