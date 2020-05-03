const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
		users: [
			{ id: 1, key:1, followed: true, fullName: "Vasya Ch.", status: 'I am komdiv', location: { country: 'USA', city: 'Konakovo'} },
			{ id: 2, key:2, followed: false, fullName: "Petka P.", status: 'I am a petka', location: { country: 'USA', city: 'Konakovo'} }
		]
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			let stateCopy {...state,
				users: state.users.map(callbackfn u => u)
			};
		case UNFOLLOW:

		default:
			return state;
	}
};

export const follovAC = (userID, value) =>  
	({ type: FOLLOW, newValue: value, userID: userID });
export const unfollovAC = (userID, value) => ({ type: UNFOLLOW, newValue: value, userID: userID });

export default usersReducer;