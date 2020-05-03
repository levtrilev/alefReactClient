import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Folders from './components/Folders/Folders';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Users from './components/Users/Users';
import { Route, BrowserRouter } from 'react-router-dom';
import SidebarContainer from './components/Sidebar/SidebarContainer';

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Folders />
			<SidebarContainer />
			<div className="app-wrapper-content">
				<Route path='/profile' render={() => <Profile />} />
				<Route path='/dialogs' render={() => <DialogsContainer />} />
				<Route path='/news' render={() => <News />} />
				<Route path='/users' render={() => <Users />} />
			</div>
		</div>
	);
}

export default App;
