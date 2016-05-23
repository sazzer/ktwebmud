import namespacedActions from 'redux-namespaced-actions';
const { createAction } = namespacedActions('Counter');

export const increment = createAction('INCREMENT', () => new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Resolved');
            resolve();
        }, 1000);
    })
);
export const decrement = createAction('DECREMENT');
