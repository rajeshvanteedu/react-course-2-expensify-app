//set text filter
export const setTextFilter= (text = '') =>({
    type: 'SET_TEXT_FILTER', 
    text: text    
});

export const sortByAmount = () => ({
    type: 'SORT_BY',
    sortBy: 'amount'
});

export const sortByDate = () => ({
    type: 'SORT_BY',
    sortBy: 'date'
});

export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate: startDate
});

export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate: endDate
});