
"use client"
import React, { useContext, useEffect } from 'react'
import CrouselCard from '../extrass/CrouselCard';
import { Carcontext } from '@/app/Providers/CarProviders';
// import React from 'react'


const Crousel = () => {

  const {allData} = useContext(Carcontext)
  const data = allData;

  
  useEffect(() => {
      console.log("this is all data#####################################", allData);
      
    }, [allData]);

 
 if(!allData || allData.length ==0){
      return <div>loading</div>
    }
    return (
        <div className='  h-100 p-5 text-center  '>

          
          <div id="carouselExampleRide" className="carousel slide  " data-bs-ride="true">
  <div className="carousel-inner">
     <div className="carousel-item active">
     <CrouselCard item={data[0]}/>
    </div>
     <div className="carousel-item active">
     <CrouselCard item={data[1]}/>
    </div>
     <div className="carousel-item active">
     <CrouselCard item={data[2]}/>
    </div>
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Crousel