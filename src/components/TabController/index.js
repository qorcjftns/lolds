
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MainActions from 'store/modules/main';

class TabController extends Component {

    changeTab = (tab) => {
        const { changeTab } = this.props;
        changeTab(tab);
    }

    constructor() {
        super();
        this.changeTab.bind(this);
    }

    render() {
        return (
            <div className="TabController">
                <button onClick={() => {this.changeTab('intro')}}>Intro</button>
                <button onClick={() => {this.changeTab('main')}}>Main</button>
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
  )(TabController);