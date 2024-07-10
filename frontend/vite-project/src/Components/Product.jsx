// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let response = await fetch("http://localhost:1234/products");

    let result = await response.json();
    setProducts(result);
  };
  // console.warn(products);

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:1234/product/${id}`, {
      method: "DELETE",
    });

    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <ul className="flex  gap-80 justify-center mt-10 border-2">
        <li className="">Sr.No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {products &&
        products.map((item, index) => {
          return (
            <ul
              key={item._id}
              className="flex gap-80 justify-center mt-2 border-2 p-2"
            >
              <li>{index + 1}</li>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>{item.category}</li>
              <li>
                <button
                  onClick={deleteProduct(item._id)}
                  className="bg-red-500 p-2 text-white rounded-lg "
                >
                  Delete
                </button>
                <Link to={"/updateproduct/" + item._id}>Update</Link>
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default Product;
