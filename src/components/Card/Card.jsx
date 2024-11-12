import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ card, handleRemoveID }) => {
  return (
    <div>
      <h3>Card:{card.length}</h3>
      <div className="card-container">
        {card.map((bottle) => (
          <div key={bottle.id}>
            <img key={bottle.id} src={bottle.img}></img>
            <button onClick={() => handleRemoveID(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};
Card.propTypes = {
  card: PropTypes.array.isRequired,
  handleRemoveID: PropTypes.func.isRequired,
};
export default Card;
