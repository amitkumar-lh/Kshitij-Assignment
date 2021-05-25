export const dataReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_LOGS_DATA":
      return action.payload;
    default:
      return state;
  }
};
