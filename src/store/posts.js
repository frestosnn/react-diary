const initialPosts = {
  posts: []
};

const ADD_POST = 'ADD_POST';
const REMOVE_POST = 'REMOVE_POST';
const RENDER_POSTS = 'RENDER_POSTS';
const UPDATE_POST = 'UPDATE_POST';

const postsReducer = (state = initialPosts, action) => {
  switch (action.type) {
    case RENDER_POSTS:
      return { ...state, posts: action.payload };

    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case REMOVE_POST:
      return { ...state, posts: state.posts.filter(p => p.id !== action.payload.id) };

    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            return action.payload; // Обновляем существующий пост
          }
          return post; // Остальные посты оставляем без изменений
        })
      };

    default:
      return state;
  }
};

export default postsReducer;

export const renderPostsAction = payload => ({ type: RENDER_POSTS, payload });
export const addPostAction = payload => ({ type: ADD_POST, payload });
export const removePostAction = payload => ({ type: REMOVE_POST, payload });
export const updatePostAction = payload => ({ type: UPDATE_POST, payload });
