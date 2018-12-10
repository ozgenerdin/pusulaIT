'use strict'

import store from 'react-native-simple-store'
import CONFIG from './config'

export class AppAuthToken {

    constructor () {
        this.SESSION_TOKEN_KEY = CONFIG.SESSION_TOKEN_KEY
    }

    storeSessionToken (sessionToken) {
        return store.save(this.SESSION_TOKEN_KEY, {
            sessionToken: sessionToken
        })
    }

    getSessionToken (sessionToken) {
        if (sessionToken) {
            return store.save(this.SESSION_TOKEN_KEY, {
                sessionToken: sessionToken
            }).then(() => {
                return store.get(this.SESSION_TOKEN_KEY)
            })
        }
        return store.get(this.SESSION_TOKEN_KEY)
    }

    deleteSessionToken () {
        return store.delete(this.SESSION_TOKEN_KEY)
    }
}

export let appAuthToken = new AppAuthToken()