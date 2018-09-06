
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisisbleExpneses from './selectors/expenses';

const store = configureStore();

// store.dispatch(addExpense({description:'Water bill', amount : 4500}));
// store.dispatch(addExpense({description:'Gas bill', createdAt:1000}));
// store.dispatch(addExpense({description:'rent', amount : 10950}));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

// const state = store.getState();

// const visibleExpenses = getVisisbleExpneses(state.expenses,state.filters);
// console.log(visibleExpenses); 

const jsx = (
    <Provider store ={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));

