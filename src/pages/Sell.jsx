import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreateListing from "../components/Sell/CreateListing";
import ManageListing from "../components/Sell/ManageListing";

const Services = () => {
  return (
    <>
      <Navbar />
      <CreateListing />
      <ManageListing/>
      <Footer />
    </>
  );
};

export default Services;
