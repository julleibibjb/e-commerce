import React, { useEffect } from "react";
import "../styles/Landing.css";
import { Hero, ProductElement, Stats } from "../components";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import data from "../data/db.json";

export const landingLoader = async () => {
  const response = await axios(
    // `http://localhost:8080/products?_page=1&_limit=8`
    // "https://api.jsonsilo.com/public/980028af-8d24-49b0-b6ff-33f7baf958ad"
    // "http://localhost:3000/products"
    "https://api.jsonsilo.com/public/980028af-8d24-49b0-b6ff-33f7baf958ad"
  );
  const data = response.data.products;

  return { products: data };
};

const Landing = () => {
  const { products } = useLoaderData();
  const navigate = useNavigate();

  return (
    <main>
      <Hero />
      <Stats />

      <div className="selected-products">
        <h2 className="text-6xl text-center my-12 max-md:text-4xl text-accent-content">
          Trending Products
        </h2>
        <div className="selected-products-grid max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductElement
              key={product.id}
              id={product.id}
              title={product.name}
              image={product.imageUrl}
              rating={product.rating}
              price={product.price.current.value}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Landing;
