export const AlertReducer = (
  state = { message: "", type: "success", show: false, position: "top-right" },action
) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
