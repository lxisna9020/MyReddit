import React, { Component } from "react";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        My_Reddit
      </Link>{" "}
      {new Date().getFullYear()} {/* 显示今年日期 */}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios({
      method: "post",
      url: "http://localhost:8888/my-reddit-back/wp-json/jwt-auth/v1/token",
      data: {
        username: data.get("username"),
        password: data.get("password"),
      }, //data是body
    })
      .then((res) => {
        if (res.data.token) {
          // to store a user object into the local storage（把一个objet转成string存储起来）
          localStorage.setItem("user", JSON.stringify(res.data));
          history.push("/");
        } else {
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log("request failed");
        history.push("/login");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Se connecter
          </Typography>
          <Box
            component="form"
            onSubmit={handleClick}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Se connecter
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? S'inscrire"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

// export default function logout() {
//   localStorage.removeItem("user");
// }

// export default function register(username, email, password) {
//   return axios.post(API_URL + "signup", {
//     username,
//     email,
//     password
//   });
// }

// export default function getCurrentUser() {
//   return JSON.parse(localStorage.getItem('user'));
// }
