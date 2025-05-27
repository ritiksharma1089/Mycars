import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="container "></div>
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                        <a
                            href="/"
                            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
                            aria-label="Bootstrap"
                        >
                            <Image src='/logo.jpeg' alt="logo" width={80} height={80}/> <span className='card title h4'>My Cars</span>
                            
                        </a>
                        <p className="text-body-secondary">© 2025</p>
                    </div>
                    <div className="col mb-3"></div>
                    <div className="col mb-3 mx-auto ">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link href="/" className="nav-link p-0 text-body-secondary ">Home</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link href="/carpage" className="nav-link p-0 text-body-secondary">Cars</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link href="/aboutus" className="nav-link p-0 text-body-secondary">About us</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link href="/addcar" className="nav-link p-0 text-body-secondary">Faqs</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link href="/" className="nav-link p-0 text-body-secondary">About</Link>
                            </li>
                        </ul>
                    </div>  
                    <div className="col mb-3 mx-auto ">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link href="/" className="nav-link p-0 text-body-secondary">Home</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link href="/carpage" className="nav-link p-0 text-body-secondary">Cars</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link href="/aboutus" className="nav-link p-0 text-body-secondary">About us</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link href="/addcar" className="nav-link p-0 text-body-secondary">Faqs</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link href="/" className="nav-link p-0 text-body-secondary">About</Link>
                            </li>
                        </ul>
                    </div>  
                    <div className="col mb-3 mx-auto ">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link href="/" className="nav-link p-0 text-body-secondary">Home</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link href="/carpage" className="nav-link p-0 text-body-secondary">Cars</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link href="/aboutus" className="nav-link p-0 text-body-secondary">About us</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link href="/addcar" className="nav-link p-0 text-body-secondary">Faqs</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link href="/" className="nav-link p-0 text-body-secondary">About</Link>
                            </li>
                        </ul>
                    </div>  
                    
                   
                </footer>

              <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-body-secondary">© 2025 Company, Inc</p>
                    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" aria-label="Bootstrap">
                        <svg className="bi me-2" width="40" height="32" aria-hidden="true">
                            <use xlinkHref="#bootstrap"></use>
                        </svg>
                    </a>
                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                    </ul>
                </footer>
            </div>
            </div>

          
       
    );
}

export default Footer