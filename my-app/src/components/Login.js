import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import AlertMassage from '../components/alertmessage';
import { useHistory } from "react-router-dom";
import { getLogsData, saveCredential } from "../redux/actions/index";
import AlertMassage from "./Alert";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignIn = () => {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [logList, setLogList] = useState("");
  const genericData = useSelector((state) => state.LOGS);
  const loggedData = useSelector((state) => state.AUTH);
  const [status, setStatusBase] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedData?.loggedIn === false) {
      setStatusBase("Invalid Password");
    }
  }, [genericData, loggedData]);

  const submitForm = async (e) => {
    e.preventDefault();
    dispatch(saveCredential({ title: title, password: password }));
    dispatch(getLogsData(title, password));
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => {
            submitForm(e);
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Project Title"
            name="title"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      {/* {status ? <AlertMassage key={status.key} message={status.msg} /> : null} */}
    </Container>
  );
};
export default SignIn;
