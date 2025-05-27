import React from 'react'
import CrouselCard from './CrouselCard'

const SecondCrousle = async() => {

  const res = await fetch('http://localhost:3000/api/getcars');
const data = await res.json();

if(!data){
      return <div>loading</div>
    }


  return (
    <div>
      <div></div>
   <div className='   '>
          <div id="carouselExampleRide" className="carousel slide container " data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
     <CrouselCard item={data[0]}/>
    </div>
    <div className="carousel-item active">
     <CrouselCard item={data[1]}/>
    </div>
    <div className="carousel-item active">
     {/* <CrouselCard/> */}
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

    </div>
  )
}

export default SecondCrousle