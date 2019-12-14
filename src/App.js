import React, { Component } from 'react';
import './App.css';

import Intro from 'pages/Intro';

class App extends Component {
	
	render() {
		return (
			<div className="App">
				<div className="App-main">
					<header className="App-header">
						
					</header>
					<Intro />
				</div>
				<footer className="App-footer">

				</footer>
			</div>
		);
	}
	
}

export default App;
