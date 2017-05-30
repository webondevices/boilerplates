import React from "react";
import style from './App.scss';
import html5image from './../images/html5.png';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello!</h1>
				<img src={html5image} alt=""/>
			</div>
		);
	}
}

export default App;