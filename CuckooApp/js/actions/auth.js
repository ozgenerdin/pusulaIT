import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../lib/constants'

import { Actions } from 'react-native-router-flux';

/**
 * ## Login actions
 */
export function loginRequest () {
    return {
        type: LOGIN_REQUEST
    }
}

export function loginSuccess (json) {
    return {
        type: LOGIN_SUCCESS,
        payload: json
    }
}

export function loginFailure (error) {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export function login (email, password) {

    console.log("email");
    console.log(email);

    console.log("password");
    console.log(password);

    return dispatch => {

        const parameters = {
            username: email,
            password: password,
            scope: 'read write',
            grant_type: 'password',
            client_secret: 'pregnant',
            client_id: 'pregnant'
        };

        // dispatch(loginApi(parameters))
    }
}

// function loginApi(data,userType){
//     return (dispatch, getState) => {
//         const navigation = getState().cardNavigation;
//         dispatch(loginRequest())
//         return BackendFactory().login(data)
//
//             .then(function (json) {
//
//                 console.log("login result");
//                 console.log(json);
//                 //var profile = profileHelper.getProfileObjFromService(json);
//                 //json = Object.assign({}, json,{ profile : profile});
//
//                 return saveSessionToken(json)
//                     .then(function () {
//
//                         if(json.status == 0){
//                             dispatch(loginSuccess(json))
//                             let current_route = navigation.routes[navigation.routes.length -1].key;
//                             dispatch(replaceAt(current_route, { key: "register_extra" }, navigation.key));
//                             dispatch(logoutState())
//                         }else{
//                             dispatch(loginSuccess(json))
//                             let current_route = navigation.routes[navigation.routes.length -1].key;
//                             dispatch(replaceAt(current_route, { key: "profile_page" }, navigation.key));
//                             dispatch(logoutState())
//                         }
//
//                     })
//             })
//             .catch((error) => {
//                 console.log("login error");
//                 console.log(error);
//                 if(data.login_type == "social"){
//                     //dispatch(signupFB(userType));
//                 }else {
//                     dispatch(loginFailure(error.error_text))
//                 }
//
//             })
//     }
// }