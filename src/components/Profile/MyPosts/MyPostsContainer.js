import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

/* const MyPostsContainer = () => {
	return (
		<StoreContext.Consumer> 
			{ (store) => {
			let state = store.getState();

			let addPost = () => {
				store.dispatch(addPostActionCreator());
			};
			let onPostChange = (text) => {
				let action = updateNewPostActionCreator(text);
				store.dispatch(action);
			};

			return <MyPosts
				posts={state.profilePage.posts}
				newPostText={state.profilePage.newPostText}
				addPost={addPost}
				updateNewPost={onPostChange} />
		} }
		</StoreContext.Consumer>
	);
}
 */
const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {dispatch(addPostActionCreator())},
		updateNewPost: (text) => {dispatch(updateNewPostActionCreator(text))}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;