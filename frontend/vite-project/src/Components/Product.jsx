// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let response = await fetch("http://localhost:1234/products");

    let result = await response.json();
    setProducts(result);
  };
  console.warn(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul className="flex  gap-80 justify-center mt-10 border-2">
        <li className="">Sr.No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
      </ul>
      {products &&
        products.map((item, index) => {
          return (
            <ul
              key={index}
              className="flex  gap-80 justify-center mt-20 border-2 mb-0 "
            >
              <li>{index + 1}</li>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>{item.category}</li>
            </ul>
          );
        })}
    </div>
  );
};

export default Product;
