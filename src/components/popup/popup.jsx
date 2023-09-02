import './popup.css';
import { useState } from 'react';

function Popup({ state, closePopup, createPost }) {
  const [inputName, setInputName] = useState('');
  const [inputText, setInputText] = useState('');

  function addNewPost(evt) {
    evt.preventDefault();

    const date = new Date().toLocaleDateString();
    const newPost = {
      id: Date.now(),
      title: inputName,
      text: inputText,
      createdAt: date
    };

    createPost(newPost);
    setInputName('');
    setInputText('');
    closePopup();
  }

  return (
    <div className={`popup ${state ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__button-delete" onClick={closePopup}>
          Закрыть
        </button>
        <form>
          <h2 className="popup__title">Добавить новую запись</h2>
          <input
            className="popup__input"
            placeholder="Название статьи"
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
