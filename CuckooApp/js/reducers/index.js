import {combineReducers} from 'redux';

import drawer from './drawer';
import user from './user';
import list from './list';
import appData from './authReducer';

export default combineReducers({

    drawer,
    user,
    list,
    appData,

});
