"use client"
import Hero from '@/app/compoments/Hero/Hero'
import { Carcontext } from '@/app/Providers/CarProviders';
import React, { useContext } from 'react'



// const fetchuser =async()=>{
//     const users = await fetch("http://localhost:3000/api/User");
//     const data = await users.json();
//     return data;
// }
const User = () => {
  const {Userdata} = useContext(Carcontext);
  const data = Userdata;

    // const data = fetchuser();
  return (
   <div className=''>
   
            <div
                    
                    className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch mx-auto"
                    >
                    <div className="card shadow-lg w-100 h-100 border-0">
                        <div className="card-body d-flex flex-column text-center">
                                <h1> Total users</h1>
                                <h1>  {data.length}  </h1>
                        </div>
                    </div>
                    </div>

                   <div className="card shadow-lg w-100 h-100 border-0">
                    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>

    {
        data.map((item)=>(
            
    <tr key={item.id}>
      <th scope="row">*</th>
      <td>{item.name}</td>
      <td>{item.mobile || "No Mobile "}</td>
      <td>{item.email}</td>
    </tr>
        ))
    }
    
  </tbody>
</table>
                   </div>

                    <Hero/>
   </div>
  )
}

export default User