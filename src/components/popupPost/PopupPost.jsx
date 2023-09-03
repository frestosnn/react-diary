import React, { useState } from 'react';
import './popupPost.css';

function PopupPost({ state, post, closePopup }) {
  const [isEditing, setEditing] = useState(false);

  const [editedPost, setEditedPost] = useState({ ...post });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSubmit = e => {
    e.preventDefault();

    post.title = editedPost.title;
    post.text = editedPost.text;

    setEditing(false);
  };

  return (
    <div className={`popup ${state ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_size_big">
        <button className="popup__button-delete" onClick={closePopup}></button>

        {isEditing ? (
          <div>
            <form>
              <input
                value={editedPost.title}
                onChange={e => setEditedPost({ ...editedPost, title: e.target.value })}
              ></input>
              <input
                value={editedPost.text}
                onChange={e => setEditedPost({ ...editedPost, text: e.target.value })}
              ></input>
              <button onClick={handleSubmit}>Сохранить</button>
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
