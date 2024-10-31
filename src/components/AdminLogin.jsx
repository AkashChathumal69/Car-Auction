import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiSteeringWheel } from "react-icons/gi";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "./Navbar";
import AuthContext from "../Context/AuthContext.js";

const AdminLogin = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered credentials match the admin credentials
    if (
      formData.email === "admin@carauction.com" &&
      formData.password === "Admin@12345"
    ) {
      login(formData); // Call the login function from AuthContext (if needed)
      navigate("/admin"); // Redirect to the admin route
    } else {
      alert("Invalid email or password!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10">
        <div className="flex justify-center mb-4">
          <GiSteeringWheel size={50} className="text-primary" />
        </div>

        <h1 className="text-4xl font-bold text-center mb-6">Admin Login</h1>

        <form
          className="w-full max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              User Name
            </label>
            <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none"
                placeholder="Enter your username"
                required
              />
              <FaUser className="mr-2 text-gray-400" />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none"
                placeholder="Enter your password"
                required
              />
              <div
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-400" />
                ) : (
                  <FaEye className="text-gray-400" />
                )}
              </div>
            </div>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="mr-2"
              />
              <span className="text-gray-700 text-sm">Remember Me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>

          <div className="text-center mt-4">
            <p>
              Don’t have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
