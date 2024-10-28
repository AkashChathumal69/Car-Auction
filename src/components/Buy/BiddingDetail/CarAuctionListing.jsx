import { useState } from 'react';
import car1 from '../../../assets/img/car1.png';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const CarAuctionListing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [monsterBid, setMonsterBid] = useState(275);
  const [maxBid, setMaxBid] = useState(275);

  const images = [
   car1,car1,car1,car1
  ];

  const carInfo = {
    lotNumber: "76464354",
    vin: "5TDZSKFC4RS******",
    titleCode: "TN - Certificate Of Title - Clean Title",
    odometer: "10,696 mi Actual",
    estimatedValue: "$372.00 USD",
    engineType: "2.5L 4",
    transmission: "Automatic",
    drive: "All wheel drive",
    fuel: "Hybrid Engine"
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Header */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm">Green Light</span>
              <span className="text-gray-600">|</span>
              <span>London</span>
              <span className="text-gray-600">|</span>
              <span className="text-blue-600">Mon, Nov 04, 2024 10:30 PM IST</span>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>
          
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-2 mt-2 overflow-x-auto">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden ${
                    currentImageIndex === idx ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-96">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">CURRENT BID</h2>
              <span className="text-2xl font-bold">$ 275</span>
            </div>
            
            <div className="text-sm text-gray-600 mb-4">
              Auction Countdown: 8D 5H 51min · On Approval
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Monster Bid (What is this?)</label>
                <div className="flex items-center gap-2">
                  <span className="text-lg">$</span>
                  <input
                    type="number"
                    value={monsterBid}
                    onChange={(e) => setMonsterBid(Number(e.target.value))}
                    className="w-full p-2 border rounded"
                  />
                  <button 
                    onClick={() => setMonsterBid(prev => prev - 25)} 
                    className="p-2 border rounded hover:bg-gray-100"
                  >
                    <span className="block w-4 h-4 relative">
                      <span className="absolute inset-0 flex items-center justify-center">-</span>
                    </span>
                  </button>
                  <button 
                    onClick={() => setMonsterBid(prev => prev + 25)} 
                    className="p-2 border rounded hover:bg-gray-100"
                  >
                    <span className="block w-4 h-4 relative">
                      <span className="absolute inset-0 flex items-center justify-center">+</span>
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Max Bid (What is this?)</label>
                <div className="flex items-center gap-2">
                  <span className="text-lg">$</span>
                  <input
                    type="number"
                    value={maxBid}
                    onChange={(e) => setMaxBid(Number(e.target.value))}
                    className="w-full p-2 border rounded"
                  />
                  <button 
                    onClick={() => setMaxBid(prev => prev - 25)} 
                    className="p-2 border rounded hover:bg-gray-100"
                  >
                    <span className="block w-4 h-4 relative">
                      <span className="absolute inset-0 flex items-center justify-center">-</span>
                    </span>
                  </button>
                  <button 
                    onClick={() => setMaxBid(prev => prev + 25)} 
                    className="p-2 border rounded hover:bg-gray-100"
                  >
                    <span className="block w-4 h-4 relative">
                      <span className="absolute inset-0 flex items-center justify-center">+</span>
                    </span>
                  </button>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-orange-500">
                Bid Now
              </button>

              <div className="flex justify-between text-sm">
                <span className="text-blue-600 hover:underline cursor-pointer">Shipping Estimate</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Check Estimate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Car Information */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-4">BASIC INFO</h3>
            {Object.entries(carInfo).slice(0, 5).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b">
                <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-semibold mb-4">ENGINE & TRANSMISSION</h3>
            {Object.entries(carInfo).slice(5).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b">
                <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CarAuctionListing;