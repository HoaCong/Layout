import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import * as yup from "yup";
import { signup } from "../../redux/actions/login";
import {
  makeSelectError,
  makeSelectIsSuccessLogin,
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
  firstname: yup.string().required("Vui lòng nhập họ"),
  lastname: yup.string().required("Vui lòng nhập tên"),
  numberphone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .min(9, "Vui lòng nhập số điện thoại hợp lệ")
    .max(11, "Vui lòng nhập số điện thoại hợp lệ"),
  email: yup
    .string()
    .email("Vui lòng nhập email hợp lệ")
    .required("Vui lòng nhập email")
    .matches(
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
      "Vui lòng nhập email hợp lệ"
    ),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(6, "Mật khẩu quá ngắn"),
  rppassword: yup
    .string()
    .required("Vui lòng xác nhận mật khẩu")
    .oneOf([yup.ref("password"), null], "Xác nhận mật khẩu thất bại"),
});

function SignUp(props) {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const [error, setError] = useState();

  // const [users, setUsers] = useState();
  // function checkRegister(email, phone) {
  //   let result;
  //   users.filter((item) => item.numberphone === phone || item.email === email)
  //     .length === 0
  //     ? (result = true)
  //     : (result = false);
  //   return result;
  // }

  // async function onSubmit(data) {
  //   const data2 = {
  //     firstname: data.firstname,
  //     lastname: data.lastname,
  //     numberphone: data.numberphone,
  //     email: data.email,
  //     password: data.password,
  //     score: 0,
  //     time: 0,
  //   };
  //   if (checkRegister(data.email, data.numberphone)) {
  //     setError("");
  //     let user = await fetch("http://localhost:5000/users", {
  //       method: "POST",
  //       body: JSON.stringify(data2),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     });
  //     user = await user.json();
  //     localStorage.setItem("isSignIn", JSON.stringify(user));
  //     history.push("/");
  //     props.signIn("register");
  //   } else setError("Đăng ký thất bại");
  // }

  // useEffect(() => {
  //   async function fetchUsers() {
  //     const requestUrl = "http://localhost:5000/users";
  //     const response = await fetch(requestUrl);
  //     const responseJSON = await response.json();
  //     setUsers(responseJSON);
  //   }
  //   fetchUsers();
  // }, []);

  const onSubmit = async (data) => {
    const data2 = {
      firstname: data.firstname,
      lastname: data.lastname,
      numberphone: data.numberphone,
      email: data.email,
      password: data.password,
      score: 0,
      time: 0,
    };
    await props.triggerSignup(data2);
    if (props.statusFlags.isLoginSuccess) {
      history.push("/");
    } else {
      setError("Đăng ký thất bại");
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setError();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [error]);

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
        <Box m={5} fontWeight="fontWeightMedium">
          <Typography variant="h5" component="h5" align="center">
            Đăng ký miễn phí!
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          disableElevation
          size="large"
        >
          Đăng ký bằng facebook (Khuyến khích)
        </Button>
        <Box className={classes.login_or} mt={5} mb={3}>
          <Box borderBottom="1px solid #e1e1e1"></Box>
          <Typography className={classes.span_or} color="textSecondary">
            hoặc đăng ký mới
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
          <Box display="flex" mt={5} mb={1}>
            <TextField
              error={!!errors.firstname}
              helperText={errors.firstname && errors.firstname.message}
              label="Họ"
              variant="outlined"
              fullWidth
              required
              {...register("firstname")}
            />
            <TextField
              error={!!errors.lastname}
              helperText={errors.lastname && errors.lastname.message}
              label="Tên"
              variant="outlined"
              fullWidth
              required
              {...register("lastname")}
            />
          </Box>
          <TextField
            error={!!errors.numberphone}
            helperText={errors.numberphone && errors.numberphone.message}
            label="Số điện thoại"
            variant="outlined"
            fullWidth
            required
            {...register("numberphone")}
            margin="normal"
          />
          <TextField
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
            label="Email"
            variant="outlined"
            fullWidth
            required
            {...register("email")}
            margin="normal"
          />
          <TextField
            type="password"
            error={!!errors.password}
            helperText={errors.password && errors.password.message}
            label="Mật khẩu"
            variant="outlined"
            fullWidth
            required
            {...register("password")}
            margin="normal"
          />
          <TextField
            type="password"
            error={!!errors.rppassword}
            helperText={errors.rppassword && errors.rppassword.message}
            label="Xác nhận mật khẩu"
            variant="outlined"
            fullWidth
            required
            {...register("rppassword")}
            margin="normal"
          />
          {error && (
            <Typography color="error" align="left">
              {error}
            </Typography>
          )}
          <Box mt={3} mb={3}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              disableElevation
              size="large"
              margin="normal"
            >
              Đăng ký
            </Button>
          </Box>
        </form>
        <Box mt={3} mb={3} fontSize="fontSize">
          Khi bấm Đăng ký, bạn đã đồng ý với <a href="/#">chính sách</a> và
          <a href="/#"> điều kiện sử dụng</a> của tracnghiem.net
        </Box>
      </Box>
    </Container>
  );
}
const mapStateToProps = createStructuredSelector({
  statusFlags: makeSelectIsSuccessLogin(),
  logs: makeSelectError(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    triggerSignup: (userInfor) => dispatch(signup(userInfor)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
