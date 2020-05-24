import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import docType1Reducer from './doctype1-reducer';
import usersReducer from './users-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers(
	{
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		sidebarPage: sidebarReducer,
		docType1Page: docType1Reducer,
		usersPage: usersReducer
	}
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;