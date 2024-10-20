import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Sell from "./pages/Sell";
import SignUp from './components/SignUp';
import Login from './components/Login';
import MyAccount from "./components/MyAccount";
import CreateListing from "./components/Sell/CreateListing";
import ManageListing from "./components/Sell/ManageListing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/create-listing" element={<CreateListing/>}/>
          <Route path="/manage-listing" element={<ManageListing/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
