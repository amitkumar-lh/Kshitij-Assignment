import axios from "axios";

export const setLogsStatus = (data) => {
  return {
    type: "POST_LOGS_DATA",
    payload: data,
  };
};

export const postLogsData = (title, password, id, done, setIsLoading) => {
  return async (dispatch) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://log-service.vercel.app/logs/status`,
        {
          projectTitle: title,
          readPassword: password,
          logInstanceId: id,
          isDone: done,
        }
      );
      if (response?.data) {
        dispatch(setLogsStatus(response.data));
      } else {
        dispatch(setLogsStatus(response.data));
      }
    } catch (error) {
      dispatch(setLogsStatus([]));
    } finally {
      setIsLoading(false);
    }
  };
};
