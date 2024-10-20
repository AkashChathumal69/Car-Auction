
import img from "../../assets/img/approch.jpg";

const Approch = () => {
  return (
    <div className=" flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
      {/* content section  */}
      <div className="w-full md:w-2/4 space-y-4">
        <h1 className=" text-4xl font-bold ">Our Approach</h1>

        <h2 className=" font-semibold text-lg lg:text-2xl">
        Accelerating Trust and Efficiency...
        </h2>
        <p className=" text-sm lg:text-base">
        Our approach focuses on three key pillars:
        </p>
        <p className=" text-sm lg:text-base">
        
        <p>Providing comprehensive vehicle histories and detailed inspections.</p>
        <p>Creating an intuitive platform that caters to both seasoned collectors and first-time buyers.</p>
        <p>Leveraging cutting-edge technology to offer virtual tours and real-time bidding experiences.</p>
        </p>
      </div>

      {/* img section  */}
      <div className="w-full md:w-2/5">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Approch;
