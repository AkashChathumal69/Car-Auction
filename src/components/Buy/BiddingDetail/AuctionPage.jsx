import { useNavigate } from "react-router-dom";
import { GiSteeringWheel } from "react-icons/gi";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const AuctionPage = () => {
  const navigate = useNavigate();
  const [auctions, setAuctions] = useState([]);

  const fetchAuctions = async () => {
    try {
      const response = await axios.get("http://localhost:5175/api/actions");

      const formattedAuctions = response.data.map((auction) => {
        // Convert timeRemaining from 'hh:mm:ss' format to milliseconds
        const [hours, minutes, seconds] = auction.timeRemaining
          .split(":")
          .map(parseFloat);
        const initialTimeRemaining =
          ((hours * 60 + minutes) * 60 + seconds) * 1000;

        return {
          id: auction.auctionId,
          title: auction.brand + " " + auction.model,
          image: auction.auctionImage,
          location: "London", // or use auction.location if available in the API
          initialTimeRemaining:
            initialTimeRemaining > 0 ? initialTimeRemaining : 0,
          currentBid: auction.currentBid,
          status: "Green Light",
          odometer: auction.mileage + "Km",
          transmission: "Automatic",
          fuel: "Hybrid Engine",
        };
      });
      setAuctions(formattedAuctions);
    } catch (error) {
      console.error("Error fetching auctions", error);
    }
  };

  useEffect(() => {
    fetchAuctions();
  }, []);

  // Timer logic to decrement time remaining
  useEffect(() => {
    const timer = setInterval(() => {
      setAuctions((prevAuctions) =>
        prevAuctions.map((auction) => {
          if (auction.initialTimeRemaining > 0) {
            return {
              ...auction,
              initialTimeRemaining: auction.initialTimeRemaining - 1000,
            };
          }
          return { ...auction, initialTimeRemaining: 0 };
        })
      );
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleBidClick = (carId) => {
    navigate(`/car-detail/${carId}`);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-8">
            <GiSteeringWheel size={50} className="text-primary" />
            <h1 className="text-3xl font-bold">Live Auctions</h1>
          </div>
          {/* Search and Filter */}
        </div>

        {/* Auction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {auctions.map((auction) => (
            <div
              key={auction.id}
              onClick={() => handleBidClick(auction.id)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={auction.image}
                  alt={auction.title}
                  className="w-full h-48 object-cover"
                />
                <span
                  className={`absolute top-2 left-2 px-2 py-1 rounded-md text-sm font-medium ${
                    auction.status === "Green Light"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {auction.status}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-semibold mb-2 truncate">{auction.title}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span>{auction.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>
                      Time Remaining: {formatTime(auction.initialTimeRemaining)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{auction.odometer}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Current Bid:</span>
                    <span className="text-lg font-bold">
                      ${auction.currentBid}
                    </span>
                  </div>
                  <button
                    onClick={() => handleBidClick(auction.id)}
                    className="mt-3 w-full bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500"
                  >
                    Bid Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AuctionPage;
