import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';
import RootReducer from './reducer';

const rootReducer = combineReducers({
	root: RootReducer,
});

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
	let store = createStore(persistedReducer, applyMiddleware(thunk));
	let persistor = persistStore(store);
	return { store, persistor };
};
