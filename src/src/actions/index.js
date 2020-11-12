import axios from 'axios';
import { createAction } from 'redux-actions';

export const fetchTicketsSuccess = createAction('TICKETS_GET');
export const setTicketsProfitableFilter = createAction('TICKETS_FILTER_SET');

export const fetchTiskets = (state) => async (dispatch) => {
    const responseSearchId = await axios.get('https://front-test.beta.aviasales.ru/search');
    const { searchId } = responseSearchId.data;
    const responseData = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
    const { tickets } = responseData.data;
    console.log('!!!!ff', responseData.data);
    dispatch(fetchTicketsSuccess({ tickets: tickets }));
  }
