import { usersAPI } from '../api/api';

const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const UNFOLLOW = 'UNFOLLOW';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
		users: [
			{ id: 1, key:1, followed: true, name: "Vasya Ch.", status: 'I am komdiv', location: { country: 'USA', city: 'Konakovo'} },
			{ id: 2, key:2, followed: false, name: "Petka P.", status: 'I am a petka', location: { country: 'USA', city: 'Konakovo'} }
		],
		pageSize: 20,
		pageNumber: 0,
		selectedPage: 3,
		totalUsersCount: 0,
		isFetching: false
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {...state, users: state.users.map(u => u) };
		case SET_USERS:
			return {
				...state,
				users: action.users
			}
			case SET_PAGE:
				return {
					...state,
					selectedPage: action.selectedPage
				}
			case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		case SET_TOTAL_USERS_COUNT:
				return {
					...state,
					totalUsersCount: action.totalUsersCount
				}
			default:
			return state;
	}
};

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setPage = (selectedPage) => ({ type: SET_PAGE, selectedPage });
export const follovAC = (userID, value) =>  
	({ type: FOLLOW, newValue: value, userID: userID });
export const unfollovAC = (userID, value) => ({ type: UNFOLLOW, newValue: value, userID: userID });

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(currentPage, pageSize).then( data => {
			dispatch(toggleIsFetching(false));
			dispatch(setTotalUsersCount(data.totalCount));
			dispatch(setUsers(data.items));
		});
	}
} 
export default usersReducer;
