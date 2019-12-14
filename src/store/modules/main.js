import { createAction, handleActions } from 'redux-actions';


const CHANGE_TAB = 'main/CHANGE_TAB';

export const changeTab = createAction(CHANGE_TAB, text => text);

const initialState = {
    app_name: 'LoL DS',
    app_description: 'League of Legends Damage Simulator',
    current_tab: 'intro'
};


export default handleActions({
    [CHANGE_TAB]: (state, {payload: text}) => {
        return {...state, current_tab: text};
    }
}, initialState);