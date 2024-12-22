import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser("admin");
    handleLogin(formData.email, formData.password);

    // Clear the form data
    setFormData({
        email: "",  
        password: "",
    })
  };

  const handleLogin = (email, password) => {
    if (email === "admin.john@example.com" && password === "John") {
      console.log("Admin Login Successful");
      setUser["admin"];
    } else if (email === "john.doe@example.com" && password === "John") {
      console.log("Empolyee Login Successful");
      setUser["empolyee"];
    } else {
      alert("Invalid Credentials");
      setUser[null];
    }
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
            className="border-2 border-gray-400 rounded-lg p-2 text-black"
            type="email"
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
            className="border-2 border-gray-400 rounded-lg p-2 text-black"
            type="password"
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
