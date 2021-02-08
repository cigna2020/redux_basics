const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {

    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }

    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription 
store.subscribe(() => {  // Додати одразу після створення store для контролю всіх подальших змін store (викликається при кожній зміні state)
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});  // type of action from rootReducer, is the main property. Also can be added value, payload {}...
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

