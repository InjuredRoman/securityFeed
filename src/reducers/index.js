import {combineReducers} from 'redux';

import security from './securityReducer.js';
import location from './locationReducer.js';

export default combineReducers({
    security,
    location
});