export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "NOT_MATCHED":
      return { loggedIn: false };
    case "LOGGED_IN":
      return { loggedIn: true };
    default:
      return state;
  }
};
