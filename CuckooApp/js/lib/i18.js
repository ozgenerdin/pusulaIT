
import {
    AsyncStorage
} from 'react-native';

import I18n from 'react-native-i18n';
I18n.fallbacks = true;
import Translations from './translations';
I18n.translations = Translations;

export default class i18 {
    constructor() {
        AsyncStorage.getItem('language').then((val) => {
            if(val !== null){
                I18n.locale = val;
            }
        })
        return I18n;
    }
}

