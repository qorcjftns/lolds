import { createAction, handleActions } from 'redux-actions';


const LOAD_DATA = 'simulator/LOAD_DATA';

export const loadData = createAction(LOAD_DATA, object => object);

const initialState = {
    champData: undefined
};


export default handleActions({
    [LOAD_DATA]: (state, {payload: object}) => {
        return {...state, champData: object};
    }
}, initialState);