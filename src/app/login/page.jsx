"use client";
import { signIn, useSession } from "next-auth/react";
// import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from 'react'

const Login = () => {


  const [username, setusername]= useState(null);
  const [password, setPassword]= useState(null);
   const {data, status } = useSession();
   const onlogin=async()=>{
      const data =await fetch('api/login',{
       method:"POST",
         headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       email: {username},
       password: {password},
     }),
      })
   }
  const router = useRouter();

  if(status==="loading"){
    return <div> Loading</div>
  }

  if(status==="authenticated"){
    router.push("/");
  }

  return (
    <div>

         <input type='text' placeholder='email' onChange={(e)=> setusername(e.target.value)} />
         <input type='password' placeholder='password' onChange={(e)=> setPassword(e.target.value)} />
         <button className='btn' onClick={()=>onlogin("this is var", "password")}>submit</button>


       <button type="button" className="btn btn-primary" onClick={() => signIn("google")}>Continue with google</button>
       <button type="button" className="btn btn-primary" onClick={() => signIn("email")}>Continue with Emial</button>
    </div>

    


  )
}

export default Login