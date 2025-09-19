import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login() {
    const [authUser,setAuthUser]=useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    const onSubmit = (data) =>{
    const userInfo={
       
        email:data.email,
        password:data.password,
     
    }
    // console.log(userInfo);
    axios.post('/api/user/login',userInfo)
    .then((response)=>{
        console.log(response.data);

        if(response.data){
            toast.success('Login successfull')
        }
        localStorage.setItem("ChatApp",JSON.stringify(response.data));
        setAuthUser(response.data)

    })
    .catch((error)=>{
        if(error.response){
            toast.error("Error: "+error.response.data.error)
        }
    })
  }
    
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
        <form onSubmit={handleSubmit(onSubmit)} className="border border-white  rounded-lg  flex flex-col gap-4 w-[350px] p-5 shadow-md">
            <h1 className='text-2xl text-center'>Chat<span className='text-green-500 font-semibold'>App</span></h1>
            <h2 className='text-xl font-bold'>Login</h2>
            
            
            {/* Email */}
            <label className="input validator">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required {...register("email", { required: true })}  />
                </label>
                {errors.email && <span className='text-red-500 text-sm font-semibold'>This field is required</span>}
                
                {/* <div className="validator-hint hidden">Enter valid email address</div> */}

                {/* password */}
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <path
                            d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                        ></path>
                        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        minLength='8'
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        {...register("password", { required: true })}
                    />
                </label>
                 {errors.password && <span className='text-red-500 text-sm font-semibold'>This field is required</span>}
                
                
                {/* text */}
                <div className='flex justify-between'>
                    <p>New User <Link to='/signup' className='text-blue-500 underline cursor-pointer '>SignUp</Link></p>
                    <input type="submit" className='text-white bg-green-500 rounded-lg px-1.5 py-1' value="Login"/>
                </div>



            </form>
    </div>
    </>
  )
}

export default Login
