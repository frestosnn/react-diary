import './card.css';

function Card({ card, removePost, handlePopupPostOpen, onButtonClick }) {
  const date = card.createdAt;

  const setPostInfo = () => {
    handlePopupPostOpen();
    onButtonClick(card);
  };

  return (
    <div className="card">
      <h3 className="card__title">{card.title}</h3>
      <p className="card__text">{card.text}</p>
      <div className="card__buttons">
        <button className="card__button card__button_type_open" onClick={setPostInfo}>
          Просмотр
        </button>
        <button className="card__button" onClick={() => removePost(card)}>
          Удалить
        </button>
      </div>
      <p className="card__date">Дата создания записи: {date} </p>
    </div>
  );
}

export default Card;
