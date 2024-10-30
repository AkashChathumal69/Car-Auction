import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import AuthContext from "../../../Context/AuthContext.js";

const CarAuctionListing = () => {
  const { user } = useContext(AuthContext);
  const { carId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carInfo, setCarInfo] = useState(null);
  const [bidAmount, setBidAmount] = useState(""); // State for bid input

  const fetchCarInfo = async () => {
    try {
      const response = await fetch(
        `http://localhost:5175/api/actions/${carId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch car info");
      }
      const data = await response.json();
      setCarInfo(data);
    } catch (error) {
      console.error("Error fetching car info:", error);
    }
  };

  useEffect(() => {
    fetchCarInfo();
  }, [carId]); // Only depend on carId, no need to include fetchCarInfo

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleBidSubmit = async () => {
    if (!bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
      alert("Please enter a valid bid amount.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5175/api/bids/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user}`, // Use the token from the context
        },
        body: JSON.stringify({
          auctionId: carInfo.auctionId,
          bidAmount: parseFloat(bidAmount), // Send bid amount as a number
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to place bid");
      }

      alert("Bid placed successfully!");
      setBidAmount(""); // Clear bid input after submission
      fetchCarInfo(); // Fetch car info again to refresh data
    } catch (error) {
      console.error("Error placing bid:", error);
      alert("Failed to place bid. Please try again.");
    }
  };

  if (!carInfo) {
    return <p>Loading...</p>;
  }

  const images = [carInfo.auctionImage]; // Set up image array if there are multiple images in future

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full">
            {/* Main Image and Gallery */}
            <div className="relative mb-4">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={images[currentImageIndex]}
                  alt="Vehicle"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-96">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">CURRENT BID</h2>
                <span className="text-2xl font-bold">
                  ${carInfo.currentBid}
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                Auction Countdown: {carInfo.timeRemaining} · {carInfo.status}
              </div>
              <input
                type="number"
                placeholder="Enter your bid"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                className="w-full border rounded p-2 mb-4"
                min="0"
              />
              <button
                onClick={handleBidSubmit}
                className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-orange-500"
              >
                Bid Now
              </button>
            </div>
          </div>
        </div>

        {/* Car Information */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-4">BASIC INFO</h3>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Brand:</span>
                <span>{carInfo.brand}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Model:</span>
                <span>{carInfo.model}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Mileage:</span>
                <span>{carInfo.mileage}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Starting Bid:</span>
                <span>${carInfo.startingBid}</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">SELLER INFO</h3>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Seller Name:</span>
                <span>{carInfo.sellerName}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Winning Bid:</span>
                <span>${carInfo.winningBid}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Status:</span>
                <span>{carInfo.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CarAuctionListing;
