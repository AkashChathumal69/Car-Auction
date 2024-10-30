import { useState, useContext } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import Navbar from "../Navbar";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    engineCapacity: "",
    mileage: "",
    description: "",
    bidAmmount: "",
    endTime: "", // New endTime field
  });

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setError("Please select an image first");
      return null;
    }
    try {
      setUploading(true);
      setError("");
      const filename = `${Date.now()}-${image.name}`;
      const storageRef = ref(storage, `images/${filename}`);
      const snapshot = await uploadBytes(storageRef, image);
      const imageURL = await getDownloadURL(snapshot.ref);
      setImage(null);
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";
      return imageURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Failed to upload image. Please try again.");
      return null;
    } finally {
      setUploading(false);
    }
  };

  const CreateAuction = async (formData, imageURL) => {
    try {
      const response = await fetch("http://localhost:5175/api/actions/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user}`, // Add the access token to the request headers
        },
        body: JSON.stringify({
          brand: formData.brand,
          year: formData.year,
          description: formData.description,
          auctionImage: imageURL,
          model: formData.model,
          mileage: formData.mileage,
          startingBid: parseFloat(formData.bidAmmount),
          endTime: formData.endTime, // Pass selected endTime to the backend
        }),
      });
      const data = await response.json();
      if (response.ok) {
        Swal.fire({
          title: "Auction Created!",
          text: "Your auction has been created successfully.",
          icon: "success",
          confirmButtonText: "Go to Auctions",
        }).then(() => navigate("/AuctionList"));
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Registration error:", error);
      Swal.fire({
        title: "Error",
        text: `Failed to create auction: ${error.message}. Please try again.`,
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageURL = await handleUpload();
    if (imageURL) {
      await CreateAuction(formData, imageURL);
    }
  };

  return (
    <>
      {error && <div className="text-red-500 text-center">{error}</div>}
      <Navbar />
      <div className="flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col items-center mb-6">
              <GiSteeringWheel size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-center">Create Listing</h1>
            </div>
            {["brand", "model", "year", "engineCapacity", "mileage"].map(
              (field, idx) => (
                <div key={idx}>
                  <label className="block font-medium capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "year" ? "number" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    placeholder={`Enter ${field}`}
                    required
                  />
                </div>
              )
            )}
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
                      hover:file:bg-blue-100"
                  disabled={uploading}
                />
              </div>
            </div>
            <div>
              <label className="block font-medium">Start Bid Amount:</label>
              <input
                type="number"
                name="bidAmmount"
                value={formData.bidAmmount}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Enter Starting Bid Value"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Enter description"
                required
              />
            </div>
            <div>
              <label className="block font-medium">End Time</label>
              <input
                type="datetime-local"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Submit Listing"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
