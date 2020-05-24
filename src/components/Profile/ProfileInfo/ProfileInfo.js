import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

	return (
		<div>
			<div>
				<img className={s.imgWide} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWqFf0mxVyJ_0odFCbdc7eR4OhXvqvxUtoTmQTmkwVpa5Vhu0Y&usqp=CAU" />
			</div>
			<h4 className={s.profileHeader}>
				{(props.profile) && props.profile.fullName}
			</h4>
			<div>
				{(props.profile) ? props.profile.userId : "...is fetching..."}
			</div>
		</div>
	);
}

export default ProfileInfo;