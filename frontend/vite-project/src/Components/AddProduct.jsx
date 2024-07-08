// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setComapny] = useState("");
  const [error, setError] = useState(false);

  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    // console.warn(name + " " + price + " " + category + " " + company);

    const userId = JSON.parse(localStorage.getItem("user"))._id;

    let result = await fetch("http://localhost:1234/add-product", {
      method: "POST",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
  };

  return (
    <div className="flex flex-col gap-4 mt-28 ml-[40%] w-80">
      <h1 className="font-semibold text-center">Add Product</h1>
      <input
        className="justify-center border-2 p-2 border-black"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter product name"
      />
      {error && !name && (
        <span className="text-red-600 text-center ">Enter Valid Name</span>
      )}
      <input
        className="justify-center border-2 p-2 border-black"
        type="text"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        placeholder="Enter product price"
      />
      {error && !price && (
        <span className="text-red-600 text-center ">Enter Valid Price</span>
      )}
      <input
        className="justify-center border-2 p-2 border-black"
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        placeholder="Enter product category"
      />
      {error && !category && (
        <span className="text-red-600 text-center ">Enter Valid Category</span>
      )}
      <input
        className="justify-center border-2 p-2 border-black"
        type="text"
        onChange={(e) => setComapny(e.target.value)}
        value={company}
        placeholder="Enter product company"
      />
      {error && !company && (
        <span className="text-red-600 text-center ">Enter Valid Company</span>
      )}
      <button onClick={addProduct} className="p-2 bg-blue-400">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
