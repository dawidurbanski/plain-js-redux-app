export default function donationFormReducer(currentState = { donation: 30 }, action) {
  switch (action.type) {
    case 'SET_DONATION_VALUE':
      const state = Object.assign({}, currentState);
      state.donation = action.payload.donation;
      return state;
      break;
    default:
      return currentState;
  }
}
