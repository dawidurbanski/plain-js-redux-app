export default class Counter {
  constructor(store, options) {
    this.counter = document.querySelector(options.counter);

    if (! this.counter) {
      return;
    }

    this.buttons = options.buttons.map(
      button => document.querySelector(button));
    this.store = store;

    this.addButtonsEventListeners();
  }

  addButtonsEventListeners() {
    this.buttons.forEach(
      button => button.addEventListener(
        'click', (e) => this.onButtonClick(e)));
  }

  onButtonClick(e) {
    e.preventDefault();

    // dynamically call function by button's data-action attribute
    this[e.target.dataset.action]();
  }

  incrementCounter() {
    this.store.dispatch({
      type: 'INCREMENT'
    });
  }

  decrementCounter() {
    this.store.dispatch({
      type: 'DECREMENT'
    });
  }

  resetCounter() {
    this.store.dispatch({
      type: 'RESET'
    });
  }

  update() {
    this.counter.innerText = this.store.getState().counter;
  }
}
