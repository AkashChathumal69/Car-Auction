import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const ManageListing = () => {
  const [listings, setListings] = useState([
    { id: 1, brand: "Toyota", model: "Corolla", year: 2018, mileage: 50000 },
    { id: 2, brand: "Honda", model: "Civic", year: 2020, mileage: 30000 },
  ]);

  const handleDelete = (id) => {
    setListings(listings.filter((listing) => listing.id !== id));
  };

  return (
    <><Navbar/>
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
            <tr key={listing.id}>
              <td className="border p-2">{listing.brand}</td>
              <td className="border p-2">{listing.model}</td>
              <td className="border p-2">{listing.year}</td>
              <td className="border p-2">{listing.mileage}</td>
              <td className="border p-2">
                
                <Link to={`/edit-listing/${listing.id}`} className="mr-2 text-blue-500">
                  Edit
                </Link>
                
                <button type="submit" onClick={() => handleDelete(listing.id)}  className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ManageListing;
