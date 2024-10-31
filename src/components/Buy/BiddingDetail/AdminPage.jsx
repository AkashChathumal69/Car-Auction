import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminPage = () => {
  const [auctions, setAuctions] = useState([]);
  const [users, setUsers] = useState([]);
  const [bids, setBids] = useState([]);

  // Fetch all auctions
  const fetchAuctions = async () => {
    try {
      const response = await axios.get("http://localhost:5175/api/actions");
      setAuctions(response.data);
    } catch (error) {
      console.error("Error fetching auctions", error);
    }
  };

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5175/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  // Fetch all bids
  const fetchBids = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5175/api/Admin/viewAllBids"
      );
      setBids(response.data);
    } catch (error) {
      console.error("Error fetching bids", error);
    }
  };

  // Delete a user by ID
  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5175/api/Admin/deleteUser/${userId}`
      );
      alert(response.data.message);
      fetchUsers(); // Refresh user list after deletion
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  useEffect(() => {
    fetchAuctions();
    fetchUsers();
    fetchBids();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Auctions Table */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">All Auctions</h2>
          <table className="w-full border-collapse bg-white shadow-md">
            <thead>
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">Brand</th>
                <th className="border p-2">Model</th>
                <th className="border p-2">Current Bid</th>
                <th className="border p-2">Time Remaining</th>
              </tr>
            </thead>
            <tbody>
              {auctions.map((auction) => (
                <tr key={auction.auctionId}>
                  <td className="border p-2">{auction.auctionId}</td>
                  <td className="border p-2">{auction.brand}</td>
                  <td className="border p-2">{auction.model}</td>
                  <td className="border p-2">${auction.currentBid}</td>
                  <td className="border p-2">{auction.timeRemaining}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Users Table */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">All Users</h2>
          <table className="w-full border-collapse bg-white shadow-md">
            <thead>
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border p-2">{user.id}</td>
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bids Table */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">All Bids</h2>
          <table className="w-full border-collapse bg-white shadow-md">
            <thead>
              <tr>
                <th className="border p-2">Bid ID</th>
                <th className="border p-2">Auction ID</th>
                <th className="border p-2">Bidder ID</th>
                <th className="border p-2">Bid Amount</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid) => (
                <tr key={bid.bidId}>
                  <td className="border p-2">{bid.bidId}</td>
                  <td className="border p-2">{bid.auctionId}</td>
                  <td className="border p-2">{bid.bidderId}</td>
                  <td className="border p-2">${bid.bidAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
