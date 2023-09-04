
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [productId]);

  return (
  <div className="container mt-3">
  <div className="row justify-content-center">
    <div className="centered">
      <div className="col-md-4 mb-4" key={product.id}>
        <div className="product-card-container1">
          <img src={product.image} alt={product.title} className="product-image1" />
          <h5 className="product-title">{product.title}</h5>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ProductDetails;
