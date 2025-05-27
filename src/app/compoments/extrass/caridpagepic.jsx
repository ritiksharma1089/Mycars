import React from 'react'

const Caridpagepic = ({car}) => {
  return (
    <div className=''>
<div className="w-80 col-md-6 mx-auto">

                <img src={car.img || "/fortuner.png"} className="card-img-top " alt="..." />
            </div>


    </div>
  )
}

export default Caridpagepic