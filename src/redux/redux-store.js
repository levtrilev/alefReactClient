import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from "./sidebar-reducer";
import docType1Reducer from "./doctype1-reducer";


let reducers = combineReducers(
	{
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		sidebarPage: sidebarReducer,
		docType1Page: docType1Reducer
	}
);

let store = createStore(reducers);

export default store;