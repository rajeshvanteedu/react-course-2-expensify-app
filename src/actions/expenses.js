import uuid from 'uuid';
import database from '../firebase/firebase';
//Add expense
export const addExpense = (expense) =>({
    type: 'ADD_EXPENSE',
    expense: expense
    // expense:{
    //             id: uuid(),
    //             description: description,
    //             note: note,
    //             amount: amount,
    //             createdAt: createdAt
    // }
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note='', 
            amount=0, 
            createdAt= 0
        } = expenseData;
        const expense = { description, note, amount, createdAt};
        database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//Remove expense
export const removeExpense = (expenseId) =>({
    type: 'REMOVE_EXPENSE',
    expenseId: expenseId    
});

export const startRemoveExpense = (expenseId) => {
    return (dispatch, getState) => {    
        const uid = getState().auth.uid;          
        database.ref(`users/${uid}/expenses/${expenseId}`).remove().then((snapshot) => {
            dispatch(removeExpense(expenseId));   
        });                      
    };
};

//Edit expense
export const editExpense = (expenseId, updates) =>({
    type: 'EDIT_EXPENSE',
    expenseId: expenseId,
    updates:updates  
});

export const startEditExpense = (expenseId, updates) => {
    return (dispatch, getState) => {  
        const uid = getState().auth.uid;           
        database.ref(`users/${uid}/expenses/${expenseId}`).update(updates).then((snapshot) => {
            dispatch(editExpense(expenseId, updates));   
        });                      
    };
};

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {   
    return (dispatch,getState) => { 
        const uid = getState().auth.uid;     
        database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach(childSnapShot => {
                expenses.push({
                    id: childSnapShot.key,
                    ...childSnapShot.val()
                });
            });
           dispatch(setExpenses(expenses));           
        });
    };
};
