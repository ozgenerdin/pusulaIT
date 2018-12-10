import { FETCHING_LOGIN, FETCHING_LOGIN_SUCCESS, FETCHING_LOGIN_FAILURE } from '../lib/constants'
const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
}

export default function authReducer (state = initialState, action) {

    console.log("reducer");

    switch (action.type) {
        case FETCHING_LOGIN:
            return {
                ...state,
                data: [],
                isFetching: true
            }
        case FETCHING_LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        case FETCHING_LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}