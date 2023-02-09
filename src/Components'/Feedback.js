import { Send } from '@mui/icons-material'
import React from 'react'

function Feedback() {
  return (
    <div className='bg-violet-400 w-full mt-[50px]  space-y-6 p-20 flex flex-col place-items-center justify-center'>

<p className='text-2xl font-bold'>Contact us </p>
<p className='capitalize '>Always stay in touch for your fav products</p>
<div className='flex justify-center p-2  '>
<input type="email" size="50" className='shadow-lg  border-none outline-none' placeholder='Email'/>
<p  className='bg-green-700   px-2 '> <Send className=' text-white   '/></p>

</div>

    </div>
  )
}

export default Feedback