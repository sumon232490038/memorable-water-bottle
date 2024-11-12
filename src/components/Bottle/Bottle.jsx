import "./Bottle.css";
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

export default Bottle;
