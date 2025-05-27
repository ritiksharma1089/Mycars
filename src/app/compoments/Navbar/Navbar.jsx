"use client"
import { signIn, signOut, useSession } from 'next-auth/react';

import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    const {data,status}= useSession()
    if(status==="loading"){
        return <div> Loading</div>
        
       

  }
  
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Left: Logo and App Name */}
                <Link className="navbar-brand d-flex align-items-center" href="/">
                    <img
                        src="/logo.jpeg"
                        width="50"
                        height="33"
                        className="d-inline-block align-top "
                        alt="Bootstrap"
                    />
                    MyCars
                </Link>
                
                {/* Center: Navigation Links */}
                <div className="mx-auto order-0">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 flex-row gap-3">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/carpage">
                                Cars
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/aboutus">
                                About us
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Actions
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" href="addcar">
                                        Add Car  for sale
                                    </Link>
                                </li>

                                {status=="authenticated"? ( <li><Link
  href={data.user?.isAdmin ? "/Admin" : "#"}
  className={`dropdown-item ${!data.isAdmin ? "disabled-link" : ""}`}
  onClick={(e) => {
    if (!data.user?.isAdmin) {
      e.preventDefault(); // Prevent navigation if not admin
    }
  }}
  aria-disabled={!data.user?.isAdmin}
>
  More Actions
</Link>

                                      
                                </li>): <></>}
                                
                               
                                
                            </ul>
                        </li>
                       
                    </ul>
                </div>
                {/* Right: Logout Button */}
                <div className="d-flex ms-auto">
                 
                    {status === "authenticated" ? (

                        <div>
                            <button className="btn btn-success" type="button" onClick={() => signOut()}>
                                Logout
                            </button>
                            <Link href={"/profile"} className="btn btn-success mx-3 opacity-50 " type="button" style={{ borderRadius: "70%" }}>
                                {/* Use <img> instead of <Image> for external URLs or configure next.config.js */}
                                {data.user?.image ? (
                                    <img
                                        src={data.user.image || "/profile.jpg"}
                                        alt="profile"
                                        width={30}
                                        height={30}
                                        style={{ borderRadius: "50%" }}
                                    />
                                ) : (
                                    <span>No Image</span>
                                )}
                            </Link>
                        </div>
                    
                    ) : (
                        <button className="btn btn-success" type="button" onClick={() => signIn("google")}>
                            Login
                        </button>
                    )}

                </div>
            </div>
        </nav>
    );
};



export default Navbar