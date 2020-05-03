import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
	_state: {
		profilePage: {
			newPostText: "alef.ru",
			posts: [
				{ id: 1, text: "hi from Vasya", likes: 11 },
				{ id: 2, text: "hello from Petya", likes: 12 }
			]
		},
		dialogsPage: {
			newMessageText: "",
			dialogs: [
				{ id: 1, name: "Vasya" },
				{ id: 2, name: "petya" }
			],
			messages: [
				{ id: 1, text: "первый message" },
				{ id: 2, text: "второй message" },
				{ id: 3, text: "третий message" }
			]
		},
		sidebarPage: {
			friends: [
				{ id: 1, name: "Lena", ava: "https://sun9-67.userapi.com/c10273/u137517627/a_6a708c6f.jpg?ava=1" },
				{ id: 2, name: "Aglaya", ava: "https://yt3.ggpht.com/a/AATXAJz7Ka0tfiy51FfiF4tlDYSEIJYj_Xp3Pcm6pQ=s900-c-k-c0xffffffff-no-rj-mo" },
				{ id: 3, name: "Artur", ava: "http://www.arturonline.ru/photo/poster3.jpg" }
			]
		}
	},
	getState() {
		return this._state;
	},
	_renderTree() {
		console.log('это никогда не сработает, потому что функцию renderTree() перегрузит subscribe()');
	},
	subscribe(observer) {
		this._renderTree = observer;
	},
	
	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._renderTree(this._state);

	}
};

window.store = store;
export default store;