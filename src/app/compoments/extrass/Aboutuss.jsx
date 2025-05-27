import React from 'react'

const Aboutuss = () => {
  return (
    <div>
        <div className="container my-5">
            <div
                className="row align-items-center rounded-4 shadow-lg p-4"
                style={{
                    background: 'rgba(184, 188, 189, 0.5)',
                    backdropFilter: 'blur(8px)',
                }}
            >
                <div className="col-md-7 mb-4 mb-md-0">
                    <h2 className="fw-bold mb-3">Welcome to Our Car Center!</h2>
                    <p className="lead">
                        Hello! I'm Mukesh, the proud owner of MyCar. With years of experience and a passion for cars, I strive to provide the best service and care for your vehicle. Our mission is to ensure your journey is always smooth and safe.
                    </p>
                    <p>
                        Thank you for trusting us. We look forward to serving you and your car with dedication and expertise!
                    </p>
                </div>
                <div className="col-md-5 text-center">
                    <img
                        src="/myimg.jpg"
                        alt="Owner Mukesh"
                        className="img-fluid rounded-circle shadow"
                        style={{ maxWidth: '250px', border: '6px solidrgb(75, 82, 87)', background: '#e6f7ff' }}
                    />
                    <div className="mt-3 fw-semibold">Mukesh Sharma</div>
                    <div className="text-muted">Owner &amp; Founder</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutuss