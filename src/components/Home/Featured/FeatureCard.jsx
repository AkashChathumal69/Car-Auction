
import PropTypes from 'prop-types';

const FeatureCard = ({ id, img, name, price }) => {
  return (
    <div
      className=" border-2 border-secondary bg-slate-100 text-black rounded-xl mb-2 cursor-pointer hover:scale-95 hover:bg-slate-200 transition duration-200 ease-linear"
      key={id}
    >
      <div>
        <img src={img} alt="img" className=" rounded-t-xl w-full" />
      </div>
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" font-semibold text-xl text-primary pt-2">{name}</h1>
        <div className=" flex gap-10 pt-2">
          <h2 className=" font-medium text-lg ">Starting at ${price}</h2>
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  id: PropTypes.element.isRequired, // Assuming 'icon' is a JSX element
  img: PropTypes.string.isRequired,  // Assuming 'title' is a string
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default FeatureCard;
