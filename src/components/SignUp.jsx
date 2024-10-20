import { useState } from "react";
import { Link } from "react-router-dom";
import { GiSteeringWheel } from "react-icons/gi";
import { FaUser, FaHome, FaMobileAlt, FaEnvelope, FaLock } from "react-icons/fa"; // Importing icons
import Navbar from "./Navbar";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    mobileNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform sign-up logic here, such as calling an API or saving the data
  };

  return (
    <><Navbar/>
    <div className="container mx-auto mt-10">
      <div className="flex justify-center mb-4">
        <GiSteeringWheel size={50} className="text-primary" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-6">Sign Up</h1>

      <form
        className="w-full max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
            
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter your username"
              required
            />
            <FaUser className="mr-2 text-gray-400" />
          </div>
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
            
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter your address"
              required
            />
            <FaHome className="mr-2 text-gray-400" />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
            Mobile Number
          </label>
          <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
            
            <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter your mobile number"
              required
            />
            <FaMobileAlt className="mr-2 text-gray-400" />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
           
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter your email"
              required
            />
             <FaEnvelope className="mr-2 text-gray-400" />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
            
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter your password"
              required
            />
            <FaLock className="mr-2 text-gray-400" />
          </div>
        </div>

        {/* Sign Up Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>

        {/* Redirect to Login */}
        <div className="text-center mt-4">
          <p>Already have an account? <Link to="/login" className="text-primary hover:underline">Log in here</Link></p>
        </div>
      </form>
    </div>
    </>
  );
};

export default SignUp;
