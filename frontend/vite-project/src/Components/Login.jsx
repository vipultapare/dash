// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    let result = await fetch("http://localhost:1234/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Invalid NAME");
    }
  };

  return (
    <div className="ml-[40%] mt-24 flex flex-col w-72">
      <h1 className="text-2xl font-bold p-4 text-center ">LOGIN</h1>
      <div className="flex flex-col gap-4">
        <input
          className="p-2  border-2 border-black"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter Email"
        />
        <input
          className="p-2  border-2 border-black"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter Password"
        />
        <button onClick={handleLogin} className="p-2 bg-blue-500">
          LOGIN IN
        </button>
      </div>
    </div>
  );
};

export default Login;
//7:00
