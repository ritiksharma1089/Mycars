"use client";

import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./CarPredictor.css"; // custom css

export default function CarPricePredictor() {
  const carNames = [
    "Audi A3 Cabriolet", "Audi A4 1.8", "Audi A4 2.0", "Audi A6 2.0",
    "Audi A8", "Audi Q3 2.0", "Audi Q5 2.0", "Audi Q7", "BMW 3 Series",
    "BMW 5 Series", "BMW 7 Series", "BMW X1", "BMW X1 sDrive20d",
    "BMW X1 xDrive20d", "Chevrolet Beat", "Chevrolet Beat Diesel",
    "Chevrolet Beat LS", "Chevrolet Beat LT", "Chevrolet Beat PS",
    "Chevrolet Cruze LTZ", "Chevrolet Enjoy", "Chevrolet Enjoy 1.4",
    "Chevrolet Sail 1.2", "Chevrolet Sail UVA", "Chevrolet Spark",
    "Chevrolet Spark 1.0", "Chevrolet Spark LS", "Chevrolet Spark LT",
    "Chevrolet Tavera LS", "Chevrolet Tavera Neo", "Datsun GO T",
    "Datsun Go Plus", "Datsun Redi GO", "Fiat Linea Emotion",
    "Fiat Petra ELX", "Fiat Punto Emotion", "Force Motors Force",
    "Force Motors One", "Ford EcoSport", "Ford EcoSport Ambiente",
    "Ford EcoSport Titanium", "Ford EcoSport Trend", "Ford Endeavor 4x4",
    "Ford Fiesta", "Ford Fiesta SXi", "Ford Figo", "Ford Figo Diesel",
    "Ford Figo Duratorq", "Ford Figo Petrol", "Ford Fusion 1.4",
    "Ford Ikon 1.3", "Ford Ikon 1.6", "Hindustan Motors Ambassador",
    "Honda Accord", "Honda Amaze", "Honda Amaze 1.2", "Honda Amaze 1.5",
    "Honda Brio", "Honda Brio V", "Honda Brio VX", "Honda City",
    "Honda City 1.5", "Honda City SV", "Honda City VX", "Honda City ZX",
    "Honda Jazz S", "Honda Jazz VX", "Honda Mobilio", "Honda Mobilio S",
    "Honda WR V", "Hyundai Accent", "Hyundai Accent Executive",
    "Hyundai Accent GLE", "Hyundai Accent GLX", "Hyundai Creta",
    "Hyundai Creta 1.6", "Hyundai Elantra 1.8", "Hyundai Elantra SX",
    "Hyundai Elite i20", "Hyundai Eon", "Hyundai Eon D", "Hyundai Eon Era",
    "Hyundai Eon Magna", "Hyundai Eon Sportz", "Hyundai Fluidic Verna",
    "Hyundai Getz", "Hyundai Getz GLE", "Hyundai Getz Prime",
    "Hyundai Grand i10", "Hyundai Santro", "Hyundai Santro AE",
    "Hyundai Santro Xing", "Hyundai Sonata Transform", "Hyundai Verna",
    "Hyundai Verna 1.4", "Hyundai Verna 1.6", "Hyundai Verna Fluidic",
    "Hyundai Verna Transform", "Hyundai Verna VGT", "Hyundai Xcent Base",
    "Hyundai Xcent SX", "Hyundai i10", "Hyundai i10 Era",
    "Hyundai i10 Magna", "Hyundai i10 Sportz", "Hyundai i20",
    "Hyundai i20 Active", "Hyundai i20 Asta", "Hyundai i20 Magna",
    "Hyundai i20 Select", "Hyundai i20 Sportz", "Jaguar XE XE",
    "Jaguar XF 2.2", "Jeep Wrangler Unlimited", "Land Rover Freelander",
    "Mahindra Bolero DI", "Mahindra Bolero Power", "Mahindra Bolero SLE",
    "Mahindra Jeep CL550", "Mahindra Jeep MM", "Mahindra KUV100",
    "Mahindra KUV100 K8", "Mahindra Logan", "Mahindra Logan Diesel",
    "Mahindra Quanto C4", "Mahindra Quanto C8", "Mahindra Scorpio",
    "Mahindra Scorpio 2.6", "Mahindra Scorpio LX", "Mahindra Scorpio S10",
    "Mahindra Scorpio S4", "Mahindra Scorpio SLE", "Mahindra Scorpio SLX",
    "Mahindra Scorpio VLX", "Mahindra Scorpio Vlx", "Mahindra Scorpio W",
    "Mahindra TUV300 T4", "Mahindra TUV300 T8", "Mahindra Thar CRDe",
    "Mahindra XUV500", "Mahindra XUV500 W10", "Mahindra XUV500 W6",
    "Mahindra XUV500 W8", "Mahindra Xylo D2", "Mahindra Xylo E4",
    "Mahindra Xylo E8", "Maruti Suzuki 800", "Maruti Suzuki A",
    "Maruti Suzuki Alto", "Maruti Suzuki Baleno", "Maruti Suzuki Celerio",
    "Maruti Suzuki Ciaz", "Maruti Suzuki Dzire", "Maruti Suzuki Eeco",
    "Maruti Suzuki Ertiga", "Maruti Suzuki Esteem",
    "Maruti Suzuki Estilo", "Maruti Suzuki Maruti", "Maruti Suzuki Omni",
    "Maruti Suzuki Ritz", "Maruti Suzuki S", "Maruti Suzuki SX4",
    "Maruti Suzuki Stingray", "Maruti Suzuki Swift", "Maruti Suzuki Versa",
    "Maruti Suzuki Vitara", "Maruti Suzuki Wagon", "Maruti Suzuki Zen",
    "Mercedes Benz A", "Mercedes Benz B", "Mercedes Benz C",
    "Mercedes Benz GLA", "Mini Cooper S", "Mitsubishi Lancer 1.8",
    "Mitsubishi Pajero Sport", "Nissan Micra XL", "Nissan Micra XV",
    "Nissan Sunny", "Nissan Sunny XL", "Nissan Terrano XL",
    "Nissan X Trail", "Renault Duster", "Renault Duster 110",
    "Renault Duster 110PS", "Renault Duster 85", "Renault Duster 85PS",
    "Renault Duster RxL", "Renault Kwid", "Renault Kwid 1.0",
    "Renault Kwid RXT", "Renault Lodgy 85", "Renault Scala RxL",
    "Skoda Fabia", "Skoda Fabia 1.2L", "Skoda Fabia Classic",
    "Skoda Laura", "Skoda Octavia Classic", "Skoda Rapid Elegance",
    "Skoda Superb 1.8", "Skoda Yeti Ambition", "Tata Aria Pleasure",
    "Tata Bolt XM", "Tata Indica", "Tata Indica V2", "Tata Indica eV2",
    "Tata Indigo CS", "Tata Indigo LS", "Tata Indigo LX",
    "Tata Indigo Marina", "Tata Indigo eCS", "Tata Manza",
    "Tata Manza Aqua", "Tata Manza Aura", "Tata Manza ELAN", "Tata Nano",
    "Tata Nano Cx", "Tata Nano GenX", "Tata Nano LX", "Tata Nano Lx",
    "Tata Sumo Gold", "Tata Sumo Grande", "Tata Sumo Victa",
    "Tata Tiago Revotorq", "Tata Tiago Revotron", "Tata Tigor Revotron",
    "Tata Venture EX", "Tata Vista Quadrajet", "Tata Zest Quadrajet",
    "Tata Zest XE", "Tata Zest XM", "Toyota Corolla",
    "Toyota Corolla Altis", "Toyota Corolla H2", "Toyota Etios",
    "Toyota Etios G", "Toyota Etios GD", "Toyota Etios Liva",
    "Toyota Fortuner", "Toyota Fortuner 3.0", "Toyota Innova 2.0",
    "Toyota Innova 2.5", "Toyota Qualis", "Volkswagen Jetta Comfortline",
    "Volkswagen Jetta Highline", "Volkswagen Passat Diesel",
    "Volkswagen Polo", "Volkswagen Polo Comfortline",
    "Volkswagen Polo Highline", "Volkswagen Polo Highline1.2L",
    "Volkswagen Polo Trendline", "Volkswagen Vento Comfortline",
    "Volkswagen Vento Highline", "Volkswagen Vento Konekt",
    "Volvo S80 Summum",
  ];

  const companies = [
    "Audi", "BMW", "Chevrolet", "Datsun", "Fiat", "Force", "Ford",
    "Hindustan", "Honda", "Hyundai", "Jaguar", "Jeep", "Land", "Mahindra",
    "Maruti", "Mercedes", "Mini", "Mitsubishi", "Nissan", "Renault",
    "Skoda", "Tata", "Toyota", "Volkswagen", "Volvo",
  ];

  const fuelTypes = ["Diesel", "LPG", "Petrol"];

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    year: "",
    kms_driven: "",
    fuel_type: "",
    unnamed :0,
  });
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  setPrediction(null);

  try {
    const payload = {
  car_model: formData.name.trim(),  // 👈 match backend
  company: formData.company.trim(),
  year: Number(formData.year),
  kms_driven: Number(formData.kms_driven),
  fuel_type: formData.fuel_type.trim(),
};


    const res = await fetch("https://carbackend-production-1de2.up.railway.app/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error(`Server error: ${res.status}`);

    const data = await res.json();

    // Some backends return { prediction: [value] } instead of plain value
    // const predictedValue = Array.isArray(data.prediction)
    //   ? data.prediction[0]
    //   : data.prediction;

    setPrediction(data.predicted_price);
    console.log(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container-fluid bg-light py-5 min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow-lg p-4 form-card">
        <h2 className="text-center mb-4">🚗 Find Your Car Value</h2>
        <form onSubmit={handleSubmit}>
          {/* Car Name */}
          <div className="mb-3">
            <label className="form-label">Car Name</label>
            <select
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Select Car Name</option>
              {carNames.map((car, i) => (
                <option key={i} value={car}>
                  {car}
                </option>
              ))}
            </select>
          </div>

          {/* Company */}
          <div className="mb-3">
            <label className="form-label">Company</label>
            <select
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Select Company</option>
              {companies.map((comp, i) => (
                <option key={i} value={comp}>
                  {comp}
                </option>
              ))}
            </select>
          </div>

          {/* Year */}
          <div className="mb-3">
            <label className="form-label">Year</label>
            <input
              type="number"
              name="year"
              className="form-control"
              placeholder="e.g. 2019"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>

          {/* Kms Driven */}
          <div className="mb-3">
            <label className="form-label">KMs Driven</label>
            <input
              type="number"
              name="kms_driven"
              className="form-control"
              placeholder="e.g. 45000"
              value={formData.kms_driven}
              onChange={handleChange}
              required
            />
          </div>

          {/* Fuel Type */}
          <div className="mb-3">
            <label className="form-label">Fuel Type</label>
            <select
              name="fuel_type"
              value={formData.fuel_type}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Select Fuel Type</option>
              {fuelTypes.map((fuel, i) => (
                <option key={i} value={fuel}>
                  {fuel}
                </option>
              ))}
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 py-2"
            disabled={loading}
          >
            {loading ? "Predicting..." : "Predict Price"}
          </button>
        </form>

        {/* Messages */}
        {error && <p className="text-danger mt-3 text-center">{error}</p>}
        {prediction && (
          <p className="text-success mt-3 text-center fw-bold fs-5">
            Estimated Price: ₹ {prediction}
          </p>
        )}
      </div>
    </div>
  );
}
