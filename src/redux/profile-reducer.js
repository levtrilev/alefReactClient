import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_PROFILE = 'GET_PROFILE';

let initialState = {
	newPostText: "alef.ru",
	posts: [
		{ id: 1, key: 1, text: "hi from Vasya", likes: 11 },
		{ id: 2, key: 2, text: "hello from Petya", likes: 12 }
	],
	profile: null,
	isFetching: true,
	status: ""
};


const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 3, key:3, text: state.newPostText, likes: 0
			};
			return {...state,
			posts: [...state.posts, newPost],
			newPostText: ''};
		case UPDATE_NEW_POST:
			return {...state,
			newPostText: action.newText};
		case SET_PROFILE:
			return {...state,
				profile: action.profile};
			default:
			return state;
	}
};

export const updateNewPostActionCreator = (text) =>  
	({ type: UPDATE_NEW_POST, newText: text });
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export const getProfile = (userId) => {
	return (dispatch) => {
		profileAPI.getProfile(userId).then( data => {
			dispatch(setProfile(data));
		});
	}
} 


export default profileReducer;