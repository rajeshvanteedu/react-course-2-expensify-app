
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisisbleExpneses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {firebase} from './firebase/firebase';
//import './playground/promises';

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

ReactDOM.render(<p>loading ...</p>,document.getElementById('app'));


// store.dispatch(startSetExpenses()).then(() => {
//     ReactDOM.render(jsx, document.getElementById('app'));
//   });

//store.dispatch(startSetExpenses());

//ReactDOM.render(jsx, document.getElementById('app'));

let hasRendered = false;

const renderApp = () => {
    if(!hasRendered)
    {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

firebase.auth().onAuthStateChanged((user) => {
   if(user)
   {       
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses());
        renderApp();
        if(history.location.pathname === '/')
        {
            history.push('/dashboard');
        }           
   }
   else
   {
        store.dispatch(logout());
        renderApp();
        history.push('/');
   }
});