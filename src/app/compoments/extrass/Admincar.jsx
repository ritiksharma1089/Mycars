"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const Admincar = ({item}) => {
// Assuming 'item' is passed as a prop to Admincar
// Add 'item' to the function parameter
// Example: const Admincar = ({ item }) => { ... }

 const handleEditClick = () => {
    setShowForm(true);
  };
  

const [showForm, setShowForm] = useState(false);
const [carid, setcarid]= useState(item.id);
  


  
    const [cardata, setCardata] = useState({
        id:item.id,
      title: item.titile,
      desc: item.desc,
      img: item.img,
      views: item.views,
      type: item.type,
      othertype: item.othertype,
      userEmail: item.userEmail,
      price: item.price,
      company: item.company,
      Reg_year: item.Reg_year,
      driven: item.driven,
      ownership: item.ownership,
      spare_key: item.spare_key,
      Insurance: item.Insurance,
      Reg_num: item.Reg_num,
      Dealer_choice: item.Dealer_choice,
      model: item.model,
      public:item.public,
      Emi:item.Emi,
      othercharges:item.othercharges
    });


//    const handleSave = () => {
//     // You can send the data to the server here
//     console.log('Saved:' , cardata);
//     setShowForm(false);
//   };


   const handleChange = (e) => {
    const { id, value } = e.target;
    setCardata(prev => ({ ...prev, [id]: value }));
  };

    const handleEditClick1 = () => {
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
  };

  const handleSubmit = async () => {
    
    try {
      const res = await fetch('/api/addcar', {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardata),
      });

      if (res.ok) {
        console.log("done added car data");
       setShowForm(false);
        
        // Optionally, redirect or reset form here
      } else {
        console.error("Failed to add car data");
      }
    } catch (err) {
      console.log("frontend edit cardata error", err);
    }
  };

  const Deltecar = async () => {
    
    try {
      const res = await fetch('/api/addcar', {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carid),
      });

      if (res.ok) {
        console.log("done added car data");
       setShowForm(false);
        
        // Optionally, redirect or reset form here
      } else {
        console.error("Failed to add car data");
      }
    } catch (err) {
      console.log("frontend edit cardata error", err);
    }
  };



