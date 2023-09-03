import './App.css';
import Header from '../header/Header.jsx';
import Posts from '../posts/Posts.jsx';
import Popup from '../popup/popup.jsx';
import { useMemo, useState, useEffect } from 'react';
import Filter from '../filter/Filter';
import PopupPost from '../popupPost/PopupPost';

function App() {
  //посты из хранилища
  const storedPosts = localStorage.getItem('userPosts');
  const initialPosts = storedPosts ? JSON.parse(storedPosts) : [];

  //стейты
  const [posts, setPosts] = useState(initialPosts);
  const [isOpen, setOpen] = useState(false);
  const [isPopupPostOpen, setPopupPostOpen] = useState(false);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [selectedPost, setSelectedPost] = useState({});
  const [shouldUpdatePosts, setShouldUpdatePosts] = useState(false);

  //функция добавления данных в Local Storage
  function updateLocalStorage(updatedPosts) {
    localStorage.setItem('userPosts', JSON.stringify(updatedPosts));
  }

  //сотрировка постов
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts; // Вернуть исходный массив, если сортировка не выбрана
  }, [filter.sort, posts]);

  //поиск постов
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      post => post && post.title && post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  //функция открытия попапа
  function handlePopupOpen() {
    setOpen(true);
  }

  //функция открытия попапа-постов
  function handlePopupPostOpen() {
    setPopupPostOpen(true);
  }

  //функция закрытия попапов
  function closePopup() {
    setOpen(false);
    setPopupPostOpen(false);
    setSelectedPost({});
  }

  //добавление нового поста
  function createPost(newPost) {
    const updatedPosts = [...sortedAndSearchedPosts, newPost];
    setPosts(updatedPosts);

    // Обновление данных в LocalStorage
    updateLocalStorage(updatedPosts);
  }

  //функция удаления поста
  function removePost(card) {
    const updatedPosts = sortedAndSearchedPosts.filter(p => p.id !== card.id);
    setPosts(updatedPosts);

    // Обновление данных в LocalStorage
    updateLocalStorage(updatedPosts);
  }

  //функция редактирования поста
  function updatePost(updatedPost) {
    const updatedPosts = sortedAndSearchedPosts.map(post => {
      if (post && post.id === updatedPost.id) {
        return updatedPost; // обновляем существующий пост
      }
      return post; // остальные посты оставляем без изменений
    });

    setSelectedPost(updatedPost);
    setPosts(updatedPosts);

    // Обновление данных в LocalStorage
    updateLocalStorage(updatedPosts);
  }

  return (
    <>
      <Header />
      <Filter filter={filter} setFilter={setFilter} handlePopupOpen={handlePopupOpen} />
      <Posts
        posts={sortedAndSearchedPosts}
        removePost={removePost}
        handlePopupPostOpen={handlePopupPostOpen}
        onButtonClick={setSelectedPost}
      />
      <Popup state={isOpen} closePopup={closePopup} createPost={createPost}></Popup>

      <PopupPost
        state={isPopupPostOpen}
        post={selectedPost}
        closePopup={closePopup}
        onUpdatePost={updatePost}
        onEdit={setShouldUpdatePosts}
      ></PopupPost>
    </>
  );
}

export default App;
