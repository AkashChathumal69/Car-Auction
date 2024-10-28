
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" mt-14 bg-secondary text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-2xl pb-4">BidWheels</h1>
          <p className=" mb-2 text-sm">
          In the year 2003 BidWheels Auto Trading revved up the corporate engines with a mission to be the dominant force in the automobile industry in Sri Lanka.
          </p>
        </div>
        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            Pages Links
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/about"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              About Us
            </Link>
            <Link
              to="/auction"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Live Auction
            </Link>
            <Link
              to="/car-detail/:carId"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Bid Now
            </Link>
          </div>
        </div>

        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            Used Cars for sale
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Toyota CHR
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Audi A series
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Honda Civic
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Nissan GTR
            </Link>
          </div>
        </div>

        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            Learn More
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              User-friendly
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Search and Filters
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Secure Payment
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Geolocation Services
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-primary font-semibold mx-2">
            NSBM programmers
          </span>
          | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
