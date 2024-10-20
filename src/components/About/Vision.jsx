
import img from "../../assets/img/vision.jpg";

const Vision = () => {
  return (
    <div className=" flex flex-col justify-center md:flex-row items-center gap-5 mt-16">
      {/* img section  */}
      <div className="w-full md:w-2/5">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>

      {/* content section  */}
      <div className="w-full md:w-2/4 space-y-4">
        <h1 className=" text-4xl font-bold ">Our Vision</h1>

        <h2 className=" font-semibold text-lg lg:text-2xl">
        Driving Dreams to Reality..
        </h2>
        <p className=" text-sm lg:text-base">
        At BidWheels, we envision a world where finding your perfect vehicle is an exciting journey, not a daunting task. We aim to revolutionize the car buying experience by creating a transparent, accessible, and thrilling online auction platform.
        </p>
      </div>
    </div>
  );
};

export default Vision;
