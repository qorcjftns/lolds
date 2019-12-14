
import { combineReducers } from 'redux';
import main from './main';
import simulator from './simulator';

export default combineReducers({
    main,
    simulator
});