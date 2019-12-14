import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Intro from 'pages/Intro';

class App extends Component {
	
	render() {
		return (
			<div className="App">
				<div className="App-main">
					<header className="App-header">
						<h1>{this.props.app_name}</h1>
						<h3>{this.props.app_description}</h3>
					</header>
					<Intro />
				</div>
				<footer className="App-footer">

				</footer>
			</div>
		);
	}
	
}

// props 값으로 넣어 줄 상태를 정의해줍니다.
const mapStateToProps = (state) => ({
  app_name: state.main.app_name,
  app_description: state.main.app_description,
});

// props 값으로 넣어 줄 액션 함수들을 정의해줍니다
const mapDispatchToProps = (dispatch) => ({
})

// 컴포넌트를 리덕스와 연동 할 떄에는 connect 를 사용합니다.
// connect() 의 결과는, 컴포넌트에 props 를 넣어주는 함수를 반환합니다.
// 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다.
export default connect(mapStateToProps, mapDispatchToProps)(App);