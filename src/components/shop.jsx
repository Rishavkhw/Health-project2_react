import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const dummyProducts = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 30,
    quantity: "50 kg",
    location: "Dharan",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Organic Potatoes",
    price: 25,
    quantity: "100 kg",
    location: "Biratnagar",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Sweet Corn",
    price: 20,
    quantity: "70 kg",
    location: "Itahari",
    image: "https://via.placeholder.com/150",
  },
];

function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = dummyProducts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <div id="hero1" className="bg-success text-white text-center py-1">
        <h1 className="display-5">Welcome to AgroKart</h1>
        <p className="lead">Buy Fresh Produce Directly from Local Farmers</p>
        {/* <button className="btn btn-light mt-3">Start Shopping</button> */}
      </div>

      {/* Search */}
      <div className="container my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for crops..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="container">
        <h2 className="mb-4">Available Crops</h2>
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: ₹{product.price}/kg</p>
                  <p className="card-text">Quantity: {product.quantity}</p>
                  <p className="card-text">Location: {product.location}</p>
                </div>
                <div className="card-footer text-center">
                  <button className="btn btn-success">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-success text-white text-center py-3 mt-5">
        © 2025 AgroKart – Empowering Local Farmers
      </footer>
    </div>
  );
}

export default Home;
