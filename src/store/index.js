import reducer from './reducers';
import { createStore } from 'redux';

const initialState = { tech: 'ganbate!!' };
const store = createStore(reducer, initialState);
