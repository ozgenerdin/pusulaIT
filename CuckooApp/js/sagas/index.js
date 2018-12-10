import { fork } from 'redux-saga/effects';
import  authSaga  from './authSaga';
// import { watchFetchVaccinations } from './fetchVaccinations';
// import startup from './startup';

/*
 * The entry point for all the sagas used in this application.
 */
export default function* root() {
    yield [
        fork(authSaga),
        // fork(watchFetchVaccinations),
        // fork(startup),
    ];
}