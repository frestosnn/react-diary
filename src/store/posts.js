const initialPosts = {
  posts: []
};

const ADD_POST = 'ADD_POST';
const REMOVE_POST = 'REMOVE_POST';
const RENDER_POSTS = 'RENDER_POSTS';

const postsReducer = (state = initialPosts, action) => {
  switch (action.type) {
    case RENDER_POSTS:
      return { ...state, posts: action.payload };
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case REMOVE_POST:
      return { ...state, posts: state.posts.filter(p => p.id !== action.payload.id) };
    default:
      return state;
  }
};

export default postsReducer;

export const renderPostsAction = payload => ({ type: RENDER_POSTS, payload });
export const addPostAction = payload => ({ type: ADD_POST, payload });
export const removePostAction = payload => ({ type: REMOVE_POST, payload });
