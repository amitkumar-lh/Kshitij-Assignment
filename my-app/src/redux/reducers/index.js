import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { credentialReducer } from "./credentialReducer";
import { LoadingReducer } from "./loadingReducer";
import { authReducer } from "./authReducer";
import {AlertReducer} from './alertReducer';

const rootReducer = combineReducers({
  LOGS: dataReducer,
  CREDENTIALS: credentialReducer,
  LOADING: LoadingReducer,
  AUTH: authReducer,
  ALERT:AlertReducer
});

export default rootReducer;
