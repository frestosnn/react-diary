import './card.css';

function Card({ card, removePost }) {
  return (
    <div className="card">
      <h3 className="card__title">{card.title}</h3>
      <p className="card__text">{card.text}</p>
      <button className="card__button" onClick={() => removePost(card)}>
        Удалить
      </button>
    </div>
  );
}

export default Card;
