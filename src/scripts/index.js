import { createStore } from 'redux';
import Counter from './modules/Counter';
import Navigation from './modules/Navigation';
import counterReducer from './redux/reducers/counter';

new Navigation('#navigation');

const store = createStore(counterReducer);

const counter = new Counter(store, {
  counter: '#counter',
  buttons: [
    '#increase-counter',
    '#decrease-counter',
    '#reset-counter'
  ]
});

store.subscribe(() => counter.update());
