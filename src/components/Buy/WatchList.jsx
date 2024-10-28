import  { useState } from 'react';
import car1 from '../../assets/img/car1.png';
import car2 from '../../assets/img/car2.png';
import car5 from '../../assets/img/car5.png';
import { GiSteeringWheel } from "react-icons/gi";
import Navbar from '../Navbar';
import Footer from '../Footer';

const WatchList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Cadillac Escale",
      currentBid: 250,
      yourBid: 245,
      timeLeft: "2h 15m",
      img: car1,
      status: "outbid",
      endTime: "Today, 8:00 PM"
    },
    {
      id: 2,
      title: "BMW i Series",
      currentBid: 180,
      yourBid: 180,
      timeLeft: "4h 30m",
      img: car2,
      status: "winning",
      endTime: "Today, 10:15 PM"
    },
    {
      id: 3,
      title: "Mercedes Benz",
      currentBid: 95,
      yourBid: null,
      timeLeft: "1d 5h",
      img: car5,
      status: "watching",
      endTime: "Tomorrow, 9:30 PM"
    }
  ]);

  const getStatusBadge = (status) => {
    const styles = {
      winning: "bg-green-500",
      outbid: "bg-red-500",
      watching: "bg-blue-500"
    };
    
    return (
      <span className={`${styles[status]} text-white px-2 py-1 rounded-full text-sm`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <><Navbar/>
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
      <div className="flex items-center gap-2 mb-8">
  <GiSteeringWheel size={50} className="text-primary" />
  <h1 className="text-3xl font-bold">My Watchlist</h1>
  </div>
        <h3 className="text-xl font-bold">Track your bids and watched items</h3>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex">
              <img
                src={item.img}
                alt={item.title}
                className="w-48 h-36 object-cover"
              />
              <div className="flex-1 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    {getStatusBadge(item.status)}
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">💰</span>
                    <div>
                      <p className="text-sm text-gray-500">Current Bid</p>
                      <p className="font-semibold">${item.currentBid}</p>
                    </div>
                  </div>
                  
                  {item.yourBid && (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">🎯</span>
                      <div>
                        <p className="text-sm text-gray-500">Your Bid</p>
                        <p className="font-semibold">${item.yourBid}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">⏳</span>
                    <div>
                      <p className="text-sm text-gray-500">Time Left</p>
                      <p className="font-semibold">{item.timeLeft}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">🕒</span>
                    <div>
                      <p className="text-sm text-gray-500">End Time</p>
                      <p className="font-semibold">{item.endTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {items.length === 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
          <p>No items in your watchlist</p>
        </div>
      )}
      
    </div>
    <Footer/>
    </>
  );
};

export default WatchList;