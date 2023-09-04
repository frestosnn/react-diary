import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Выберите место для хранения состояния, в данном случае - localStorage

import popupAddPostReduser from './popupReduser';
import popupOpenPostReduser from './popupOpenPost';
import postsReducer from './posts';

const persistConfig = {
  key: 'root', // Ключ для сохранения данных
  storage // Место для хранения (localStorage)
};

const rootReducer = combineReducers({
  popupAddPost: popupAddPostReduser,
  popupOpenPost: popupOpenPostReduser,
  posts: postsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);
