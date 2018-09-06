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

export default expensesReducer;