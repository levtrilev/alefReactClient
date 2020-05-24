import React from 'react';
//import { setUserProfile, toggleIsFetching } from './../../redux/profile-reducer';
import * as Axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import News from './news';

class NewsContainer extends React.Component {


	componentDidMount() {
		Axios.get(`https://newsapi.org/v1/sources?language=en&category=technology`)
		.then(response => {
			//this.props.setUserProfile(response.data);
			debugger;
		});
	}

	render() {
		return (<News />);
	}
}

export default NewsContainer;
