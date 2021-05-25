
export const notMatchedCredentials = (flag) => {
  return {
    type:flag? "LOGGED_IN":"NOT_MATCHED",
  };
};
