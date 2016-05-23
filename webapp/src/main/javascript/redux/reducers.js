import {reducer as counterReducer} from '../counter/reducer';
import {combineReducers} from 'redux';

export const reducer = combineReducers({
    count: counterReducer
});
