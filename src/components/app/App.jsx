import './App.css';
import Header from '../header/Header.jsx';
import Posts from '../posts/Posts.jsx';
import Popup from '../popup/popup.jsx';
import { useMemo, useState, useEffect } from 'react';
import Filter from '../filter/Filter';
import PopupPost from '../popupPost/PopupPost';
import { useDispatch, useSelector } from 'react-redux';
import { addPostAction, removePostAction, renderPostsAction } from '../../store/posts';

function App() {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [selectedPost, setSelectedPost] = useState({});
  const [shouldUpdatePosts, setShouldUpdatePosts] = useState(false);

  useEffect(() => {
    const localPosts = localStorage.getItem('userPosts');

    if (localPosts) {
      dispatch(renderPostsAction(JSON.parse(localPosts)));
    }
  }, [dispatch]);

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
  function updatePost(updatedPost) {
    const updatedPosts = posts.map(post => {
      if (post && post.id === updatedPost.id) {
        return updatedPost; // обновляем существующий пост
      }
      return post; // остальные посты оставляем без изменений
    });

    setSelectedPost(updatedPost);
  }

  return (
    <>
      <Header />
      <Filter filter={filter} setFilter={setFilter} />
      <Posts removePost={removePost} onButtonClick={setSelectedPost} />

      <Popup createPost={createPost}></Popup>

      <PopupPost
        post={selectedPost}
        onUpdatePost={updatePost}
        onEdit={setShouldUpdatePosts}
      ></PopupPost>
    </>
  );
}

export default App;
