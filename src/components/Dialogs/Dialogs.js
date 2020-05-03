import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let messagesElements = props.state.messages
	.map(m => <Message text={m.text} key={m.id} id={m.id}/>);

	let dialogsElements = props.state.dialogs
	.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

	let newMessageElement = React.createRef();

	let onSendMessage = () => {
		props.sendMessage();
	};
	let onMessageChange = (e) => {
		//let text = newMessageElement.current.value;
		let text = e.target.value;
		props.updateNewMessage(text);
	};

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
			<div>
				<textarea 
				ref= {newMessageElement} 
				onChange={onMessageChange}
				value={props.state.newMessageText}
				placeholder='введите сообщение и нажмите кнопку отправить'
				/>
			</div>
			<div>
				<button onClick={ onSendMessage }>Send message</button>
			</div>
		</div>
	);
}

export default Dialogs;