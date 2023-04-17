
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'


const Login = () => {
    const [users, setUsers] = useState("");
    const [password, setPassword] = useState("");


    const submit = async () => {
        await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                users: users,
                password: password
            })
        })
    }




    return (
        <div className=' bg-gradient-to-tl from-[#F2BAE8]  to-[#0C7BB3]  h-screen flex'>
            <div className=' w-80 h-60 bg-zinc-100  rounded-lg m-auto justify-center'>
                <div className='place-items-center flex flex-col space-y-4 mt-5 ' >
                    <p className='font-sans md:font-serif ' > Login</p>
                    <TextField className=' hover:bg-white place-content-center bg-blend-color' label="UserName"
                        id="outlined-size-small"
                        value={users}
                        onChange={(value) => setUsers(value.target.value)}
                        margin="dense"
                        color="info"
                        size="small" />

                    <TextField className=' hover:bg-white place-content-center bg-blend-color' label="Password"
                        id="outlined-size-small"
                        value={password}
                        onChange={(value) => setPassword(value.target.value)}
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

export default Login