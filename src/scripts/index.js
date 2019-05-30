import { createStore, combineReducers } from 'redux';
import Counter from './modules/Counter';
import Navigation from './modules/Navigation';
import DonationForm from './modules/DonationForm';
import counterReducer from './redux/reducers/counter';
import donationFormReducer from './redux/reducers/donationForm';

new Navigation('#navigation');

const store = createStore(combineReducers({
  counterReducer,
  donationFormReducer
}));

const counter = new Counter(store, {
  counter: '#counter',
  buttons: [
    '#increase-counter',
    '#decrease-counter',
    '#reset-counter'
  ]
});

counter.update();
store.subscribe(() => counter.update());

const donationForm = new DonationForm(store, {
  rangePicker: '#donation-range-picker',
  input: '#donation-input',
  emoji: '#donation-emoji',
  valueBar: '#donation-value-bar'
});

donationForm.update();
store.subscribe(() => donationForm.update());
