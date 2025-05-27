import React from 'react'
import Commentcard from './Commentcard'

const commentss =[
  {
    "name": "Rahul Verma",
    "comment": "Great experience buying a used car from Mukesh Sharma. Honest, transparent, and helpful throughout the entire process. Highly recommended!"
  },
  {
    "name": "Sneha Kapoor",
    "comment": "Mukesh Sharma is a trustworthy dealer who truly cares about customer satisfaction. The car was exactly as described—clean, well-maintained, and priced fairly."
  },
  {
    "name": "Amit Singh",
    "comment": "Smooth transaction and excellent service! Mukesh Sharma helped me find the perfect car within my budget. Would definitely return for future purchases."
  },
  {
    "name": "Priya Desai",
    "comment": "If you're looking for a reliable second-hand car, Mukesh Sharma is the guy to visit. No pressure sales and very knowledgeable about the vehicles."
  },
  {
    "name": "Karan Mehta",
    "comment": "Five stars for Mukesh Sharma! His dealership offers great value and top-notch customer care. I'm very happy with my purchase."
  },
  {
    "name": "Anjali Rana",
    "comment": "Very professional and genuine. Mukesh Sharma made the buying experience simple and stress-free. Highly recommend him to anyone looking for a used car."
  },
  {
    "name": "Vikram Joshi",
    "comment": "Excellent inventory and honest advice. Mukesh Sharma was upfront about everything and helped me pick a car that suits my needs perfectly."
  },
  {
    "name": "Nisha Bansal",
    "comment": "Mukesh Sharma made the process of buying a used car quick and easy. The documentation was clear and the car was in excellent shape."
  },
  {
    "name": "Rohan Sood",
    "comment": "A dependable and honest dealer. Mukesh Sharma provided all the details upfront and answered all my queries patiently."
  },
  {
    "name": "Deepika Arora",
    "comment": "Absolutely loved the experience. Mukesh Sharma ensured the car was thoroughly inspected before delivery. Great service!"
  },
  {
    "name": "Manoj Thakur",
    "comment": "The best second-hand car dealer I’ve come across. Mukesh Sharma was fair with the pricing and gave me a great deal."
  },
  {
    "name": "Sakshi Malhotra",
    "comment": "Friendly and professional! Mukesh Sharma made sure the entire process was smooth and hassle-free."
  },
  {
    "name": "Arjun Khanna",
    "comment": "The car I bought from Mukesh Sharma runs like new. His honesty and attention to detail made all the difference."
  },
  {
    "name": "Tanya Chauhan",
    "comment": "I felt completely confident buying from Mukesh Sharma. He provided service history, inspection reports, and answered all my questions."
  },
  {
    "name": "Neeraj Bhatia",
    "comment": "Bought my first car here and couldn't be happier. Mukesh Sharma guided me well and didn’t push me into anything."
  },
  {
    "name": "Divya Narang",
    "comment": "Professional, polite, and very helpful. Mukesh Sharma went the extra mile to ensure I got the right car for my needs."
  }
]


const Comment = () => {
  return (

    <div>

        <div className='h3 text-center'> Our Top Reviews</div>

      <div className='  h-100 p-5 text-center  '>

          
          <div id="carouselExampleRide1" className="carousel slide  " data-bs-ride="true">
  <div className="carousel-inner">
     <div className="carousel-item active">
            <div className='row'>

                {commentss.slice(0,8).map((item)=>(
                    <div key={item.name} className='shadow-sm col-6 col-md-4 col-lg-3 my-2' > 
                    <Commentcard item={item}/>
                    </div>
                ))}


            </div>
    </div>
    
     <div className="carousel-item active">
            <div className='row'>

                {commentss.slice(9,16).map((item)=>(
                    <div key={item.name} className='shadow-sm col-6 col-md-4 col-lg-3 my-2' > 
                    <Commentcard item={item}/>
                    </div>
                ))}


            </div>
    </div>
   
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide1" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide1" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
                </div>
  )
}

export default Comment