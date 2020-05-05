import { createAction, handleActions } from 'redux-actions';
import update from 'immutability-helper';


/*********************************************************************************/
export const fetchItunesRequest = createAction('FETCH_ITUNES_REQUEST');
export const fetchItunesSuccess = createAction('FETCH_ITUNES_SUCCESS');
export const fetchItunesFailure = createAction('FETCH_ITUNES_FAILURE');


const initialState = {
    iTunes: [],
    error: null
};

export default handleActions({
    [fetchItunesRequest]: state => state,
    [fetchItunesSuccess]: (state, { payload }) => update(state, {
        iTunes: { $set: payload },
    }),
    [fetchItunesFailure]: (state, { payload }) =>
        update(state, {
            error: { $set: payload },

        })
},
    initialState
);


