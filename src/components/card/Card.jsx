import './card.css';

function Card({ card, removePost }) {
  const date = card.createdAt;
  return (
    <div className="card">
      <h3 className="card__title">{card.title}</h3>
      <p className="card__text">{card.text}</p>
      <button className="card__button" onClick={() => removePost(card)}>
        Удалить
      </button>
      <p className="card__date">Дата создания записи: {date} </p>
    </div>
  );
}

export default Card;
