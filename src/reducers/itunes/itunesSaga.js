import axios from 'axios';

import { put, all, takeEvery } from 'redux-saga/effects';


import {
    fetchItunesRequest,
    fetchItunesSuccess,
    fetchItunesFailure,

} from './itunesReducer';

/**********************/
function* fetchItunesWorker({ payload }) {
    const { searchValue, callback } = payload
    try {
        const url = `https://itunes.apple.com/search?term=${searchValue}`
        const { data } = yield axios.get(url);
        console.log("feched data is.......", data.results)
        if (callback) callback(null, data.results);
        yield put(fetchItunesSuccess(data.results));
    } catch (err) {
        if (callback) callback(err.message, null);
        yield put(fetchItunesFailure(err));
    }
}

export function* itunesSaga() {
    yield all([
        takeEvery(fetchItunesRequest, fetchItunesWorker)
    ]);
}
