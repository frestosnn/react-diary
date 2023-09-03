import './App.css';
import Header from '../header/Header.jsx';
import Posts from '../posts/Posts.jsx';

import Popup from '../popup/popup.jsx';
import { useMemo, useState } from 'react';
import Filter from '../filter/Filter';
import PopupPost from '../popupPost/PopupPost';

function App() {
  const storedPosts = localStorage.getItem('userPosts');
  const initialPosts = storedPosts ? JSON.parse(storedPosts) : [];

  const [posts, setPosts] = useState(initialPosts);

  const [isOpen, setOpen] = useState(false);
  const [isPopupPostOpen, setPopupPostOpen] = useState(false);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const [selectedPost, setSelectedPost] = useState({});

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts; // Вернуть исходный массив, если сортировка не выбрана
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts]);

  function handlePopupOpen() {
    setOpen(true);
  }

  function handlePopupPostOpen() {
    setPopupPostOpen(true);
  }

  function closePopup() {
    setOpen(false);
    setPopupPostOpen(false);
    setSelectedPost({});
  }

  function createPost(newPost) {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);

    // Обновление данных в LocalStorage
    localStorage.setItem('userPosts', JSON.stringify(updatedPosts));
  }

  function removePost(card) {
    const updatedPosts = posts.filter(p => p.id !== card.id);
    setPosts(updatedPosts);

    // Обновление данных в LocalStorage
    localStorage.setItem('userPosts', JSON.stringify(updatedPosts));
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

      <PopupPost state={isPopupPostOpen} post={selectedPost} closePopup={closePopup}></PopupPost>
    </>
  );
}

export default App;
