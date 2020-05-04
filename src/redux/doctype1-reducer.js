const UPDATE_NEW_DOCUMENT = 'UPDATE-NEW-DOCUMENT';
const SAVE_DOCUMENT = 'SAVE-DOCUMENT';

let initialState = {
		newDocumentText: "",
		type1Documents: [
			{ id: 1, code: "1-dt1", text: "text id=1" },
			{ id: 2, code: "2-dt1", text: "text id=2" }
		],
}

const docType1Reducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_DOCUMENT:
			let newDocument = { id: 3, code: "3-dt1", text: state.newDocumentText };
			return {...state,
			type1Documents: [...state.type1Documents, newDocument],
			newDocumentText: ''};
		case UPDATE_NEW_DOCUMENT:
			return {...state,
			newDocumentText: action.newText};
		default:
			return state;
	}
};


export const updateNewDocumentAC = (text) =>  
	({ type: UPDATE_NEW_DOCUMENT, newText: text });
export const saveDocumentAC = () => ({ type: SAVE_DOCUMENT });

export default docType1Reducer;