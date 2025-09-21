import Link from 'next/link'
import React from 'react'

const CrouselCard = ({item}) => {
  return (
    <div className=''>


        <div className="card w-100" >
        <div className="w-100 col-md-6 mx-auto" style={{ maxWidth: "700px" }}>

                <img src={item?.img || "/fortuner.png"} className="card-img-top " alt="..." style={{ maxHeight: "330px" }} />
            </div>
                <div className="card-body   bg-opacity-25 mx-auto text-center rounded"  style={{ maxWidth: "800px" }}>

                    <div className='row mx-auto text-center'>

                    <h5 className="col-6 col-md-4 ">{item?.titile} </h5>
                    <p className="card-text col-6 col-md-4 ">
                        Registeration Year -    {item?.Reg_year}
                    </p>
                    <p className="card-text col-6 col-md-4">

                      Car Price - Rs {item?.price}
                    </p>
                    </div>
               <div className="card-body d-flex justify-content-between">
                    <Link
                        href={`/carpage/${item?.id}`}
                        className="btn btn-primary btn-sm w-100 me-2"
                    >
                        More Details
                    </Link>
                   <a
                            className="btn btn-outline-primary btn-sm mt-auto w-100"
                            href={`https://wa.me/917056715364?text=Hi%20Mukesh%2C%20I%20want%20to%20check%20the%20${item?.titile}%20from%20you`}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                        Contact us
                    </a>
                    
                </div>
                </div>
               
            </div>
    </div>
  )
}

export default CrouselCard