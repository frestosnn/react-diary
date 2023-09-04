import './add-card.css';
import { useSelector, useDispatch } from 'react-redux';
import { isPopupAddOpenAction } from '../../store/popupReduser';

function AddCard() {
  const popup = useSelector(state => state.popupAddPost.isPopupAddPostOpen);
  const dispatch = useDispatch();

  const handlePopupOpen = () => {
    dispatch(isPopupAddOpenAction());
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
