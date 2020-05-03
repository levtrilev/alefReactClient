import { sendMessageActionCreator, updateNewMessageActionCreator } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		state: state.dialogsPage
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessage: (text) => {
			dispatch(updateNewMessageActionCreator(text));
		},
		sendMessage: () => {
			dispatch(sendMessageActionCreator());
		}
	}
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;