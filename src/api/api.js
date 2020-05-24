import * as Axios from 'axios';
//import { unfollow } from '../redux/users-reducer';

const instance = Axios.create( {
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: {
		'API-KEY': '85b9d3be-97b9-4770-a1cf-e6530e9e4ce2'
	}
});

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?
	page=${currentPage}&
	count=${pageSize}`).then(response => {
			return response.data
		});
	},
	follow(userId) {
		return instance.post(`follow/${userId}`, {}).then(response => {
			return response.data
		});
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`).then(response => {
			return response.data
		});
	},
	authMe() {
		return instance.get(`auth/me`,
		{ withCredentials: true }).then(response => {
			return response.data
		});
	}

}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => {
			return response.data
		});
	},
	getStatus(userId) {
		return instance.get(`status/${userId}`).then(response => {
			return response.data
		});
	},
	updateStatus(status) {
		return instance.put(`status`, {status: status});
	},

}
