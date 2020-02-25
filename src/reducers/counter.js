const initialState = {
  count: 0,
  buttonClicks: 0,
  change: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        buttonClicks: state.buttonClicks + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        buttonClicks: state.buttonClicks + 1
      };
    case 'CHANGEVALUE':
      return {
        ...state,
        change: action.count,
      };
    case 'ADDNUMBERS':
      return {
        ...state,
        count: parseInt(state.change),
        buttonClicks: state.buttonClicks = 0
      };
    default:
      return state;
  }
}

export default counterReducer;