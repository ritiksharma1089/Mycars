
import Caridpagepic from '@/app/compoments/extrass/caridpagepic';
import Caroverview from '@/app/compoments/extrass/Caroverview';
import CarPageform from '@/app/compoments/extrass/CarPageform';
import Whyus from '@/app/compoments/extrass/Whyus';
import Chooseus from '@/app/compoments/Whychosseus/chooseus';
import React from 'react'


const fetchslug = async(slug)=>{
 const res = await fetch(`http://localhost:3000/api/Cars/${slug}`);
 const data = await res.json();
 return data;
}


const page = async({params}) => {
    const { slug } =await params;
    console.log(slug);

  // Fetch blog post data based on slug
//   const res = await fetch(`http://localhost:3000/api/Cars/${slug}`);
//   // console.log(res);
// const data = await res.json();
const data = await fetchslug(slug)
console.log(data);
if(!data || data.length ==0){
  return <div> laoding..........</div>
}

const car = data[0];
  
  return (
    <div>
        {/* {data.titile} */}



        
<div className="container col-xxl-8 px-2 py-5">
  <div className="row flex-lg-row align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-7">
      <img
        src={car.img || "/fortuner.png"}
        className="d-block mx-lg-auto img-fluid"
        alt="Bootstrap Themes"
        width="600"
        height="500"
        loading="lazy"
      />
    </div>
    <div className="col-lg-5">
      <CarPageform item={car}/>
    
    </div>
  </div>
</div>


      <Caroverview item={car}/>

      <Caridpagepic car={car}/>



         <div className="container my-4 h-75">
        <div className=" shadow">
            <div className=" mx-auto">
                <p>{car.titile}</p>

                <h3> {car.desc}...</h3>
                
            </div>
        </div>
    </div>


       {/* <Whyus/> */}
       <Chooseus/>

         
    </div>
  )
}

export default page