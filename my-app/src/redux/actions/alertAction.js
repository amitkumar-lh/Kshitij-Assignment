export const alertStateAction = (data) => {
  return {
    type: SHOW_ALERT,
    payload: data,
  };
};

export const showAlert = (data) => {
  return (dispatch) => {
    dispatch(alertStateAction(data));
  };
};
