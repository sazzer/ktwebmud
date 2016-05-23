import {reducer as counterReducer} from '../counter/reducer';
import {combineReducers} from 'redux-immutable';

export const reducer = combineReducers({
    count: counterReducer
});
