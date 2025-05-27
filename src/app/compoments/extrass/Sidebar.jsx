import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
   
      



    <div className="position-sticky top-0 vh-100 overflow-auto bg-light" style={{ width: "280px", maxWidth:"280px" , maxHeight:"400px"}}>
    <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    
    
    </Link>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link href="/" className="nav-link link-dark" aria-current="page">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </Link>
      </li>
      
      <li>
        <Link href="/Admin/order" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
          Orders
        </Link>
      </li>
      <li>
        <Link href="/Admin/products" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
          Products
        </Link>
      </li>
      <li>
        <Link href="/Admin/user" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
          Customers
        </Link>
      </li>
    </ul>
    <hr />
 
  </div>
   
  )
}

export default Sidebar