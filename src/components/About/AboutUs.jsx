
import Vision from "./Vision";
import Approch from "./Approch";
import FeedbackForm from "./FeedbackForm";

const AboutUs = () => {
  return (
    <div className=" container pt-24">
      <div>
        <h1 className=" font-bold text-4xl text-center">
          About <span className=" text-primary">US</span>
        </h1>
      </div>

      <Vision />
      <Approch />
      <FeedbackForm/>
    </div>
  );
};

export default AboutUs;
