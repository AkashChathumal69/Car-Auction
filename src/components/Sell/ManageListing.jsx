import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AuthContext from "../../Context/AuthContext.js";

const ManageListing = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);

  // Fetch auctions from API
  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch("http://localhost:5175/GetUserAuctions", {
          headers: {
            Authorization: `Bearer ${user}`, // Use user token for authentication
          },
        });
        if (response.ok) {
          const data = await response.json();
          setListings(data);
        } else {
          console.error("Failed to fetch auctions");
        }
      } catch (error) {
        console.error("Error fetching auctions:", error);
      }
    };

    fetchAuctions();
  }, [user]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5175/api/actions/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user}`, // Use user token for authentication
          },
        }
      );

      if (response.ok) {
        // Update the listings state by filtering out the deleted auction
        setListings(listings.filter((listing) => listing.auctionId !== id));
        console.log("Auction deleted successfully");
      } else {
        console.error("Failed to delete auction");
      }
    } catch (error) {
      console.error("Error deleting auction:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Manage Listings</h2>
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border p-2">Brand</th>
              <th className="border p-2">Model</th>
              <th className="border p-2">Year</th>
              <th className="border p-2">Mileage</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing.auctionId}>
                <td className="border p-2">{listing.brand}</td>
                <td className="border p-2">{listing.model}</td>
                <td className="border p-2">{listing.year}</td>
                <td className="border p-2">{listing.mileage}</td>
                <td className="border p-2">
                  <Link
                    to={`/edit-listing/${listing.auctionId}`}
                    className="mr-2 text-blue-500"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(listing.auctionId)}
                    className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default ManageListing;
