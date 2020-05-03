const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
		newPostText: "alef.ru",
		posts: [
			{ id: 1, key:1, text: "hi from Vasya", likes: 11 },
			{ id: 2, key:2, text: "hello from Petya", likes: 12 }
		]
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
		default:
			return state;
	}
};

export const updateNewPostActionCreator = (text) =>  
	({ type: UPDATE_NEW_POST, newText: text });
export const addPostActionCreator = () => ({ type: ADD_POST });

export default profileReducer;