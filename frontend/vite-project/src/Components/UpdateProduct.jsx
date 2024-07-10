// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setComapny] = useState("");

  const updateProduct = () => {
    console.log(name + " " + price + " " + category + " " + company);
  };

  return (
    <div className="flex flex-col gap-4 w-80 ml-[40%] mt-28">
      <h1 className="font-semibold text-center">Update Product</h1>

      <input
        className="border-2 border-black p-2 justify-center "
        type="text"
        placeholder="Enter the Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border-2 border-black p-2 justify-center "
        type="text"
        placeholder="Enter the Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        className="border-2 border-black p-2 justify-center "
        type="text"
        placeholder="Enter the Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        className="border-2 border-black p-2 justify-center "
        type="text"
        placeholder="Enter the Company"
        value={company}
        onChange={(e) => setComapny(e.target.value)}
      />
      <button onClick={updateProduct} className="p-2 bg-blue-400">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
