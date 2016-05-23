export function reducer(state = 0, action) {
    let newState;

    switch (action.type) {
        case 'INCREMENT':
            newState = state + 1;
            break;
        case 'DECREMENT':
            newState = state - 1;
            break;
        default:
            newState = state;
            break;
    }
    
    return newState;
}