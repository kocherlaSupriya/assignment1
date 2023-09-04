import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  },[]);
  return (
    <>
     <div className="container">
     <h1>Fetched Data</h1>
     <hr/>
      <div className="row">
        {data.map((item) => (
          <div 
          className="col-lg-3 mb-2"
           key={item.id}>
            <Link to={`/product/${item.id}`} className="text-decoration-none">
              <div className="product-card-container mb-3 p-4">
                <img src={item.image} alt={item.title} className="product-image" />
                <h5 className="product-title mt-3">{item.title}</h5>
                <p className="product-price mb-2">${item.price}</p>
                <p className="product-description">{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
     </div>
    </>
  );
};

export default Home;


