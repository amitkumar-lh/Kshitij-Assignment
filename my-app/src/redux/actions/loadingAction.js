export const loadingAction = (flag) => {
  return {
    type: flag ? "SHOW_LOADING" : "HIDE_LOADING",
  };
};
