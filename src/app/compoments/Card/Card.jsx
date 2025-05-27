import Link from 'next/link';
import React from 'react'

const Card = ({item}) => {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={item.img || "/fortuner.png"} className="card-img-top" alt={item.titile} style={{ maxHeight: "200px"  , minHeight:"200px"}}  />
                <div className="card-body">
                    <h5 className="card-title text-center">{item.titile}</h5>
                    <p className="card-text">
                  
                    </p>



                    
                </div>
                 <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item"> Model -    {item.Reg_year}</li>
                    <li className="list-group-item">    Price - {item.price}(Rs)</li>
                </ul>
               
                 <div className="card-body d-flex justify-content-between">
                    <Link
                        href={`/carpage/${item.id}`}
                        className="btn btn-primary btn-sm w-100 me-2"
                    >
                        More Details
                    </Link>
                    <a
                            className="btn btn-outline-primary btn-sm mt-auto w-100"
                            href={`https://wa.me/917056715364?text=Hi%20Mukesh%2C%20I%20want%20to%20check%20the%20${item.titile}%20from%20you`}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                        Contact us
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card