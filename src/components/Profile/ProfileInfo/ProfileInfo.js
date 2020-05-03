import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {

	return (
		<div>
			<div>
				<img className={s.imgWide} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWqFf0mxVyJ_0odFCbdc7eR4OhXvqvxUtoTmQTmkwVpa5Vhu0Y&usqp=CAU" />
			</div>
			<h4 className={s.profileHeader}>Profile info</h4>
		</div>
	);
}

export default ProfileInfo;