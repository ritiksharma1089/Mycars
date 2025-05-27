"use client"
import React, { useContext, useEffect } from 'react'
import Card from '../Card/Card'

import { Carcontext } from '@/app/Providers/CarProviders'

const CardList = () => {

  const { allData } = useContext(Carcontext);

  useEffect(() => {
    console.log("this is all data#####################################", allData);
  }, [allData]);

  if(!allData || allData.length ==0){
    return <h1> Loading</h1>
  }

  return (
    <div >

<div className="container mx-auto my-4">
    <h1 className='text-center'>Our Best Selling Cars</h1>
  <div className="row">




    {(Array.isArray(allData) ? allData.slice(0, 4) : []).map((item) => (

      <div className='col-10 col-md-6 col-lg-4 mx-auto my-3' key={item.id}>
        <Card item={item} />
      </div>
    ))}
    
   
  
   

   
   
  </div>
</div>
    </div>
  )
}

export default CardList