
import PropTypes from 'prop-types';

const CarNewsCard = ({ id, img, desc }) => {
  return (
    <div
      className=" border-2 border-secondary rounded-md cursor-pointer"
      key={id}
    >
      <img src={img} alt="img" />
      <h3 className=" font-semibold text-lg p-2">{desc}</h3>
    </div>
  );
};

CarNewsCard.propTypes = {
  id: PropTypes.element.isRequired, // Assuming 'icon' is a JSX element
  img: PropTypes.string.isRequired,  // Assuming 'title' is a string
  desc: PropTypes.string.isRequired,
};
export default CarNewsCard;
