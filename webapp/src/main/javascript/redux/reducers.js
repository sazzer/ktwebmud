import {reducer as counterReducer} from '../counter/reducer';
import {reducer as socialLinksReducer} from '../ui/footer/reducer';
import {combineReducers} from 'redux-immutable';

export const reducer = combineReducers({
    count: counterReducer,
    socialLinks: socialLinksReducer
});
