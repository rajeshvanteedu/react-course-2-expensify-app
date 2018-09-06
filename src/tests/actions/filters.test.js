import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../../actions/filters';
import moment from 'moment';

test('setTextFilter action object',() =>{
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    });
});

test('sortByAmount action object',() =>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY',
        sortBy: 'amount'
    });
});

test('sortByDate action object',() =>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY',
        sortBy: 'date'
    });
});

test('setStartDate action object',() =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('setEndDate action object',() =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

