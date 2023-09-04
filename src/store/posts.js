const initialPosts = {
  posts: []
};

const postsReducer = (state = initialPosts, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return { ...state, posts: [...state.posts, action.payload] };
    case 'REMOVE_POST':
      return { ...state, posts: state.posts.filter(p => p.id !== action.payload.id) };
    default:
      return state;
  }
};

export default postsReducer;
