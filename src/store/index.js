import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = { tech: 'ganbate!!' };
export const store = createStore(reducer, initialState);
