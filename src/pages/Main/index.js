
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SimulatorActions from 'store/modules/simulator';

import './main.css';

class Main extends Component {

    componentDidMount() {
        fetch("http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json")
            .then(res => res.json())
            .then(
                (result) => {
                    const { loadData } = this.props;
                    console.log(result);
                    var icons = [];

                    Object.keys(result.data).forEach(function(key) {
                        icons.push(<img src={"http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/" + key + ".png"} key={key} alt={key}/>);
                    });
                    console.log(icons);

                    loadData(icons);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    
                }
            )
    }

    render() {
        return (
            <div className="page Main-page">
                <h2>League of Legends Damage Simulator (Main)</h2>
                <div className="championSelect">
                    <div className="championSelect-red"></div>
                    <div className="championSelect-blue"></div>
                </div>
                <div className="champions">
                    {this.props.champData}
                </div>
            </div>
        );
    }

}

export default connect(
	(state) => ({
		champData: state.simulator.champData
	}), 
	(dispatch) => bindActionCreators(SimulatorActions, dispatch)
  )(Main);
