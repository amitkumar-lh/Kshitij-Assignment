import axios from "axios";
import { Dispatch } from "redux";
import { loadingAction } from "../actions/loadingAction";
import { notMatchedCredentials } from "./authAction";
import history from "../../components/History";

export const saveCredential = (data) => {
  return {
    type: "SAVE_CREDENTIALS",
    payload: data,
  };
};

export const getLogsAction = (data) => {
  return {
    type: "GET_LOGS_DATA",
    payload: data,
  };
};

export const getLogsData = (
  title,
  password,
  env = "production",
  statusCode,
  status = false
) => {
  return async (dispatch) => {
    try {
      dispatch(loadingAction(true));
      let response;
      if (status) {
        response = await axios.get(
          `https://log-service.vercel.app/logs?projectTitle=${title}&readPassword=${password}&environment=${env}&statusCode=${statusCode}`
        );
      } else {
        response = await axios.get(
          `https://log-service.vercel.app/logs?projectTitle=${title}&readPassword=${password}&environment=${env}`
        );
      }

      if (response?.data) {
        dispatch(getLogsAction(response.data));
      } else {
        dispatch(getLogsAction(response.data));
      }
      dispatch(notMatchedCredentials(true));
      history.push("/logs");
    } catch (error) {
      dispatch(getLogsAction([]));
      dispatch(notMatchedCredentials(false));
    } finally {
      dispatch(loadingAction(false));
    }
  };
};
