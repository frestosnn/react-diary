import './add-card.css';
import { useSelector, useDispatch } from 'react-redux';

function AddCard() {
  const popup = useSelector(state => state.popupAddPost.isPopupAddPostOpen);
  const dispatch = useDispatch();

  const handlePopupOpen = () => {
    dispatch({ type: 'IS_POPUP_OPEN', payload: {} });
  };

  return (
    <div className="add-card">
      <button className="add-card__button" onClick={() => handlePopupOpen()}>
        Добавить новую запись
      </button>
    </div>
  );
}

export default AddCard;
