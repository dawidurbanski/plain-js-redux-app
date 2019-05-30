export default class Counter {
  constructor(options) {
    this.counter = document.querySelector(options.counter);
    this.buttons = options.buttons.map(
      button => document.querySelector(button));

    this.addButtonsEventListeners();
  }

  addButtonsEventListeners() {
    this.buttons.forEach(
      button => button.addEventListener(
        'click', (e) => this.onButtonClick(e)));
  }

  onButtonClick(e) {
    e.preventDefault();

    // dynamically call function by button data-action attribute
    this[e.target.dataset.action]();
  }

  increaseCounter() {
    console.log('increase!');
  }

  decreaseCounter() {
    console.log('decrease!');
  }

  resetCounter() {
    console.log('reset!');
  }
}
