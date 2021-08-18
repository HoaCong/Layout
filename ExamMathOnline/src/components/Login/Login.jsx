import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import * as yup from "yup";
import { login } from "../../redux/actions/login";
import {
  makeSelectError,
  makeSelectIsSuccessLogin,
  makeSelectLogin,
} from "../../redux/selectors/login";
const useStyles = makeStyles(() => ({
  login_or: {
    position: "relative",
  },
  span_or: {
    position: "absolute",
    top: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    padding: "0 16px",
  },
}));
const schema = yup.object().shape({
  username: yup.string().required("Vui lòng nhập tài khoản"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(6, "Mật khẩu ngắn"),
});

function Login({ triggeLogin, isLoginSuccess, logs, user }) {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [error, setError] = useState();
  const history = useHistory();

  const onSubmit = (data) => {
    triggeLogin(data);
    if (isLoginSuccess.isLoginSuccess) {
      history.push("/");
    } else setError(logs.err);
  };

  return (
    <Container maxWidth="md">
      <Box
        variant="outlined"
        border="1px solid #e1e1e1 "
        pl={10}
        pr={10}
        m={8}
        borderRadius={15}
      >
        <Box m={5}>
          <Typography variant="h5" component="h5" align="center">
            Xin chào! Chúc bạn một ngày tốt lành
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          disableElevation
          size="large"
        >
          Đăng nhập nhanh bằng facebook
        </Button>
        <Box className={classes.login_or} mt={5} mb={3}>
          <Box borderBottom="1px solid #e1e1e1"></Box>
          <Typography className={classes.span_or} color="textSecondary">
            hoặc
          </Typography>
        </Box>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            margin="normal"
            error={!!errors.username}
            helperText={errors.username && errors.username.message}
            label="Username"
            variant="outlined"
            fullWidth
            required
            {...register("username")}
          />
          <TextField
            margin="normal"
            error={!!errors.password}
            helperText={errors.password && errors.password.message}
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            required
            {...register("password")}
          />

          {error && (
            <Typography color="error" align="left">
              {error}
            </Typography>
          )}
          <Box mt={2} mb={2}>
            <Typography align="right">
              Quên mật khẩu?
              <Link to="/#">Nhấn vào đây</Link>
            </Typography>
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            disableElevation
            size="large"
          >
            Đăng nhập
          </Button>
        </form>
        <Box m={3}>
          <Typography align="center">
            Nếu bạn chưa có tài khoản?
            <Link to="/signup">&nbsp;Đăng ký ngay</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectLogin(),
  logs: makeSelectError(),
  isLoginSuccess: makeSelectIsSuccessLogin(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    triggeLogin: (userInfo) => dispatch(login(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
