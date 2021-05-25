import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getLogsData } from "../redux/actions";
import { Loading } from "../reuseable/Loading";
import { postLogsData } from "../redux/actions/postData";
import "./select.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: 0,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
}));

export const Logs = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const genericData = useSelector((state) => state.LOGS);
  const passwordDetails = useSelector((state) => state.CREDENTIALS);
  const loading = useSelector((state) => state.LOADING);
  const password = passwordDetails?.password;
  const title = passwordDetails?.title;
  const [arrToRender, setArrToRender] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [env, setEnv] = useState("production");

  useEffect(() => {
    setArrToRender(genericData);
  }, [genericData]);

  const handleChange = (e, isDone, id) => {
    dispatch(postLogsData(title, password, id, isDone, setIsLoading));
  };

  const openOccurences = () => {};

  const changeEnv = (e) => {
    if (e.target.value === "0") {
      dispatch(getLogsData(title, password));
    } else if (e.target.value === "1") {
      setEnv("staging");
      dispatch(getLogsData(title, password, "staging"));
    } else if (e.target.value === "2") {
      setEnv("development");
      dispatch(getLogsData(title, password, "development"));
    }
  };

  const changeStatusCode = (e) => {
    if (e.target.value === "0") {
      dispatch(getLogsData(title, password, env, "400", true));
    } else if (e.target.value === "1") {
      dispatch(getLogsData(title, password, env, "401", true));
    } else if (e.target.value === "2") {
      dispatch(getLogsData(title, password, env, "402", true));
    } else if (e.target.value === "3") {
      dispatch(getLogsData(title, password, env, "403", true));
    } else if (e.target.value === "4") {
      dispatch(getLogsData(title, password, env, "404", true));
    } else if (e.target.value === "5") {
      dispatch(getLogsData(title, password, env, "405", true));
    }
  };

  if (loading?.showLoading) {
    return <Loading className="h-100 w-100" />;
  }
  return (
    <>
      <div className="sticky-top bg-success d-flex justify-content-between px-4 py-4">
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="text-white"
            style={{ cursor: "pointer" }}
            onClick={() => history.goBack()}
          >
            <u>
              {" "}
              <b>{title}</b>{" "}
            </u>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <FormControl className={classes.formControl}>
            <NativeSelect
              onChange={changeStatusCode}
              name="age"
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "age" }}
            >
              <option value={"0"}>400 Bad Request</option>
              <option value={"1"}>401 Unauthorized</option>
              <option value={"2"}>403 Forbidden</option>
              <option value={"3"}>404 Not Found</option>
              <option value={"4"}>405 Method Not Allowed</option>
              <option value="5">500 Internal Server Error</option>
            </NativeSelect>
          </FormControl>

          <div className={`ml-3 `}>
            <FormControl className={classes.formControl}>
              <NativeSelect
                //value={env}
                onChange={(e)=>
                  changeEnv(e)
                 }
                name="age"
                className={classes.selectEmpty}
                inputProps={{ "aria-label": "age" }}
              >
                <option value={"0"}>Production</option>
                <option value={"1"}>Staging</option>
                <option value={"2"}>Development</option>
              </NativeSelect>
            </FormControl>
          </div>
        </div>
      </div>
      <div
        className="mt-4 px-4 py-4 mx-4 shadow-lg"
        style={{ height: "520px" }}
      >
        {arrToRender?.listLogInstances?.map((ele, i) => (
          <div className="d-flex mt-1 px-2 py-2 shadow" key={i}>
            <div
              className="w-75"
              style={{ cursor: "pointer" }}
              onClick={() => openOccurences(ele._id)}
            >
              <div>
                <span>endpoint</span>
                <span className="ml-3"></span>
                <span>path: {ele.endpoint.path}</span>
                <span className="ml-2">method: {ele.endpoint.method}</span>
              </div>
              <div className="mt-2">
                <span>isDone</span>
                <span className="ml-3">
                  {ele.isDone === true ? "true" : "false"}
                </span>
              </div>
              <div className="mt-2">
                <span>_id</span>
                <span className="ml-3">{ele._id}</span>
              </div>
              <div className="mt-2">
                <span>projectId</span>
                <span className="ml-3">{ele.projectId}</span>
              </div>
              <div className="mt-2">
                <span>statusCode</span>
                <span className="ml-3">{ele.statusCode}</span>
              </div>
              <div className="mt-2">
                <span>message</span>
                <span className="ml-3">{ele.message}</span>
              </div>
              <div className="mt-2">
                <span>stack</span>
                <span className="ml-3">{ele.stack}</span>
              </div>
              <div className="mt-2">
                <span>environment</span>
                <span className="ml-3">{ele.environment}</span>
              </div>
              <div className="mt-2">
                <span>createdAt</span>
                <span className="ml-3">{ele.createdAt}</span>
              </div>
              <div className="mt-2">
                <span>updatedAt</span>
                <span className="ml-3">{ele.updatedAt}</span>
              </div>
            </div>
            <div className="d-flex w-25 justify-content-center align-items-center position-relative">
              {!isLoading ? (
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={ele.isDone}
                    onChange={(e) => {
                      handleChange(e, ele.isDone, ele._id);
                    }}
                    id="defaultCheck1"
                  ></input>
                  <label className="form-check-label" for="defaultCheck1">
                    isDone
                  </label>
                </div>
              ) : (
                <Loading />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
