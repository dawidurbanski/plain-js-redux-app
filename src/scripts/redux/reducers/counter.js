export default function counterReducer(currentState = { counter: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: currentState.counter + 1 };
      break;

    case 'DECREMENT':
      return { counter: currentState.counter - 1 };
      break;

    case 'RESET':
      return { counter: 0 };
      break;

    default:
      return currentState;
  }
}
