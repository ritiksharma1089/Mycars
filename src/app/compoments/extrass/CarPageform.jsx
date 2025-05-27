"use client"
import { useSession } from 'next-auth/react';

import React, { useEffect, useState } from 'react'


const CarPageform = ({item}) => {

    const [showform, setshowform]= useState(false);
    const {data} = useSession();


    useEffect(()=>{

        setOrderData(prev => ({ ...prev, email: data?.user.email }));
        setOrderData(prev => ({ ...prev, name: data?.user.name }));
        setOrderData(prev => ({ ...prev, car: item.titile }));
    },[data])
    
  const handleSubmit = async () => {


    console.log(orderData);
    try {
      const res = await fetch('/api/order', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });


        if (res.ok) {
        console.log("done added car data");
       setshowform(false);
       alert("Your order successfully Saved");
         window.location.reload();
       
        
        // Optionally, redirect or reset form here
      } 
        
        // Optionally, redirect or reset form here
    

      setshowform(false);
    } catch (err) {
      console.log("frontend edit cardata error", err);
    }
  };
    
    
    const [orderData, setOrderData] = useState({
  name: "" ,
  email: "" ,
  contact: "",
  car: "" ,
  budget: ""
});

    
    if(!data){
        return <div>loading</div>
    }

     const handleChange = (e) => {
    const { id, value } = e.target;
    setOrderData(prev => ({ ...prev, [id]: value }));
  };



return (
    <div className="container my-4">
        <div className="card shadow-sm border-0">
            <div className="card-body">
                <div className="row align-items-center mb-4">
                    <div className="col-md-8">
                        <h1 className="h3 mb-2 fw-bold text-primary">
                            {item.title} <span className="text-secondary"></span>
                        </h1>
                        <div className="d-flex align-items-center mb-2 gap-2 flex-wrap">
                            <button className="btn btn-outline-danger btn-sm p-2 d-flex align-items-center">
                                <img
                                    alt="Add to wishlist"
                                    width="20"
                                    height="20"
                                    src="https://assets.cars24.com/production/catalog-web-in/250523102230/_next/static/media/icon-heart-empty.479d2b8c.svg"
                                />
                            </button>
                            <div className="d-flex align-items-center">
                                <img
                                    alt="location"
                                    width="16"
                                    height="16"
                                    src="https://cdn.cars24.com/qa/cms/2025/01/06/07f6e43e-b95c-4b73-92f7-e60815784e61hub-location.png"
                                    className="me-1"
                                />
                                <span className="text-muted small">
                                    G.T. Road Gannaur, Panipat, Haryana
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                        <div className="d-inline-flex align-items-center bg-light rounded px-3 py-2">
                            <img
                                alt="Business"
                                width="18"
                                height="18"
                                src="https://cdn.cars24.com/qa/cms/2024/12/24/0f764bd5-82db-4a52-a8a0-03dbef83093ags-bu-info-bottomsheet.png"
                                className="me-2"
                            />
                            <span className="text-success fw-semibold me-2">MYCARS Assured</span>
                            <img
                                alt="Business"
                                width="16"
                                height="16"
                                src="https://assets.cars24.com/production/catalog-web-in/250523102230/_next/static/media/right-arrow.3cdce875.svg"
                            />
                        </div>
                    </div>
                </div>
                <div className="row g-3 mb-4">
                    <div className="col-12 col-md-6">
                        <div className="border rounded-3 p-4 h-100 d-flex flex-column justify-content-between bg-white">
                            <div>
                                <div className="text-muted small">EMI starts at</div>
                                <div className="fs-5 fw-bold mb-2 text-primary">₹{item.Emi}/mo</div>
                            </div>
                            <a
                            className="btn btn-outline-primary btn-sm mt-auto w-100"
                            href={`https://wa.me/917056715364?text=Hi%20Mukesh%2C%20I%20want%20to%20check%20the%20${item.titile}%20from%20you`}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Message on WhatsApp
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="border rounded-3 p-4 h-100 d-flex flex-column justify-content-between bg-light">
                            <div>
                                <div className="fs-4 fw-bold mb-1 text-success">₹{item.price}</div>
                                <div className="text-muted small mb-2">+{item.othercharges} other charges</div>
                            </div>
                            <a
                            className="btn btn-outline-primary btn-sm mt-auto w-100"
                            href={`https://wa.me/917056715364?text=Hi%20Mukesh%2C%20I%20want%20to%20check%20the%20${item.titile}%20from%20you`}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                               Contact for Price breakup →
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button
                        type="button"
                        className="btn btn-success btn-lg w-100 w-md-auto px-5 py-2 fw-semibold"
                        onClick={() => setshowform(true)}
                    >
                        Book Your free test drive
                    </button>
                </div>
            </div>
        </div>

        {showform && (
            <div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{ zIndex: 1050, background: "rgba(0,0,0,0.5)" }}
            >
                <div className="bg-white rounded-4 shadow-lg p-4 p-md-5 w-100" style={{ maxWidth: 500 }}>
                    <button
                        className="btn-close position-absolute top-0 end-0 m-3"
                        aria-label="Close"
                        onClick={() => setshowform(false)}
                    ></button>
                    <div className="text-center mb-4">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="img-fluid rounded"
                            style={{ maxHeight: 180, objectFit: "cover" }}
                        />
                    </div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label fw-semibold">
                                Contact Number
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="contact"
                                placeholder="Enter your contact number"
                                value={orderData.contact}
                                onChange={handleChange}
                                required
                            />
                            <div className="form-text">
                             "We value your privacy. Your contact number will only be used to share important updates and offers that benefit you. We will never share your information with anyone."
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="budget" className="form-label fw-semibold">
                                Expected Price Range
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="budget"
                                placeholder="Enter your preferred price range"
                                value={orderData.budget}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary btn-lg" type="button" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
)
}

export default CarPageform