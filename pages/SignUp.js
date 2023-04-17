import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const SignUp = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [mail, setMail] = useState("");
  const [pasword, setPassword] = useState("");
  const [reEnteredPassword, setreEnteredPassword] = useState("");

  const submit = async () => {
    if (pasword === reEnteredPassword) {
      await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({
          firstName: first,
          lastName: last,
          email: mail,
          password: reEnteredPassword
        })
      })
    }
    else {
      alert("Password mismatch")
    }
  }

  return (
    <div className=' bg-gradient-to-tl from-[#F2BAE8]  to-[#0C7BB3]  h-screen flex'>
      <div className=' w-72 h-96 bg-zinc-100  rounded-lg m-auto justify-center'>
        <div className='place-items-center flex flex-col space-y-4 mt-5 ' >
          <p className='font-sans md:font-serif ' > SignUp</p>
          <TextField className=' hover:bg-white place-content-center bg-blend-color' label="FirstName"
            id="outlined-size-small"
            value={first}
            onChange={(value) => setFirst(value.target.value)}
            margin="dense"
            color="info"
            size="small" />
          <TextField className=' hover:bg-white place-content-center bg-blend-color' label="LastName"
            id="outlined-size-small"
            value={last}
            onChange={(value) => setLast(value.target.value)}
            margin="dense"
            color="info"
            size="small" />
          <TextField className=' hover:bg-white place-content-center bg-blend-color' label="Email-Id"
            id="outlined-size-small"
            value={mail}
            onChange={(value) => setMail(value.target.value)}
            margin="dense"
            type='email'
            color="info"
            size="small" />
          <TextField className=' hover:bg-white place-content-center bg-blend-color' label="NewPassword"
            id="outlined-size-small"
            value={pasword}
            onChange={(value) => setPassword(value.target.value)}
            margin="dense"
            color="info"
            type='password'
            size="small" />
          <TextField className=' hover:bg-white place-content-center bg-blend-color' label="ReEnterPassword"
            id="outlined-size-small"
            value={reEnteredPassword}
            onChange={(value) => setreEnteredPassword(value.target.value)}
            margin="dense"
            color="info"
            type='password'
            size="small" />
          <Button onClick={submit} className='bg-sky-100 hover:bg-blue-500 text-slate-500' >
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SignUp