import { connect } from 'react-redux';
import { getUsers, setUsers, setPage, toggleIsFetching } from './../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import * as axios from 'axios';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

 	componentDidMount() {
		if (this.props.users.length === 2) {
			this.props.getUsers(3, 20);
		}
			/*usersAPI.getUsers(3, 20).then( data => {
			this.props.setUsers(data.items);
		});*/
		/*if (this.props.users.length === 2) {
			axios.get("https://social-network.samuraijs.com/api/1.0/users?page=3&count=20").then( responce => {
				debugger;
			this.props.setUsers(responce.data.items);
	})
		}*/

	}

	onPageChanged = (newPage) => {
		this.props.setPage(newPage);
		this.props.getUsers(newPage, this.props.pageSize);
	}

	render() {
		return <div>
			<Users 
			users={this.props.users}
			setUsers={this.props.setUsers}
			totalUsersCount={this.props.totalUsersCount}
			setTotalUsersCount={this.props.setTotalUsersCount}
			pageSize={this.props.pageSize}
			selectedPage={this.props.selectedPage}
			onPageChanged={this.onPageChanged}
			isFetching={this.props.isFetching}
			/>
		</div>
	}
}

let mapStateToProps = (state) => {
	return {users: state.usersPage.users,
		totalUsersCount: state.usersPage.totalUsersCount,
		pageSize: state.usersPage.pageSize,
		selectedPage: state.usersPage.selectedPage,
		pageNumber: state.usersPage.pageNumber,
		isFetching: state.usersPage.isFetching
	}	
}
export default connect(mapStateToProps, { getUsers, setUsers, setPage, toggleIsFetching })(UsersContainer);