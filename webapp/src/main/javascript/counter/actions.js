import namespacedActions from 'redux-namespaced-actions';
const { createAction } = namespacedActions('Counter');

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
