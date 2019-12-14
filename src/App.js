import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MainActions from 'store/modules/main';

import './App.css';

import TabController from 'components/TabController';
import Intro from 'pages/Intro';
import Main from 'pages/Main';


class App extends Component {

	changeTab = () => {
		const { MainActions } = this.props;
		MainActions.changeTab();
	}
	
	render() {
		var current = undefined;
		switch(this.props.current_tab) {
			case 'main':
				current = <Main />;
				break;
			default:
				current = <Intro />;
		}
		return (
			<div className="App">
				<div className="App-main">
					<header className="App-header">
						{/* Logo */}
						<h1>{this.props.app_name}</h1>
						<h3>{this.props.app_description}</h3>
						
						{/* Tab Controller */}
						<TabController />
					</header>
					{current}
				</div>
				<footer className="App-footer">

				</footer>
			</div>
		);
	}
	
}

export default connect(
	(state) => ({
		app_name: state.main.app_name,
		app_description: state.main.app_description,
		current_tab: state.main.current_tab,
	}), 
	(dispatch) => bindActionCreators(MainActions, dispatch)
  )(App);