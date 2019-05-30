export default class DonationForm {
  constructor(store, options) {
    this.store = store;
    this.rangePicker = document.querySelector(options.rangePicker);
    this.input = document.querySelector(options.input);
    this.emoji = document.querySelector(options.emoji);
    this.valueBar = document.querySelector(options.valueBar);

    this.feelings = [
      {
        donation: 20,
        emoji: '😞'
      },
      {
        donation: 40,
        emoji: '😐'
      },
      {
        donation: 60,
        emoji: '🙂'
      },
      {
        donation: 80,
        emoji: '🥳'
      },
      {
        donation: 100,
        emoji: '❤️'
      },
    ];

    this.rangePicker.addEventListener('input', e => this.onDonationValueChange(e));
    this.input.addEventListener('input', e => this.onDonationValueChange(e));
  }

  onDonationValueChange(e) {
    this.store.dispatch({
      type: 'SET_DONATION_VALUE',
      payload: {
        donation: e.target.value
      }
    });
  }

  update() {
    const state = this.store.getState().donationFormReducer;

    this.rangePicker.value = state.donation;
    this.input.value = state.donation;

    const filterFeelings = this.feelings.filter(
      emoji => emoji.donation >= state.donation);

    this.emoji.innerText = filterFeelings[0].emoji;

    this.valueBar.style.backgroundColor = this.getColorByValue(state.donation);
    this.valueBar.style.width = `${state.donation}%`;
  }

  getColorByValue(value){
    const hue = (value / 100 * 120).toString(10);
    return `hsl(${hue}, 100%, 50%)`;
  }
}
