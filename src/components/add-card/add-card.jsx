import './add-card.css';

function AddCard({ handlePopupOpen }) {
  return (
    <div className="add-card">
      <button className="add-card__button" onClick={handlePopupOpen}>
        Добавить новую запись
      </button>
    </div>
  );
}

export default AddCard;
