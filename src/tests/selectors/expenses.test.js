import getVisisbleExpneses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 200,
    createdAt:0
},
{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 10000,
    createdAt:moment(0).subtract(4,'days').valueOf()
},
{
    id: '3',
    description: 'Credit card',
    note: '',
    amount: 4500,
    createdAt:moment(0).add(4,'days').valueOf()
}]

test('should filter by text selectors object',() =>{
    const filters = {
        text: 'e',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisisbleExpneses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[1]]);
});

test('should filter by startDate selectors object',() =>{
    const filters = {
        text: '',
        sortBy:'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = getVisisbleExpneses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0]]);
});

test('should filter by endDate selectors object',() =>{
    const filters = {
        text: '',
        sortBy:'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = getVisisbleExpneses(expenses,filters)
    expect(result).toEqual([expenses[0],expenses[1]]);
});

test('should sort by date selectors object',() =>{
    const filters = {
        text: '',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisisbleExpneses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});

test('should sort by date selectors object',() =>{
    const filters = {
        text: '',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisisbleExpneses(expenses,filters)
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
});