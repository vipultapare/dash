// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    let result = await fetch("http://localhost:1234/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="bg-cyan-300 h-screen">
      <h1 className="flex justify-center font-bold text-slate-600 p-4 text-lg">
        Register Page
      </h1>
      <div className="mt-2 flex flex-col w-[40%] ml-[30%] p-6 gap-4 mt-[5%]">
        <input
          value={name}
          type="text"
          className="text-center rounded-lg font-semibold bg-cyan-300 border border-black border-2 text-black h-10"
          placeholder="Enter Name"
          onChange={(e) => setname(e.target.value)}
        />

        <input
          value={email}
          type="text"
          className="text-center rounded-lg font-semibold bg-cyan-300 border border-black border-2 text-black h-10"
          placeholder="Enter Email"
          onChange={(e) => setemail(e.target.value)}
        />

        <input
          value={password}
          type="password"
          className="text-center rounded-lg font-semibold bg-cyan-300 border border-black border-2 text-black h-10"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="text-center rounded-lg font-semibold bg-cyan-300 border border-black border-2 text-black bg-green-300 h-10"
          onClick={collectData}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
