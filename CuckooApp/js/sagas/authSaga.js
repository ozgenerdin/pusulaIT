import { FETCHING_LOGIN, FETCHING_LOGIN_SUCCESS, FETCHING_LOGIN_FAILURE } from '../lib/constants'
import { put, takeEvery, fork, all } from 'redux-saga/effects'
import {login} from '../lib/api'

function* fetchData (datas) {
    console.log("saga 111");
    // console.log(params);

    try {
        console.log("saga 3333");
        const data = yield login("oauth/token", datas.params)
        // const data = yield call(login, "oauth/token", datas.params)
        console.log("saga 44444");
        console.log(data);

        yield put({ type: FETCHING_LOGIN_SUCCESS, data })

        // return data;
    } catch (e) {
        yield put({ type: FETCHING_LOGIN_FAILURE })
        // return false;
    }


}

function* authSaga () {
    console.log("saga 22222");
    yield takeEvery(FETCHING_LOGIN, fetchData)
}

export default function* root() {
    yield all([
        fork(authSaga),
        // fork(watchGetProducts),
        // fork(watchCheckout)
    ])
}