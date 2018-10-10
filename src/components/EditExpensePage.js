import React from 'react';
import ExpenseForm  from './ExpenseForm';
import {connect } from 'react-redux';
import {editExpense,removeExpense, startRemoveExpense, startEditExpense} from '../actions/expenses';

const EditExpensePage =(props) => {
    console.log(props);
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit expense</h1>
                </div>
            </div>
            <div className="content-container">
                This is from my edit expense component and current editing the expense for ID {props.match.params.id}
                <ExpenseForm expense={props.expense} onSubmit= {(expense) => {
                    props.dispatch(startEditExpense(props.expense.id, expense)); 
                    props.history.push('/');               
                }}/>
                <button className="button button--secondary" onClick={() => {
                    props.dispatch(startRemoveExpense(props.expense.id));
                    props.history.push('/');
                }}> Remove Expense</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state,props) =>{
    return {
        expense : state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);