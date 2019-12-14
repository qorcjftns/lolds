import { createAction, handleActions } from 'redux-actions';


const TEMP_ACTION = 'main/TEMP_ACTION';

export const temp_action = createAction(TEMP_ACTION);

const initialState = {
    app_name: 'LoL DS',
    app_description: 'League of Legends Damage Simulator'
};


export default handleActions({
    [TEMP_ACTION]: (state, action) => {
        return state;
    }
}, initialState);