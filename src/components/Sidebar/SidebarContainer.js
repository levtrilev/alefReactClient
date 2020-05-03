import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		friends: state.sidebarPage.friends
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;