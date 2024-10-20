import { useState } from "react";
import { FaUser, FaHome, FaMobileAlt, FaEnvelope, FaLock, FaEdit } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import Navbar from "./Navbar";

const MyAccount = () => {
  // User data (You can fetch this data from an API in a real-world scenario)
  const [userData, setUserData] = useState({
    username: "Mia Khalifa",
    address: "123 Main St, City, Country",
    mobileNumber: "123-456-7890",
    email: "miakhlf@example.com",
    password: "********", // You might want to keep this masked or encrypted
  });

  const [isEditing, setIsEditing] = useState(false); // To toggle between view and edit modes
  const [formData, setFormData] = useState({ ...userData });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle save changes
  const handleSave = (e) => {
    e.preventDefault();
    setUserData({ ...formData });
    setIsEditing(false); // Disable editing after saving
  };

  return (
    <><Navbar/>
    <div className="container mx-auto mt-10">
        <div className="flex justify-center mb-4">
        <GiSteeringWheel size={50} className="text-primary" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-6">My Account</h1>

      <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded px-9 pt-6 pb-8 mb-4">
        <div className="text-right mb-4">
          <button
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsEditing(!isEditing)}
          >
            <FaEdit className="mr-2" />
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>

        <form onSubmit={handleSave}>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
              <FaUser className="mr-2 text-gray-400" />
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full outline-none ${!isEditing && "bg-gray-100"}`}
              />
            </div>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
              <FaHome className="mr-2 text-gray-400" />
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full outline-none ${!isEditing && "bg-gray-100"}`}
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
              <FaMobileAlt className="mr-2 text-gray-400" />
              <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full outline-none ${!isEditing && "bg-gray-100"}`}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
              <FaEnvelope className="mr-2 text-gray-400" />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full outline-none ${!isEditing && "bg-gray-100"}`}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
              <FaLock className="mr-2 text-gray-400" />
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full outline-none ${!isEditing && "bg-gray-100"}`}
              />
            </div>
          </div>

          {/* Save Button */}
          {isEditing && (
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
    </>
  );
};

export default MyAccount;
