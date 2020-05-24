import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Folders from './components/Folders/Folders';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import DocType1Container from './components/DocType1/DocType1Container';
import { Route, BrowserRouter } from 'react-router-dom';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import NewsContainer from './components/News/newsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Folders />
			<SidebarContainer />
			<div className="app-wrapper-content">
				<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
				<Route path='/dialogs' render={() => <DialogsContainer />} />
				<Route path='/doctype1' render={() => <DocType1Container />} />
				<Route path='/users' render={() => <UsersContainer />} />
				<Route path='/news' render={() => <NewsContainer />} />
			</div>
		</div>
	);
}

export default App;
