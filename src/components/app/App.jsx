import './App.css';
import Header from '../header/Header.jsx';
import Posts from '../posts/Posts.jsx';
import AddCard from '../add-card/add-card.jsx';
import Popup from '../popup/popup.jsx';
import { useMemo, useState } from 'react';
import Filter from '../filter/Filter';

function App() {
  const storedPosts = localStorage.getItem('userPosts');
  const initialPosts = storedPosts ? JSON.parse(storedPosts) : [];

  const [posts, setPosts] = useState(initialPosts);

  const [isOpen, setOpen] = useState(false);

  const [filter, setFilter] = useState({ sort: '', query: '' });

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

  function closePopup() {
    setOpen(false);
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
      <AddCard handlePopupOpen={handlePopupOpen} />
      <Popup state={isOpen} closePopup={closePopup} createPost={createPost}></Popup>
      <Filter filter={filter} setFilter={setFilter} />
      <Posts posts={sortedAndSearchedPosts} removePost={removePost} />
    </>
  );
}

export default App;
