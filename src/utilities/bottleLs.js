const getStoredCart = () => {
  const card2 = localStorage.getItem("card");
  if (card2) {
    return JSON.parse(card2);
  }
  return [];
};
const saveCard = (card) => {
  const newCard = JSON.stringify(card);
  localStorage.setItem("card", newCard);
};

const addCard = (id) => {
  const card = getStoredCart();
  card.push(id);
  saveCard(card);
};

export { addCard, getStoredCart };
