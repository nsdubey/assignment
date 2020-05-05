import { all } from 'redux-saga/effects';

import { itunesSaga } from '../itunes/itunesSaga';


export function* rootSaga() {
    yield all([itunesSaga()]);
}
