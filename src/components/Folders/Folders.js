import React from 'react';
import s from './Folders.module.css';
import { NavLink } from 'react-router-dom';
console.log(s);

const Folders = () => {
	return (
		<nav className={s.nav}>
		<div className={s.item}>
			<NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
		</div>
		<div className={`${s.item} ${s.activeLink}`}>
			<NavLink to='/dialogs' activeClassName={s.activeLink}>Dialogs</NavLink>
		</div>
		<div className={`${s.item} ${s.activeLink}`}>
			<NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
		</div>
		<div className={s.item}>
			<NavLink to='/doctype1' activeClassName={s.activeLink}>DocType1</NavLink>
		</div>
		<div className={s.item}>
			<a>Music</a>
		</div>
		<div className={s.item}>
			<a>Settings</a>
		</div>
	</nav>
);
}

export default Folders;