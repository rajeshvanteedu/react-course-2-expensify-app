import uuid from 'uuid'

//Add expense
export const addExpense = ({description = '',note='', amount=0, createdAt= 0} = {}) =>({
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
export const removeExpense = (expenseId) =>({
    type: 'REMOVE_EXPENSE',
    expenseId: expenseId    
});

//Edit expense
export const editExpense = (expenseId, updates) =>({
    type: 'EDIT_EXPENSE',
    expenseId: expenseId,
    updates:updates  
});
