import { TextField } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <div className=' bg-gradient-to-tl from-[#F2BAE8]  to-[#0C7BB3]  h-screen flex'>
      
     <div className=' w-72 h-80 bg-zinc-100  rounded-lg m-auto justify-center'>
      <div className='place-items-center flex flex-col space-y-5 mt-5 ' >
        <p className='font-sans md:font-serif ' > SignUp</p>
<TextField className='bg-slate-400 hover:bg-white place-content-center ' label="FirstName"
          id="outlined-size-small"
          defaultValue="Name"
          margin="dense"
          color="info"
          size="small"  />


      </div>
      
     </div>
        
      </div>

        
  
  )
}

export default SignUp