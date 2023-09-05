import './App.css';
import Header from '../header/Header.jsx';
import Posts from '../posts/Posts.jsx';
import Popup from '../popup/popup.jsx';
import { useMemo, useState, useEffect } from 'react';
import Filter from '../filter/Filter';
import PopupPost from '../popupPost/PopupPost';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPostAction,
  removePostAction,
  renderPostsAction,
  updatePostAction
} from '../../store/posts';

function App() {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({ sort: '', query: '' });

  useEffect(() => {
    //получаем данные из хранилища
    const localPosts = localStorage.getItem('userPosts');

    if (localPosts) {
      dispatch(renderPostsAction(Array.from(JSON.parse(localPosts))));
    }
  }, []);

  /*//сотрировка постов
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

  //функция закрытия попапов
  function closePopup() {
    setOpen(false);
    setPopupPostOpen(false);
    setSelectedPost({});
  }   */

  //добавление нового поста
  function createPost(newPost) {
    dispatch(addPostAction(newPost));

    const updatedPosts = [...posts, newPost];
    localStorage.setItem('userPosts', JSON.stringify(updatedPosts));
  }

  //функция удаления поста
  function removePost(card) {
    dispatch(removePostAction(card));

    const updatedPosts = posts.filter(post => post.id !== card.id);
    localStorage.setItem('userPosts', JSON.stringify(updatedPosts));
  }

  //функция редактирования поста
  function updatePost(post) {
    dispatch(updatePostAction(post));

    // Сохраняем обновленный пост в localStorage
    const updatedPosts = JSON.parse(localStorage.getItem('userPosts'));
    const updatedIndex = updatedPosts.findIndex(p => p.id === post.id);

    if (updatedIndex !== -1) {
      updatedPosts[updatedIndex] = post;
      localStorage.setItem('userPosts', JSON.stringify(updatedPosts));
    }
  }

  return (
    <>
      <Header />
      <Filter filter={filter} setFilter={setFilter} />
      <Posts removePost={removePost} />
      <Popup createPost={createPost}></Popup>
      <PopupPost onUpdatePost={updatePost}></PopupPost>
    </>
  );
}

export default App;
