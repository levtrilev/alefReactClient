import React from 'react';
import { usersAPI } from '../../api/api';
import * as axios from 'axios';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';
import preloader from '../../assets/images/354.gif';



const Users = (props) => {
	/*usersAPI.getUsers(0, 10).then( data => {
		props.setUsers(data.items);
	});*/
 
	/*axios.get("https://social-network.samuraijs.com/api/1.0/users").then( responce => {
		props.setUsers(responce.data.items);
	})*/
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (
		<>
		<div>
			{pages.map( p => <span onClick={ (e) => props.onPageChanged(p) } 
			className={props.selectedPage === p && s.selectedPage}>{p}</span>)}
		</div>
		{props.isFetching && <img src={preloader}/>}
		<div>
			{props.users.map(u =>  <>
			<div>
				<NavLink to={'/profile/'+u.id}>{u.id}</NavLink>
				<span> -- {u.name}</span>
			</div>
			</>)}
		</div>
		</>
	);
}

export default Users;