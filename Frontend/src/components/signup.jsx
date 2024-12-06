import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
       <div className='flex h-screen items-center justify-center'>
  <div className='shadow-md rounded-md border p-4 modal-box'>
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      <h3 className="font-bold text-lg">Signup!</h3>
    {/* Name */}
    <div className='mt-4 space-x-3'>
        <span>Name</span>
        <br/>
        <input type="text" className='w-80 px-2 py-1 border outline-none'placeholder='Enter Your Name'
        {...register("name",{required:true})}/>
        <br />
        {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
        
    </div>
    {/* Email */}
    <div className='mt-4 space-x-3'>
        <span>Email</span>
        <br/>
        <input type="email" className='w-80 px-2 py-1 border outline-none'placeholder='Enter Your Email'
        {...register("email",{required:true})}/>
        <br />
        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
    </div>
    {/* Password */}
    <div className='mt-4 space-x-3'>
        <span>Password</span>
        <br/>
        <input type="password" className='w-80 px-2 py-1 border outline-none'placeholder='Enter Your Password'
        {...register("password",{required:true})}/>
        <br />
        {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
    </div>
    {/* Button */}
    <div className='mt-4 flex justify-around'>
        <button className='bg-pink-500 rounded px-3 py-1 text-white hover:bg-pink-700'>Login</button>
        <p>Have Account? <button className='text-blue-500 underline' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button>
        
        </p>
        
    </div>
    </form>
    
    <Login/>
  </div>
</div>
    </div>
  )
}

export default signup
