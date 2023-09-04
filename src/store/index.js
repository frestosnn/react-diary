import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import popupAddPostReduser from './popupReduser';
import popupOpenPostReduser from './popupOpenPost';
import postsReducer from './posts';

const rootReducer = combineReducers({
  popupAddPost: popupAddPostReduser,
  popupOpenPost: popupOpenPostReduser,
  posts: postsReducer
});

export const store = createStore(rootReducer, composeWithDevTools());
