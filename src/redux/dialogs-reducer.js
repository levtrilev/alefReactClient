const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

const _updateNewMessage = (state, newText) => {
	return {
		...state,
		newMessageText: newText
	};
};
const _sendMessage = (state) => {
	return {
		...state, 
		messages: [...state.messages, {id: 4, text: state.newMessageText}],
		newMessageText: ''
	};
};

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
		let stateCopy;
		if (action.type === UPDATE_NEW_MESSAGE) {
			stateCopy = _updateNewMessage(state, action.newText);
		} else if (action.type === SEND_MESSAGE) {
			stateCopy = _sendMessage(state);
		} else
			return state;
	return stateCopy;
};

export const updateNewMessageActionCreator = (text) =>  
	({ type: UPDATE_NEW_MESSAGE, newText: text });
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;