console.log('redux-Expensify.js');

import {createStore, combineReducers} from 'redux';
import uuid from 'uuid'

//Add expense
const addExpense = ({description = '',note='', amount=0, createdAt= 0} = {}) =>({
    type: 'ADD_EXPENSE',
    expense:{
                id: uuid(),
                description: description,
                note: note,
                amount: amount,
                createdAt: createdAt
    }
});

//Remove expense
const removeExpense = (expenseId) =>({
    type: 'REMOVE_EXPENSE',
    expenseId: expenseId    
});

//Edit expense
const editExpense = (expenseId, updates) =>({
    type: 'EDIT_EXPENSE',
    expenseId: expenseId,
    updates:updates  
});


//Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type)
    {
        case 'ADD_EXPENSE':
            return [...state,action.expense];//similar to state.concat(action.expense); returns a new array instead of addign it to state
        case 'REMOVE_EXPENSE':
                return state.filter(exp =>exp.id != action.expenseId);
        case 'EDIT_EXPENSE':
        {
            return state.map(exp =>{
                if (exp.id == action.expenseId)
                {
                   return {
                       ...exp,
                       ...action.updates
                   };
                }
                else
                {
                    return exp;
                }
            });            
        }
        default:
            return state;
    }
};


//Filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate:undefined,
    endDate:undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) =>{
    switch(action.type)
    {
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text            
        };
        case 'SORT_BY':
        return {
            ...state,
            sortBy: action.sortBy 
        };
        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate 
        };
        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate 
        };
        default:
            return state;
    }
};

//Get visible expenses
const getVisisbleExpneses = (expenses,{text, sortBy,startDate,endDate}) =>{
    return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) =>{
            if(sortBy == 'date')
            {
                return a.createdAt < b.createdAt ? 1: -1;
            }
            else if(sortBy == 'amount')
            {
                return a.amount < b.amount ? 1: -1;
            }
    });
};

// create of store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisisbleExpneses(state.expenses,state.filters);
    console.log(visibleExpenses); 
});

const expense1 = store.dispatch(addExpense({description:'Rent',amount:1000, createdAt: -21000}));
const expense2 = store.dispatch(addExpense({description:'Coffee',amount:200, createdAt: -1000 }));

// store.dispatch(removeExpense(expense1.expense.id));

// store.dispatch(editExpense(expense2.expense.id,{ amount:500}));

 //store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

 //store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
 //store.dispatch(setEndDate(999));

const demoState= {
                    expenses: [{
                        id: 'exp1',
                        description: 'Month rent',
                        note: 'final due for this month as well',
                        amount: 10000,
                        createdAt: 0
                    }],
                    filters:{
                        text: 'rent',
                        sortBy: 'amount',
                        startDate:undefined,
                        endDate:undefined
                    }
};

// const user = {
//     name: 'rajesh',
//     age :100
// };

// console.log({
//     ...user,
//     location: 'Hyderabad',
//     age: 1
// });