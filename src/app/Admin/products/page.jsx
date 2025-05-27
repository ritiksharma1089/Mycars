"use client"
import Admincar from '@/app/compoments/extrass/Admincar';
import { Carcontext } from '@/app/Providers/CarProviders'
import React, { useContext, useEffect } from 'react'

const Products = () => {

  const {admindata } = useContext(Carcontext);

  
    useEffect(() => {
      console.log("this is all data#####################################", admindata);
    }, [admindata]);
  
    if(!admindata || admindata.length ==0){
      return <h1> Loading</h1>
    }


  return (
    <div>Products

<div className='row'>


      {admindata.map((item)=>(

        <div key={item.id} className='col-12 col-md-6 col-lg-4'>
        <Admincar item={item} />
          </div>
      ))}
      </div>
    </div>
  )
}

export default Products