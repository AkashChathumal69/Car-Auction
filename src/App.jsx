import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Sell from "./pages/Sell";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import MyAccount from "./components/MyAccount";
import CreateListing from "./components/Sell/CreateListing";
import ManageListing from "./components/Sell/ManageListing";
import { PrivateRouteLogin } from "./utils/PrivateRoute"; // Correct import statement
import PrivateRoute from "./utils/PrivateRoute"; // Correct import statement
import ImageUpload from "./Function/imageUploader";
import AuctionPage from "./components/Buy/BiddingDetail/AuctionPage";
import CarAuctionListing from "./components/Buy/BiddingDetail/CarAuctionListing";
import WatchList from "./components/Buy/WatchList";
import PaymentSuccess from "./pages/PaymentSuccess";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/auction" element={<AuctionPage />} />
      <Route path="/car-detail/:carId" element={<CarAuctionListing />} />
      <Route
        path="/paymet-success/:checkoutSession"
        element={<PaymentSuccess />}
      />
      <Route path="/watchlist" element={<WatchList />} />
      <Route
        path="/sell"
        element={
          <PrivateRoute>
            <Sell />
          </PrivateRoute>
        }
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/imageUpload" element={<ImageUpload />} />
      <Route
        path="/login"
        element={
          <PrivateRouteLogin>
            <Login />
          </PrivateRouteLogin>
        }
      />
      <Route
        path="/myaccount"
        element={
          <PrivateRoute>
            <MyAccount />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-listing"
        element={
          <PrivateRoute>
            <CreateListing />
          </PrivateRoute>
        }
      />
      <Route
        path="/manage-listing"
        element={
          <PrivateRoute>
            <ManageListing />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
