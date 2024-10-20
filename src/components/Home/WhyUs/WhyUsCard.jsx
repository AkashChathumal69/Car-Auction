
import PropTypes from 'prop-types';

const WhyUsCard = ({ icon, title }) => {
  return (
    <div className="text-center p-8 space-y-4 bg-slate-100 hover:bg-secondary hover:text-white transition duration-200 ease-in-out rounded-md cursor-pointer">
      {icon}
      <h1 className=" text-primary text-3xl font-bold">{title}</h1>
      <p className=" text-sm">
      Join our community of happy drivers. With thousands of successful auctions and glowing testimonials, BidWheel has a track record of turning car enthusiasts into satisfied owners. Your automotive happiness is our top priority.
      </p>
    </div>
  );
};

WhyUsCard.propTypes = {
  icon: PropTypes.element.isRequired, // Assuming 'icon' is a JSX element
  title: PropTypes.string.isRequired,  // Assuming 'title' is a string
};

export default WhyUsCard;
