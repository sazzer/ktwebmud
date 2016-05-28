import Immutable from 'immutable';
import namespacedActions from 'redux-namespaced-actions';
const { handleActions } = namespacedActions('SocialLinks');

export const reducer = handleActions({
    LOAD_SOCIAL_LINKS_FULFILLED: (state, {payload}) => Immutable.fromJS(payload)
}, Immutable.Map())
