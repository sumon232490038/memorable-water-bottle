import "./Bottle.css";
import PropTypes from "prop-types";
const Bottle = ({ bottle, handlePurchase }) => {
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <h3>Name: {name}</h3>
      <div>
        <img src={img} alt="" />
      </div>
      <h3>Price: ${price}</h3>
      <button
        onClick={() => {
          handlePurchase(bottle);
        }}
      >
        Purchase
      </button>
    </div>
  );
};
Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handlePurchase: PropTypes.func.isRequired,
};
export default Bottle;
