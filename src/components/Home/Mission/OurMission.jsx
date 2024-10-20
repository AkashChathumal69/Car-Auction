
import img from "../../../assets/img/mission.jpg";

const OurMission = () => {
  return (
    <div className="container my-10">
      <div>
        <h1 className=" font-bold text-4xl text-center">
          Our <span className=" text-primary">Mission</span>
        </h1>
      </div>

      <div className=" flex flex-col justify-center md:flex-row items-center gap-5 mt-8">
        {/* img section  */}
        <div className="w-full md:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>

        {/* content section  */}
        <div className="w-full md:w-2/4 space-y-4">
          <h1 className=" font-bold text-primary text-xl lg:text-3xl">
          To create a community where every journey is extraordinary.This serves as a mission statement.

          </h1>
          <h2 className=" font-semibold text-lg lg:text-2xl">
            Empower individuals to achieve sustainable mobility solutions and
            inspire a positive impact on the environment.
          </h2>
          <p className=" text-sm lg:text-base">
          Empower individuals to achieve sustainable mobility solutions and inspire a positive impact on the environment.This expands on the mission with a focus on sustainability
          </p>
          <p className=" text-sm lg:text-base">
          Follows the same styling as Paragraph 1, with placeholder text to be replaced with actual content, likely to further explain or describe the company’s mission, goals, or values.          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
