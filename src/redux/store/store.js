import { createStore } from 'redux';
import reducers from '../reducers/reducer';

const store = createStore(reducers)

store.subscribe(() => console.log('Store Changed'))

export default store