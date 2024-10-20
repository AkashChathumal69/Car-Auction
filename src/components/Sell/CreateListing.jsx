import { useState } from "react";
import { CameraIcon } from "@heroicons/react/16/solid";
import { GiSteeringWheel } from "react-icons/gi"; // Import GiSteeringWheel
import Navbar from "../Navbar";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    brand: "",
    model: "",
    year: "",
    engineCapacity: "",
    mileage: "",
    description: "",
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
    // Handle form submission logic here (e.g., API call or validation)
  };

  return (
    <><Navbar/>
    <div className="flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Heading with Icon */}
          <div className="flex flex-col items-center mb-6">
            <GiSteeringWheel size={32} className="text-primary" /> {/* Icon */}
            <h1 className="text-2xl font-bold text-center">Create Listing</h1> {/* Topic Heading */}
          </div>

          <div>
            <label className="block font-medium">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-[200%] py-2 px-3 text-gray-700 leading-tight"
              placeholder="Enter brand"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-[200%] py-2 px-3 text-gray-700 leading-tight"
              placeholder="Enter model"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Manufacture Year</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-[200%] py-2 px-3 text-gray-700 leading-tight"
              placeholder="Enter year"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Engine Capacity</label>
            <input
              type="text"
              name="engineCapacity"
              value={formData.engineCapacity}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-[200%] py-2 px-3 text-gray-700 leading-tight"
              placeholder="Enter engine capacity"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Mileage</label>
            <input
              type="text"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-[200%] py-2 px-3 text-gray-700 leading-tight"
              placeholder="Enter mileage"
              required
            />
          </div>

          {/* Cover Photo Upload Section */}
          <label htmlFor="cover-photo" className="block font-medium">
            Cover photo
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <CameraIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>

          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-[200%] py-2 px-3 text-gray-700 leading-tight"
              placeholder="Enter description"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit Listing
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default FeedbackForm;
