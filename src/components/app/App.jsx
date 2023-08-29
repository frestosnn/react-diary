import './App.css';
import Header from '../header/Header.jsx';
import Card from '../card/Card.jsx';
import AddCard from '../add-card/add-card.jsx';
import Popup from '../popup/popup.jsx';
import { useState } from 'react';

function App() {
  const storedPosts = localStorage.getItem('userPosts');
  const initialPosts = storedPosts ? JSON.parse(storedPosts) : [];

  const [posts, setPosts] = useState(initialPosts);

  const [isOpen, setOpen] = useState(false);

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

      <section className="cards">
        {posts.length !== 0 ? (
          posts.map(item => <Card key={item.id} card={item} removePost={removePost} />)
        ) : (
          <h2>К сожалению, добавленные записи отсутствуют</h2>
        )}
      </section>
    </>
  );
}

export default App;
