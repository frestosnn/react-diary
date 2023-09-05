import React, { useState, useEffect } from 'react';
import './popupPost.css';
import { useDispatch, useSelector } from 'react-redux';
import { isPopupOpenPostClosedAction } from '../../store/popupOpenPost';
import {
  changePostNameAction,
  changePostTextAction,
  setPostAction
} from '../../store/editPostReducer';

function PopupPost({ onUpdatePost }) {
  const popupOpenPost = useSelector(state => state.popupOpenPost.isPopupOpenPost);
  const selectedPost = useSelector(state => state.selectedPost.selectedPost);
  const editedPost = useSelector(state => state.editedPost.editedPost);

  const dispatch = useDispatch();

  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    if (isEditing) {
      dispatch(setPostAction(selectedPost));
    }
  }, [isEditing, selectedPost]);

  const handleSubmit = e => {
    e.preventDefault();
    onUpdatePost(editedPost); // Вызываем функцию onUpdatePost для обновления post
    setEditing(false);
  };

  const handleClosePopup = () => {
    dispatch(isPopupOpenPostClosedAction());
  };

  const handleChangeName = e => {
    dispatch(changePostNameAction(e.target.value));
  };

  const handleChangeText = e => {
    dispatch(changePostTextAction(e.target.value));
  };
  return (
    <div className={`popup ${popupOpenPost ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_size_big">
        <button className="popup__button-delete" onClick={() => handleClosePopup()}></button>

        {isEditing ? (
          <div className="popup_post">
            <form className="popup__form">
              <h1 className="popup__title">Изменить пост:</h1>
              <input
                className="popup__input popup__input_type_title"
                value={editedPost.title || ''}
                onChange={handleChangeName}
              ></input>
              <textarea
                className="popup__input"
                value={editedPost.text || ''}
                onChange={handleChangeText}
              ></textarea>
              <button className="popup__button-save" onClick={handleSubmit}>
                Сохранить
              </button>
            </form>
          </div>
        ) : (
          <>
            <h1 className="popup__title popup__title_size_big">{editedPost.title}</h1>
            <p className="popup__text">{editedPost.text}</p>
            <span className="popup__date">{editedPost.createdAt}</span>
            <button className="popup__edit" onClick={() => setEditing(true)}>
              Редактировать пост
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default PopupPost;
