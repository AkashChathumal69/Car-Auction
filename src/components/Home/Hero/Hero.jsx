
import img from "../../../assets/img/hero.jpg";

const Hero = () => {
  return (
    <div className=" bg-black text-white">
      <div className=" h-screen container flex flex-col justify-center md:flex-row items-center">
        {/* content section  */}
        <div className=" w-full md:w-2/4 space-y-5 mt-10">
          <h1 className=" text-4xl lg:text-6xl font-bold leading-tight">
            Find Your Perfect Ride Today
          </h1>
          <p className=" text-lg lg:text-2xl font-medium">
            Over 1000+ New Cars Available Here
          </p>
          <p className=" text-sm lg:text-base">
          Rev up your dreams. Bid on legends. Drive away victorious. <p>Your perfect ride awaits in our high-octane automotive playground.</p>
          </p>

          <div className="flex gap-8">
            <button className=" bg-primary py-1 px-4 rounded-md hover:scale-95 transition duration-150 ease-linear">
              Explore More
            </button>
            <button className="border-2 border-primary py-1 px-4 rounded-md hover:bg-primary transition duration-200 ease-linear">
              See Cars
            </button>
          </div>
        </div>

        {/* img section  */}
        <div className=" w-full md:w-2/4 mt-4">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
