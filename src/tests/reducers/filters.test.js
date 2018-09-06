import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',() =>{
   const state = filtersReducer(undefined, {type : '@@INIT'});    
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('should set sort by to amount',() =>{
    const state = filtersReducer(undefined, {type : 'SORT_BY', sortBy: 'amount'});    
     expect(state.sortBy).toEqual('amount');
 });

 test('should set sort by to date',() =>{
     const currentState = {
        text: '',
        sortBy: 'amount',
        startDate:undefined,
        endDate:undefined
     };
    const action = {
        type : 'SORT_BY', 
        sortBy: 'date'
    };
    const state = filtersReducer(currentState, action);    
    expect(state.sortBy).toEqual(action.sortBy);
 });

 test('should set text filter',() =>{
    const currentState = {
       text: '',
       sortBy: 'amount',
       startDate:undefined,
       endDate:undefined
    };
   const action = {
       type : 'SET_TEXT_FILTER', 
       text: 'bill'
   };
   const state = filtersReducer(currentState, action);    
   expect(state.text).toEqual(action.text);
});

test('should set startDate filter',() =>{
    const currentState = {
       text: '',
       sortBy: 'amount',
       startDate:undefined,
       endDate:undefined
    };
   const action = {
       type : 'SET_START_DATE', 
       startDate: moment().subtract(4,'days')
   };
   const state = filtersReducer(currentState, action);    
   expect(state.startDate).toEqual(action.startDate);
});

test('should set endDate filter',() =>{
    const currentState = {
       text: '',
       sortBy: 'amount',
       startDate:undefined,
       endDate:undefined
    };
   const action = {
       type : 'SET_END_DATE', 
       endDate: moment().add(4,'days')
   };
   const state = filtersReducer(currentState, action);    
   expect(state.endDate).toEqual(action.endDate);
});

