export const credentialReducer = (state = [], action) => {
    switch (action.type) {
      case "SAVE_CREDENTIALS":
        return action.payload;
      default:
        return state;
    }
  };