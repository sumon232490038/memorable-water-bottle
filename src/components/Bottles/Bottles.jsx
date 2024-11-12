import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addCard, getStoredCart } from "../../utilities/bottleLs";
import Card from "../Card/Card";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  useEffect(() => {
    if (bottles.length) {
      const storeCard = getStoredCart();
      let saveCard = [];
      for (const id of storeCard) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          saveCard.push(bottle);
        }
      }
      setCard(saveCard);
    }
  }, [bottles]);
  const handlePurchase = (bottle) => {
    const newCard = [...card, bottle];
    setCard(newCard);
    addCard(bottle.id);
  };
  return (
    <div>
      <h2>Bottles Available: {bottles.length}</h2>
      <Card card={card}></Card>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handlePurchase={handlePurchase}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
