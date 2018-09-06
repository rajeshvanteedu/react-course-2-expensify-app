import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
                                type: 'INCREMENT',
                                incrementBy: incrementBy
                               });

const decrementCount = ({decrementBy = 1} = {}) => ({
                                type: 'DECREMENT',
                                decrementBy: decrementBy
                               });

const setCount = ({count = 0}) => ({
                                type: 'SET',
                                count: count
                               });

const resetCount = () => ({
                           type: 'RESET'                               
                         });


const countReducer = (state = { count:0 }, action) => {    
    switch(action.type)
    {
        case 'INCREMENT':
        {   ``
            //const incrBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return{
                count: state.count + action.incrementBy //incrBy
            }
        }
        case 'DECREMENT':
        {
            //const decrBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return{
                count: state.count - action.decrementBy //decrBy
            }
        }
        case 'SET':
        {
            return{
                count: action.count
            }
        }
        case 'RESET':
        {
            return{
                count: 0
            }
        }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
        console.log(store.getState());
    }
);



//Actions - than an object taht gets sent to the store

//I'd like to increment the count
store.dispatch(incrementCount({incrementBy : 5}));
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount());
// store.dispatch({
//     type: 'INCREMENT'
// });

//I'd like to reset the count to zero
store.dispatch(resetCount());
// store.dispatch({
//     type: 'RESET'
// });


//I'd like to decrement the count to zero
store.dispatch(decrementCount());
// store.dispatch({
//     type: 'DECREMENT'
// });

store.dispatch(decrementCount({decrementBy: 10}));
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(setCount({count: 101}));
// store.dispatch({
//     type: 'SET',
//     count:101
// });