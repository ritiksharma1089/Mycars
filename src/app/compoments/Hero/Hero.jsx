import Link from 'next/link'
import React from 'react'

const Hero = () => {
 return (
    <div>

        <div>
            

<div className="container col-xxl-8 px-2 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src="/fortuner.png"
        className="d-block mx-lg-auto img-fluid"
        alt="Bootstrap Themes"
        width="700"
        height="500"
        loading="lazy"
      />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
      Because Every Journey Deserves the Right Beginning.
      </h1>
      <p className="lead">
       Find the perfect car that fits your lifestyle and personality — right here. Whether you're chasing adventure, comfort, or cutting-edge style, we have the keys to your next journey. Start your story with a car that’s built for you.
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start ">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 ">
        <Link href={"/aboutus"} className='text-white text-decoration-none'> About us</Link>  
        </button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">
          <Link href={"/carpage"} className='text-decoration-none'>   Explore More</Link>
        
        </button>
      </div>
    </div>
  </div>
</div>



        </div>
    </div>
  )
}

export default Hero