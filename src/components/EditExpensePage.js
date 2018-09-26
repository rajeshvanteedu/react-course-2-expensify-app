import React from 'react';
import ExpenseForm  from './ExpenseForm';
import {connect } from 'react-redux';
import {editExpense,removeExpense, startRemoveExpense, startEditExpense} from '../actions/expenses';

const EditExpensePage =(props) => {
    console.log(props);
    return (
        <div>
            This is from my edit expense component and current editing the expense for ID {props.match.params.id}
            <ExpenseForm expense={props.expense} onSubmit= {(expense) => {
                props.dispatch(startEditExpense(props.expense.id, expense)); 
                props.history.push('/');               
               }}/>
            <button onClick={() => {
                props.dispatch(startRemoveExpense(props.expense.id));
                props.history.push('/');
            }}> Remove</button>
        </div>
    );
};

const mapStateToProps = (state,props) =>{
    return {
        expense : state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);