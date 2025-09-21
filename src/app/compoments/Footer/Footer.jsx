import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-light border-top mt-5">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-4 text-center text-md-start">
          {/* Brand */}
          <div className="col mb-4 d-flex flex-column align-items-center align-items-md-start">
            <Link
              href="/"
              className="d-flex align-items-center mb-3 text-decoration-none"
            >
              <Image src="/logo.jpeg" alt="logo" width={60} height={60} />
              <span className="h4 ms-2 mb-0 fw-bold">My Cars</span>
            </Link>
            <p className="text-muted small">© 2025 My Cars</p>
          </div>

          {/* Sections */}
          <div className="col mb-4">
            <h5 className="fw-bold">Explore</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="/" className="nav-link p-0 text-muted">Home</Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/carpage" className="nav-link p-0 text-muted">Cars</Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/aboutus" className="nav-link p-0 text-muted">About Us</Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/addcar" className="nav-link p-0 text-muted">Add Car</Link>
              </li>
            </ul>
          </div>

          <div className="col mb-4">
            <h5 className="fw-bold">Support</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="/faqs" className="nav-link p-0 text-muted">FAQs</Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/contact" className="nav-link p-0 text-muted">Contact</Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/terms" className="nav-link p-0 text-muted">Terms</Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/privacy" className="nav-link p-0 text-muted">Privacy</Link>
              </li>
            </ul>
          </div>

          <div className="col mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-3">
              <li>
                <a href="#" className="text-muted"><i className="bi bi-facebook fs-5"></i></a>
              </li>
              <li>
                <a href="#" className="text-muted"><i className="bi bi-twitter fs-5"></i></a>
              </li>
              <li>
                <a href="#" className="text-muted"><i className="bi bi-instagram fs-5"></i></a>
              </li>
              <li>
                <a href="#" className="text-muted"><i className="bi bi-linkedin fs-5"></i></a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 mt-4 border-top">
          <p className="mb-2 mb-md-0 text-muted small">
            © 2025 My Cars, Inc. All rights reserved.
          </p>
          <ul className="nav">
            <li className="nav-item">
              <Link href="/" className="nav-link px-2 text-muted small">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/features" className="nav-link px-2 text-muted small">Features</Link>
            </li>
            <li className="nav-item">
              <Link href="/pricing" className="nav-link px-2 text-muted small">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link href="/faqs" className="nav-link px-2 text-muted small">FAQs</Link>
            </li>
            <li className="nav-item">
              <Link href="/aboutus" className="nav-link px-2 text-muted small">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
