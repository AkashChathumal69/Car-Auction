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
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<Cars />} />
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
