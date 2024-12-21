import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
        email: "",  
        password: "",
    })
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col items-center justify-center gap-4 p-4 sm:p-20 border-2 border-violet-500 rounded-lg ">
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
          <label className="text-xl font-semibold" htmlFor="email">
            Email
          </label>
          <input
            required
            className="border-2 border-gray-400 rounded-lg p-2 placeholder:text-white"
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label className="text-xl font-semibold" htmlFor="password">
            Password
          </label>
          <input
            required
            className="border-2 border-gray-400 rounded-lg p-2 placeholder:text-white"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            className="bg-violet-600 text-white rounded-lg p-2 font-semibold"
            type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
