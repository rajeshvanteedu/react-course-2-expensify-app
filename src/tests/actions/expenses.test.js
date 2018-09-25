import {startAddExpense, addExpense, editExpense,removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses'
test('should setup removeExpense action object',() =>{
    const action = removeExpense('123abc');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expenseId: '123abc'
    });
});

test('should setup editExpense action object',() =>{
    const action = editExpense('123abc', {note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        expenseId: '123abc',
        updates:{note: 'New note value'}
    });
});

test('should setup addExpense action object',() =>{

    // const data = {
    //     description: 'Rent',
    //     note:'Last month',
    //     amount:1000, 
    //     createdAt: 1000
    // };
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
        // expense:{
        //         id: expect.any(String),
        //         ...data
        //     }
    });
});