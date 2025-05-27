"use client"
import { useContext, useEffect } from "react";
import Card from "../compoments/Card/Card";
import Filter from "../compoments/extrass/filter";
import { Carcontext } from '@/app/Providers/CarProviders'

const page = () => {



// const res = await fetch('http://localhost:3000/api/getcars');
// const data = await res.json();


  const { allData } = useContext(Carcontext);
  

useEffect(() => {
    console.log("this is all data#####################################", allData);
  }, [allData]);

 
      console.log(allData);
    if(!allData || allData.length ==0){
      return <div>loading</div>
    }
    return (
      <div className="container">
      <Filter/>

      {/* <Navbar/> */}

          <div className="text-center h2"> All Cars we have</div>
     


<div className="row">


      {allData.map((item)=>(
        <div className="col-12 col-md-6 col-lg-4 my-3" key={item.id}> 
        <Card item={item}/>
          
          </div>
      ))}
      </div>
      
      {allData[0].titile} this is title

      {/* <Footer/> */}

    
    </div>
  )
}

export default page