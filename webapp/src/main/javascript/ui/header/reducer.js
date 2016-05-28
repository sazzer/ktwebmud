import Immutable from 'immutable';
import namespacedActions from 'redux-namespaced-actions';
const { handleActions } = namespacedActions('SocialLoginLinks');

export const reducer = handleActions({
    LOAD_PROVIDERS_FULFILLED: (state, {payload}) => Immutable.fromJS(payload)
}, Immutable.Map())
