import selectExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses',() =>{
    const res = selectExpenses([]);   
    expect(res).toBe(0);
});

test('should addd up single expense',() =>{
    const res = selectExpenses([expenses[0]]);   
    expect(res).toBe(195);
});

test('should addd up multiple expenses',() =>{
    const res = selectExpenses(expenses);   
    expect(res).toBe(114195);
});
