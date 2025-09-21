"use client"
import { useContext, useEffect, useState } from "react";
import Card from "../compoments/Card/Card";
import Filter from "../compoments/extrass/filter";
import { Carcontext } from '@/app/Providers/CarProviders'

const page = () => {



// const res = await fetch('http://localhost:3000/api/getcars');
// const data = await res.json();


  const { allData } = useContext(Carcontext);
   const [searchTerm, setSearchTerm] = useState("");
   

useEffect(() => {
    console.log("this is all data#####################################", allData);
  }, [allData]);

 
      console.log(allData);
    if(!allData || allData.length ==0){
      return <div>loading</div>
    }




     const filteredCars = allData.filter((item) =>
    item.titile.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return (
      <div className="container">

      {/* <Navbar/> */}

          <div className="text-center h2 mb-4">All Cars We Have</div>

      {/* 🔍 Search Bar */}
      <div className="row mb-4">
        <div className="col-12 col-md-6 mx-auto">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Search for a car (e.g., Swift, Honda City)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>


<div className="row">


      {filteredCars.map((item)=>(
        <div className="col-12 col-md-6 col-lg-4 my-3" key={item.id}> 
        <Card item={item}/>
          
          </div>
      ))}
      </div>
      
      {/* {allData[0].titile} this is title */}

      {/* <Footer/> */}
      <Filter/>

    
    </div>
  )
} 

export default page