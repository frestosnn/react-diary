const initialSelectedPost = {
  selectedPost: {}
};

const SELECT_POST = 'SELECT_POST';

const selectedPostReducer = (state = initialSelectedPost, action) => {
  switch (action.type) {
    case SELECT_POST:
      return { ...state, selectedPost: action.payload };
    default:
      return state;
  }
};

export default selectedPostReducer;
export const selectPostAction = payload => ({ type: SELECT_POST, payload });
