import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

	return (
		<div className={s.item}>
			<img src="https://pp.userapi.com/c851128/v851128742/98734/OcGDHn5I5M8.jpg" />
			<span>{props.text}</span>
			<div>
				<span>Like {props.likes}</span>
			</div>
		</div>
	);
}

export default Post