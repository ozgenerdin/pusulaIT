import {
    AsyncStorage
} from 'react-native';

let mainURL = require('./config').serverURL;

async function getToken() {
    const value = await AsyncStorage.getItem('token');
    return value;
}

async function getRequest(uri) {
    var json;
    try {
        let token = await getToken();
        //console.log(token);
        let response = await fetch(mainURL + uri, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });

        json = await response.json();
    } catch (e) {
        //console.log(e);
    }
    return json;
}

async function getRequestLazy(uri,page = 1,size = 20,sort = "id,asc") {
    var json;

    var params = '?page='+page+'&size='+size+'&sort='+sort;

    try {
        let token = await getToken();
        //console.log(token);
        let response = await fetch(mainURL + uri + params, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });

        // console.log(response);

        json = await response.json();
    } catch (e) {
        //console.log(e);
    }
    return json;
}

async function postUpdate(uri, parameters) {
    let URI = mainURL + uri;
    let token = await getToken();

    try {
        var response = await
            fetch(URI, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,

                },
                body: JSON.stringify({
                    grant_type: 'password',
                    scope: 'read write',
                    client_secret: 'pregnant',
                    client_id: 'pregnant',
                    ...parameters
                })
            });
        //console.log(response);
        response = await response.json();
    } catch (error) {
        response = error;
        //console.log(error);
    }
    return response;
}

async function postRequest(uri, parameters) {
    let URI = mainURL + uri;
    let token = await getToken();

    try {
        var response = await
            fetch(URI, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,

                },
                body: JSON.stringify({
                    grant_type: 'password',
                    scope: 'read write',
                    client_secret: 'pregnant',
                    client_id: 'pregnant',
                    ...parameters
                })
            });

        response = await response.json();
    } catch (error) {
        response = error;
    }
    return response;
}

async function postRequestNew(uri, parameters) {
    let URI = mainURL + uri;
    let token = await getToken();

    try {
        var response = await
            fetch(URI, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,

                },
                body: JSON.stringify(
                    parameters
                )
            });

        response = await response.json();
    } catch (error) {
        response = error;
    }
    return response;
}

async function deleteRequest(uri) {
    var json;
    try {
        let token = await getToken();
        let response = await fetch(mainURL + uri, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });
        json = await response.json();
    } catch (e) {
        //console.log(e);
    }
    return json;
}

async function login(uri, parameters) {

    console.log("login");

    var formData = new FormData();

    for (var k in parameters) {
        formData.append(k, parameters[k]);
    }
    response = {
        access_token: "123456",
    }
        //TODO dummy response yerine api response gelecek
/*
    try {
        var response = await
            fetch(mainURL + uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Cache-Control': 'no-cache',
                    'Authorization': 'Basic cHJlZ25hbnQ6cHJlZ25hbnQ=',
                },
                body: formData
            });
        //response = await response.json();

    } catch (error) {
        response = error;
        //console.log(error);
    }
*/
    return response;
}

async function loginWithSocial(uri, parameters) {
    let URI = mainURL + uri;
    let token = await getToken();

    try {
        var response = await
            fetch(URI, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                    'Authorization': 'Basic cHJlZ25hbnQ6cHJlZ25hbnQ=',
                },
                body: JSON.stringify({
                    grant_type: 'password',
                    scope: 'read write',
                    client_secret: 'pregnant',
                    client_id: 'pregnant',
                    ...parameters
                })
            });

        response = await response.json();
    } catch (error) {
        response = error;
    }
    return response;
}


async function register(uri, parameters) {
    let URI = mainURL + uri;
    //let token = await getToken();

    /*
    try {
        var response = await
            fetch(URI, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    grant_type: 'password',
                    scope: 'read write',
                    client_secret: 'pregnant',
                    client_id: 'pregnant',
                    ...parameters
                })
            });
        response = await response.json();
    } catch (error) {
        response = error;
        //console.log(error);
    }
    */
    resp = {
        email : "user@mail.com"
    }
    return resp;
}

async function logout(uri) {

    try {
        let token = await getToken();
        let response = await fetch(mainURL + uri, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });

        return response.ok;
    } catch (e) {
        return false;
    }

}

async function upload(uri, image, dailyNo) {
    let URI = mainURL + uri;
    let token = await getToken();

    try {
        RNFetchBlob.fetch('POST', URI, {
            'Authorization': 'Bearer ' + token,
            'Content-Type' : 'multipart/form-data',
        }, [
            { name : 'image', filename : new Date().getTime(), data: RNFetchBlob.wrap(image.path)},
            { name : 'dailyNo', data: dailyNo},
        ]).uploadProgress((written, total) => {
            //console.log('uploaded', written / total);
        }).then((resp) => {

        })
    } catch (error) {
        response = error;
        //console.log(error);
    }
    return true;
}


module.exports = {
    getRequest,
    getRequestLazy,
    postRequest,
    postRequestNew,
    postUpdate,
    deleteRequest,
    login,
    register,
    logout,
    upload,
    loginWithSocial
};




