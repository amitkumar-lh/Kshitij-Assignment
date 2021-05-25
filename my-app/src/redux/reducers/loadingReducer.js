export const LoadingReducer = (
  state = {
    showLoading: false,
  },
  action
) => {
  switch (action.type) {
    case "SHOW_LOADING":
      const loadingState = JSON.parse(JSON.stringify(state));
      loadingState.showLoading = true;
      return loadingState;
    case "HIDE_LOADING":
      return { showLoading: false };
    default:
      return { showLoading: false };
  }
};