return (
    <div>
        <div className="card" style={{ width: "18rem" }}>
            <img
                src={item.img || "/fortuner.png"}
                className="card-img-top"
                alt={item.titile}
                style={{ maxHeight: "250px", minHeight: "180px" }}
            />
            <div className="card-body">
                <h5 className="card-title text-center">{item.titile}</h5>
                <p className="card-text"></p>
            </div>
            <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">Model - {item.Reg_year}</li>
                <li className="list-group-item">titile - {item.titile}</li>
                <li className="list-group-item">Price - {item.price}(Rs)</li>
                <li className="list-group-item">desc - {item.desc}</li>
                <li className="list-group-item">type - {item.type}</li>
                <li className="list-group-item">othertype - {item.othertype}</li>
                <li className="list-group-item">company - {item.company}</li>
                <li className="list-group-item">Reg_year - {item.Reg_year}</li>
                <li className="list-group-item">ownership - {item.ownership}</li>
                <li className="list-group-item">
                    spare_key - {String(item.spare_key)}
                </li>
                <li className="list-group-item">Insurance - {item.Insurance}</li>
                <li className="list-group-item">Dealer_choice - {item.Dealer_choice}</li>
                <li className="list-group-item">contact - {item.contact}</li>
                <li className="list-group-item">Emi - {item.Emi}</li>
                <li className="list-group-item">othercharges - {item.othercharges}</li>
                <li className="btn btn-outline-success">
                    public - {String(item.public)}
                </li>
            </ul>
            <div className="card-body d-flex justify-content-between">
                <button  className="btn btn-primary btn-sm w-100 me-2"  onClick={handleEditClick1}
                >
                        Edit
                </button>
                <button  className="btn btn-danger btn-sm w-100 me-2"  onClick={Deltecar} 
                >
                        Delete
                </button>
               
            </div>
        </div>



         {showForm && (
        <div className="edit-form p-3 bg-light shadow-lg border rounded shadow position-absolute top-0 start-50 translate-middle-x mt-5 w-75 mx-auto" style={{ zIndex: 1000, }}>
          <h6>Edit Info</h6>
         





        <div className="form-group">
          <label htmlFor="title">Car Name</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter car name"
            value={cardata.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="desc">Car Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter description"
            value={cardata.desc}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Fuel Type</label>
          <select
            id="type"
            name="type"
            className='form-control'
            onChange={handleChange}
            value={cardata.type}
            required
          >
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="cng">CNG</option>
            <option value="Electric">Electric</option>
            <option value="petrol-cng">Petrol + CNG</option>
            <option value="petrol-diesel">Petrol + Diesel</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="type">Car Type</label>
          <select
            id="othertype"
            name="type"
            className='form-control'
            onChange={handleChange}
            value={cardata.type}
            required
          >
            <option value="Manual">Manual</option>
            <option value="Autamatic">Automatic</option>
          
          </select>
        </div>

      

       

        <div className="form-group">
          <label htmlFor="views">Views</label>
          <input
            type="numbers"
            className="form-control"
            id="views"
            placeholder="Enter views count"
            value={cardata.views}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter price"
            value={cardata.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            className="form-control"
            id="company"
            placeholder="Enter company"
            value={cardata.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Reg_year">Registration Year</label>
          <input
            type="number"
            className="form-control"
            id="Reg_year"
            placeholder="Enter registration year"
            value={cardata.Reg_year}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="driven">Driven (km)</label>
          <input
            type="number"
            className="form-control"
            id="driven"
            placeholder="Enter driven kilometers"
            value={cardata.driven}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ownership">Ownership</label>
          <input
            type="number"
            className="form-control"
            id="ownership"
            placeholder="Enter ownership"
            value={cardata.ownership}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="spare_key">Spare Key</label>

          <label className="form-control">
            <input
              type="radio"
              id="spare_key"
              name="spare_key"
              value="true"
              checked={cardata.spare_key === "true"}
              onChange={handleChange}
              required
            /> YES
          </label><br />

          <label className="form-control">
            <input
              type="radio"
              id="spare_key"
              name="spare_key"
              value="false"
              checked={cardata.spare_key === "false"}
              onChange={handleChange}
              required
            /> NO
          </label><br />
        </div>

        <div className="form-group">
          <label htmlFor="Insurance">Insurance</label>
          <input
            type="text"
            className="form-control"
            id="Insurance"
            placeholder="Enter insurance info"
            value={cardata.Insurance}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Reg_num">Registration Number</label>
          <input
            type="text"
            className="form-control"
            id="Reg_num"
            placeholder="Enter registration number"
            value={cardata.Reg_num}
            onChange={handleChange}
            required
          />
        </div>

       

        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input
            type="text"
            className="form-control"
            id="model"
            placeholder="Enter model"
            value={cardata.model}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group"></div>




          <div className="form-group">
          <label htmlFor="Emi">Emi</label>
          <input
            type="number"
            className="form-control"
            id="Emi"
            placeholder="Enter Emi"
            value={cardata.Emi}
            onChange={handleChange}
            required
          />
        </div>

          <div className="form-group">
          <label htmlFor="Emi">othercharges</label>
          <input
            type="othercharges"
            className="form-control"
            id="othercharges"
            placeholder="Enter Emi"
            value={cardata.othercharges}
            onChange={handleChange}
            required
          />
        </div>


       
     

        <div className="form-group">
          <label htmlFor="public">public</label>

          <label className="form-control">
            <input
              type="radio"
              id="public"
              name="public"
              value="true"
              checked={cardata.public === "true"}
              onChange={handleChange}
              required
            /> YES
          </label><br />

          <label className="form-control">
            <input
              type="radio"
              id="public"
              name="public"
              value="false"
              checked={cardata.public === "false"}
              onChange={handleChange}
              required
            /> NO
          </label><br />
        </div>











          <button className="btn btn-primary btn-sm me-2" onClick={handleSubmit}>
            Save
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </div>
      )}
    </div>
);
}

export default Admincar