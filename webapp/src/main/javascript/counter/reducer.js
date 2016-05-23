import namespacedActions from 'redux-namespaced-actions';
const { handleActions } = namespacedActions('Counter');

export const reducer = handleActions({
    INCREMENT_FULFILLED: (state) => state + 1,
    DECREMENT: (state) => state - 1
}, 0)
