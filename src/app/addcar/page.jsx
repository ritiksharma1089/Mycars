"use client";
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";


const Addcar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [cardata, setCardata] = useState({
    title: "",
    desc: "",
    img: "",
    views: "",
    type: "petrol",
    othertype: "",
    userEmail: "",
    price: "",
    company: "",
    Reg_year: "",
    driven: "",
    ownership: "",
    spare_key: "",
    Insurance: "",
    Reg_num: "",
    Dealer_choice: "",
    model: ""
  });
  const [carupload,setcarupload] = useState(false);

  const [carimage, setcarimage]= useState(null);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      setCardata(prev => ({ ...prev, userEmail: session.user.email }));
    }
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, session, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCardata(prev => ({ ...prev, [id]: value }));
  };



  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Car data:", cardata);
    if (!cardata.img || !carupload) {
      alert("please upload image");
      return;
    }

    try {
      const res = await fetch('/api/addcar', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardata),
      });

      if (res.ok) {
        console.log("done added car data");
        router.push("/")
        
        // Optionally, redirect or reset form here
      } else {
        console.error("Failed to add car data");
      }
    } catch (err) {
      console.log("frontend add cardata error", err);
    }
  };

  

  const handleUpload = async () => {
  if (!carimage) {
    alert("Please select an image first");
    return;
  }

  const formData = new FormData();
  formData.append("file", carimage);
  formData.append("upload_preset", "my_present"); // change to your actual preset name

  try {
    const res = await fetch("https://api.cloudinary.com/v1_1/ddkxg84xp/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      console.log("Cloudinary URL:", data.secure_url);
      setCardata(prev => ({ ...prev, img: data.secure_url }));
      setcarupload(true);
      alert("car pic uploaded successfully")
    } else {
      console.error("Upload failed:", data);
      alert("Upload failed: " + (data.error?.message || "Unknown error"));
    }
  } catch (err) {
    console.error("Upload error:", err);
    alert("Upload error: " + err.message);
  }
};


  return (
    <div className='container mt-4'>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="img">Images</label>
          <input
            type="file"
            className="form-control"
            id="img"
            accept="image/*"
            onChange={(e) => setcarimage(e.target.files[0])}
            required
          />
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

        {/* <div className="form-group">
            <label htmlFor="Dealer_choice">Dealer Choice</label>
            <input
              type="text"
              className="form-control"
              id="Dealer_choice"
              placeholder="Enter dealer choice"
              value={cardata.Dealer_choice}
              onChange={handleChange}
              required
            />
          </div> */}

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

        <button type="submit" className="btn btn-primary mt-3 " disabled={!carupload}>Submit</button>
      </form>


      <button className='btn btn-secondary mt-3' onClick={handleUpload} disabled={carupload}> upload Image</button>
    </div>
  );
};

export default Addcar;
