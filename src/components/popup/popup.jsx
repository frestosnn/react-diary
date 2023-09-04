import './popup.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isPopupAddClosedAction } from '../../store/popupReduser';

function Popup({ createPost }) {
  const popup = useSelector(state => state.popupAddPost.isPopupAddPostOpen);
  const dispatch = useDispatch();

  const [inputName, setInputName] = useState('');
  const [inputText, setInputText] = useState('');

  const addNewPost = evt => {
    evt.preventDefault();

    const date = new Date().toLocaleDateString();

    const newPost = {
      id: Date.now(),
      title: inputName,
      text: inputText,
      createdAt: date
    };

    if (inputName && inputText) {
      createPost(newPost);
      setInputName('');
      setInputText('');
      handlePopupClose();
    }
  };

  const handlePopupClose = () => {
    dispatch(isPopupAddClosedAction());
  };

  return (
    <div className={`popup ${popup ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__button-delete" onClick={() => handlePopupClose()}></button>
        <form className="popup__form">
          <h2 className="popup__title">Добавить новую запись</h2>
          <input
            className="popup__input popup__input_type_title"
            placeholder="Название записи"
            value={inputName}
            onChange={e => setInputName(e.target.value)}
          ></input>
          <input
            className="popup__input"
            placeholder="Описание"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          ></input>
          <button className="popup__button-save" onClick={addNewPost}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
