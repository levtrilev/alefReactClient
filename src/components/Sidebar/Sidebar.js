import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = (props) => {

	//let state = props.store.getState();

	let friendsElements = props.friends
		.map(p => {
			return <div>
				<img className={s.ava} src={p.ava} />
				<span className={s.name}>
					{p.name}
				</span>
			</div>
		});

	return (
		<div>
			<h3>FRIENDS</h3>
			<div>
				{friendsElements}
			</div>
		</div>
	);
}

export default Sidebar;