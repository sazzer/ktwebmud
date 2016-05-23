import objReducer from 'reduxr-obj-reducer';

export const reducer = objReducer(0, {
    INCREMENT: (state) => state + 1,
    DECREMENT: (state) => state - 1
});
