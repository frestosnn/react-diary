import React, { useState, useEffect } from 'react';
import './popupPost.css';

function PopupPost({ state, post, closePopup, onUpdatePost, onEdit }) {
  const [isEditing, setEditing] = useState(false);

  const [editedPost, setEditedPost] = useState({ ...post });

  // Инициализируем editedPost только при первом открытии режима редактирования
  useEffect(() => {
    if (isEditing) {
      setEditedPost({ ...post });
    }
  }, [isEditing, post]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Обновляем post с новыми данными из editedPost
    const updatedPost = { ...post, title: editedPost.title, text: editedPost.text };
    onUpdatePost(updatedPost); // Вызываем функцию onUpdatePost для обновления post

    setEditing(false);
    onEdit(true);
  };

  return (
    <div className={`popup ${state ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_size_big">
        <button className="popup__button-delete" onClick={closePopup}></button>

        {isEditing ? (
          <div className="popup_post">
            <form className="popup__form">
              <h1 className="popup__title">Изменить пост:</h1>
              <input
                className="popup__input popup__input_type_title"
                value={editedPost.title || ''}
                onChange={e => setEditedPost({ ...editedPost, title: e.target.value })}
              ></input>
              <textarea
                className="popup__input"
                value={editedPost.text || ''}
                onChange={e => setEditedPost({ ...editedPost, text: e.target.value })}
              ></textarea>
              <button className="popup__button-save" onClick={handleSubmit}>
                Сохранить
              </button>
            </form>
          </div>
        ) : (
          <>
            <h1 className="popup__title popup__title_size_big">{post.title}</h1>
            <p className="popup__text">{post.text}</p>
            <span className="popup__date">{post.createdAt}</span>
            <button className="popup__edit" onClick={handleEditClick}>
              Редактировать пост
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default PopupPost;
