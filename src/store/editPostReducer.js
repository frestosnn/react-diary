const initialEditedPost = {
  editedPost: {}
};

const CHANGE_POST_NAME = 'CHANGE_POST_NAME';
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT';
const SET_POST = 'SET_POST';

const editPostReducer = (state = initialEditedPost, action) => {
  switch (action.type) {
    case SET_POST:
      return { ...state, editedPost: action.payload };
    case CHANGE_POST_NAME:
      return { ...state, editedPost: { ...state.editedPost, title: action.payload } };
    case CHANGE_POST_TEXT:
      return { ...state, editedPost: { ...state.editedPost, text: action.payload } };
    default:
      return state;
  }
};

export default editPostReducer;

export const changePostNameAction = payload => ({ type: CHANGE_POST_NAME, payload });
export const changePostTextAction = payload => ({ type: CHANGE_POST_TEXT, payload });
export const setPostAction = payload => ({ type: SET_POST, payload });
