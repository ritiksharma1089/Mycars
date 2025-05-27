"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import React, { useState } from 'react'



const page = () => {
    const { data: session, status } = useSession();
    const [mobile, setmob] = useState('');
    const router = useRouter();


    const handleUpdate = async () => {

    const res = await fetch('http://localhost:3000/api/updatemobile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobile }),
    });
    if(res.ok){
        alert("Phone added sucessfully");
        router.push("/");

    }
  }
    
    
    if (status === "loading") {
      return <p>Loading...</p>;
    }
    console.log(session.user); // Check what properties are available

  if (status === "authenticated") {
    return (
      <div className='text-center'>
           
                                    <img
                                        src={session.user.image}
                                        alt="profile"
                                        width={300}
                                        height={300}
                                        style={{ borderRadius: "50%" }}
                                    />
        <h1>Welcome, {session.user?.name}</h1>
        <p>Email: {session.user?.email}</p>



        <p> Mobile :  {session.user?.mobile}</p>


        {!session.user?.mobile && 
          <div> 
            <label> Enter your mobile number</label>
            <input
              type='number'
              value={mobile}
              onChange={e => setmob(e.target.value)}
            />
            <button className='btn-primary' onClick={handleUpdate}> Save Number...</button>
          </div>
        } 

        <div className='row'>

          <div> </div>
        </div>
                                
      </div>
    );
  }

  return <p>User is not logged in.</p>;
  
}

export default page