import React from 'react'

const fetchdata =async()=>{
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
   const res = await fetch(`${baseUrl}/api/order`);
    const data = await res.json();
    return data;
}
const page = async() => {

  const data = await fetchdata();

 return (
   <div className=''>
   
            <div
                    
                    className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch mx-auto"
                    >
                    <div className="card shadow-lg w-100 h-100 border-0">
                        <div className="card-body d-flex flex-column text-center">
                                <h1> Total Order</h1>
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
      <th scope="col">Car</th>
    </tr>
  </thead>
  <tbody>

    {
        data.map((item)=>(
            
    <tr key={item.id}>
      <th scope="row">*</th>
      <td>{item.name}</td>
      <td>{item.contact || "No Mobile "}</td>
      <td>{item.email}</td>
      <td>{item.car}</td>
    </tr>
        ))
    }
    
  </tbody>
</table>
                   </div>

   </div>
  )
}

export default page