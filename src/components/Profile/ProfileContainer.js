import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import { profileAPI } from '../../api/api';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getProfile, setProfileActionCreator } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		this.props.getProfile(userId);
		//let profile = { userId: userId, key: userId, 
		//	text: "text to get from API", 
		//	likes: "likes to get from API" };
		//this.props.getProfile(profile);
	}
	render() {
		debugger;
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile}/>
			</div>
		);
	}
}

//export default ProfileContainer;
let mapStateToProps = (state) => {
	return { profile: state.profilePage.profile }
}

/* let mapDispatchToProps = (dispatch) => {
	return {
		getProfile: (userId) => {dispatch(setProfileActionCreator(userId))},
	}	
}
 */
//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer));
export default compose (
	withRouter,
	connect(mapStateToProps, {getProfile})
)
(ProfileContainer);


 /* export default compose (
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)
(ProfileContainer);
 */