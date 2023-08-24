import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import login from '../images/login.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './Shared/Navigation/Navigation';
import axios from "axios";
import { Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Login() {

  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
// useEffect(()=>{
//   window.location.reload();
// },[]);
  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  const handleLoginSubmit = async error => {
    try {
      dispatch(showLoading());


      const response = await axios.post("/api/user/login", loginData);
      dispatch(hideLoading());

      if (response.data.success) {
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
      }
    } catch (error) {
      dispatch(hideLoading());

    }
  };

  return (

    <Container>
      <Navigation></Navigation>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>Login</Typography>
          <Form onFinish={handleLoginSubmit}>
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard" />
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              variant="standard" />

            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
            <NavLink
              style={{ textDecoration: 'none' }}
              to="/register">
              <Button variant="text">New User? Please Register</Button>
            </NavLink>

          </Form>

        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;