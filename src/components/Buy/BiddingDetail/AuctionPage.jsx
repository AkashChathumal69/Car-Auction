import { useNavigate } from 'react-router-dom';
import car1 from '../../../assets/img/car1.png';
import car2 from '../../../assets/img/car2.png';
import car3 from '../../../assets/img/car3.png';
import car4 from '../../../assets/img/car4.png';
import car5 from '../../../assets/img/car5.png';
import car6 from '../../../assets/img/car6.png';
import { GiSteeringWheel } from "react-icons/gi";
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const AuctionPage = () => {
  const navigate = useNavigate();

  const auctions = [
    {
      id: 1,
      title: "Cadillac Escale",
      image: car1,
      location: "London",
      date: "Mon, Nov 04, 2024 10:30 PM IST",
      currentBid: 275,
      status: "Green Light",
      odometer: "10,696 mi",
      transmission: "Automatic",
      fuel: "Hybrid Engine"
    },
    {
      id: 2,
      title: "BMW i Series",
      image: car2,
      location: "CA - Los Angeles",
      date: "Tue, Nov 05, 2024 2:30 PM IST",
      currentBid: 350,
      status: "Yellow Light",
      odometer: "15,234 mi",
      transmission: "Automatic",
      fuel: "Diesel"
    },
    {
      id: 3,
      title: "Mercedes Benz",
      image: car3,
      location: "Chikago",
      date: "Wed, Nov 06, 2024 1:00 PM IST",
      currentBid: 425,
      status: "Green Light",
      odometer: "5,123 mi",
      transmission: "Manual",
      fuel: "Gasoline"
    },
    {
      id: 4,
      title: "BMW 7 Series",
      image: car4,
      location: "FL - Miami",
      date: "Thu, Nov 07, 2024 3:45 PM IST",
      currentBid: 500,
      status: "Green Light",
      odometer: "8,756 mi",
      transmission: "Automatic",
      fuel: "Electric"
    },
    {
      id: 5,
      title: "Mercedes Benz",
      image: car5,
      location: "TX - Dallas",
      date: "Wed, Nov 06, 2024 1:00 PM IST",
      currentBid: 425,
      status: "Green Light",
      odometer: "5,123 mi",
      transmission: "Manual",
      fuel: "Petrol"
    },
    {
      id: 6,
      title: "Range Rover",
      image: car6,
      location: "Texas",
      date: "Wed, Nov 06, 2024 1:00 PM IST",
      currentBid: 425,
      status: "Green Light",
      odometer: "5,123 mi",
      transmission: "Manual",
      fuel: "Petrol"
    }
  ];

  const handleBidClick = (carId) => {
    navigate(`/car-detail/${carId}`);
  };
  

  return (
    <>
      <Navbar/>
    
    <div className="max-w-7xl mx-auto p-4">
      {/* Header */}
      <div className="mb-8">
      <div className="flex items-center gap-2 mb-8">
  <GiSteeringWheel size={50} className="text-primary" />
  <h1 className="text-3xl font-bold">Live Auctions</h1>
  </div>
        <div className="flex gap-4 mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search auctions..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <select className="px-4 py-2 border rounded-lg">
            <option>All Locations</option>
            <option>TN - NASHVILLE</option>
            <option>CA - LOS ANGELES</option>
            <option>TX - DALLAS</option>
            <option>FL - MIAMI</option>
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option>All Statuses</option>
            <option>Green Light</option>
            <option>Blue Light</option>
            <option>Red Light</option>
          </select>
        </div>
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{auction.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{auction.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>{auction.odometer}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Current Bid:</span>
                  <span className="text-lg font-bold">${auction.currentBid}</span>
                </div>
                <button  onClick={handleBidClick} className="mt-3 w-full bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500">
                  Bid Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="flex gap-1">
          <button className="px-3 py-1 border rounded hover:bg-gray-100">&lt;</button>
          <button className="px-3 py-1 border rounded bg-blue-500 text-white">1</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">&gt;</button>
        </nav>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AuctionPage;