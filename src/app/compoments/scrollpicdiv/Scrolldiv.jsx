import Link from 'next/link'

import React from 'react'

const Scrolldiv = () => {
  return (
    <div className="position-relative scrolling-bg text-white">
      <div className="bg-secondary bg-opacity-50 h-100 p-5 text-center">
        <h1 className="display-4 fw-bold mb-3 text-uppercase">Drive the Dream. Own the Moment.</h1>
        <h2 className="h3 mb-4 fw-semibold text-warning">Grand Opening Special Offer!</h2>
        <h6 className="mb-4 fst-italic">
          Call us now to book! Unlock the Road to Unforgettable Adventures.
        </h6>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Link href="/carpage">
            <p className="btn btn-primary btn-lg px-4 text-white text-decoration-none">Explore More</p>
          </Link>
          <a 
                            className="d-flex justify-content-center text-decoration-none"
                            href={`https://wa.me/917056715364?text=Hey%20Mukesh%2C%20I%20want%20to%20get%20information%20about%20some%20cars.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
            <p className="btn btn-outline-light btn-lg  px-4  text-decoration-none">Contact us</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Scrolldiv