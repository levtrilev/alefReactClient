import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postsElements = props.posts
		.map(p => <Post text={p.text} likes={p.likes} key={p.text}/>);

	let newPostElement = React.createRef();

	// ready
	let onAddPost = () => {
		props.addPost();
	};

	// ready
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPost(text);
	};
	return (
		<div className={s.postsBlock}>
			<h4>My posts</h4>
			<div>
				<textarea
					ref={newPostElement}
					onChange={onPostChange}
					value={props.newPostText}
				/>
			</div>
			<div>
				<button onClick={onAddPost}>Add post</button>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
}

export default MyPosts;