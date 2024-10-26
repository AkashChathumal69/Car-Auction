import { useState } from "react";
// import { CameraIcon } from "@heroicons/react/16/solid";
import { GiSteeringWheel } from "react-icons/gi"; // Import GiSteeringWheel
import Navbar from "../Navbar";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";

const FeedbackForm = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setError("Please select an image first");
      return;
    }

    try {
      setUploading(true);
      setError("");

      // Create a unique filename
      const filename = `${Date.now()}-${image.name}`;

      // Create a reference to the file location in Firebase Storage
      const storageRef = ref(storage, `images/${filename}`);

      // Upload the file
      const snapshot = await uploadBytes(storageRef, image);

      // Get the download URL
      const downloadUrl = await getDownloadURL(snapshot.ref);

      setFormData(downloadUrl);
      setImage(null);

      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    engineCapacity: "",
    mileage: "",
    description: "",
    downloadUrl: "",
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
    handleUpload();
  };

  return (
    <>
      {error && <div className="text-red-500 text-center">{error}</div>}
      <Navbar />
      <div className="flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feedback Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Heading with Icon */}
            <div className="flex flex-col items-center mb-6">
              <GiSteeringWheel size={32} className="text-primary" />{" "}
              {/* Icon */}
              <h1 className="text-2xl font-bold text-center">
                Create Listing
              </h1>{" "}
              {/* Topic Heading */}
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
            <div className="max-w-md mx-auto p-4">
              <div className="mb-4">
                <input
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="block w-full text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-md file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-50 file:text-blue-700
        hover:file:bg-blue-100
      "
                  disabled={uploading}
                />
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
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handleSubmit}
            >
              Submit Listing
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
