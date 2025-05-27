"use client"
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

const Filter = () => {
    const [products, setProducts] = useState([]);
    const [model, setmodel] = useState('');
    const [price, setPrice] = useState(''); // Format: "min-max"
   const [Driven, setdriven] = useState('');

  const fetchProducts = async () => {
    const params = new URLSearchParams();

    if (model) params.append('model', model);
    if (price) params.append('price', price);
    if (Driven) params.append('Driven', Driven);

    const res = await fetch(`/api/products?${params.toString()}`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch on initial load

  const handleFilter = () => {
    fetchProducts();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4"> 
      <h1 className="text-2xl font-bold">Product Filters</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Category Filter */}
        <div className="mb-3">
            <label className="form-label fw-bold">Model</label>
            <select
                value={model}
                onChange={(e) => setmodel(e.target.value)}
                className="form-select"
                disabled={price || Driven}
            >
                <option value="">None</option>
                <option value="desc">Ascending</option>
                <option value="asc">Descending</option>
            </select>
        </div>

        <div className="mb-3">
            <label className="form-label fw-bold">Price</label>
            <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-select"
                disabled={model || Driven}
            >
                <option value="">None</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>

        <div className="mb-3">
            <label className="form-label fw-bold">Driven</label>
            <select
                value={Driven}
                onChange={(e) => setdriven(e.target.value)}
                className="form-select"
                disabled={price || model}
            >
                <option value="">None</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>

        <div className="d-flex justify-content-end">
            <button
                onClick={handleFilter}
                className="btn btn-primary px-4 py-2 fw-semibold"
            >
                Apply Filters
            </button>
        </div>

        {/* Product List */}
        <div className="row mt-4">
            {products.length === 0 && (
                <div className="col-12">
                    <p className="text-center text-muted">No products found.</p>
                </div>
            )}
            {(Array.isArray(products) ? products : []).map((product) => (
                <div
                    key={product.id}
                    className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch"
                >
                    <div className="card shadow-sm w-100 h-100 border-0">
                        <div className="card-body d-flex flex-column">
                            <Card item={product} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    


    </div>
    </div>

   
    
  );

}
export default Filter;