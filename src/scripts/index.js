import Counter from './modules/Counter';

document.addEventListener('DOMContentLoaded', () => {
  new Counter({
    counter: '#counter',
    buttons: [
      '#increase-counter',
      '#decrease-counter',
      '#reset-counter'
    ]
  });
});
