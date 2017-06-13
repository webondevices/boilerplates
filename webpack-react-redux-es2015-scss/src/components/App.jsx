import React from "react";
import styles from './App.scss';
import html5image from './../images/html5.png';

import messageActions from './../actions/messageActions';
import messageStore from './../stores/messageStore';

class App extends React.Component {

	constructor() {
		super();

		this.state = {
			messages: [],
			newMessage: ''
		};

		this.onStoreChange = this.onStoreChange.bind(this);
		this.editNewMessage = this.editNewMessage.bind(this);
		this.addNewMessage = this.addNewMessage.bind(this);
	}

	componentDidMount() {
		messageStore.addChangeListener(this.onStoreChange);
	}

	componentWillUnmount() {
		messageStore.removeChangeListener(this.onStoreChange);
	}

	onStoreChange() {
		this.setState({
			messages: messageStore.getMessages()
		});
	}

	editNewMessage(event) {
		this.setState({
			newMessage: event.target.value
		});
	}

	addNewMessage() {
		if (this.state.newMessage.length > 0) {
			messageActions.addMessage(this.state.newMessage);
			this.setState({
				newMessage: ''
			});
		}		
	}

	getMessageBox(message, i){
		return <li key={i}>{message}</li>;
	}

	render() {
		return (
			<div>
				<img className="html-logo" src={html5image} alt=""/>
				
				<input className="new-message" type="text" onChange={this.editNewMessage} value={this.state.newMessage} />
				<input className="submit-message" type="submit" onClick={this.addNewMessage} />

				<ul className="message-box">
					{this.state.messages.map((message, i) => this.getMessageBox(message, i))}
				</ul>
			</div>
		);
	}
}

export default App;