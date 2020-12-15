import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
    } from "@material-ui/core";
import "../App.css";
import LoginCard from '../Components/LoginForm'
export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    alert("Login Successful")
  }; // your form submit function which will invoke after successful validation

  //console.log(watch("username")); // you can watch individual input by pass the name of the input
// console.log(register)
  return (
      <>
      <Grid container spacing={0} justify="center" direction="row">
<Grid item>
<Grid
container
direction="column"
justify="center"
spacing={2}
className="login-form"
>
<Paper
variant="elevation"
elevation={2}
className="login-background"
>
<Grid item>
<Typography component="h1" variant="h5">
Sign in
</Typography>
</Grid>
<Grid item>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Grid container direction="column" spacing={2}>
<Grid item>
      <TextField
type="email"
placeholder="Email"
fullWidth
name="username"
variant="outlined"

required
autoFocus
/>
<TextField
type="password"
placeholder="Password"
fullWidth
name="password"
variant="outlined"

required
/>
      {/* {errors.exampleRequired && <p>This field is required</p>} */}
      </Grid>
<Grid item>
      <input type='text'
variant="contained"
color="primary"
type="submit"
className="button-block"

value='Submit'
/>
</Grid>
</Grid>
    </form>
    </Grid>
<Grid item>
<Link href="#" variant="body2">
Forgot Password?
</Link>
</Grid>
</Paper>
</Grid>
</Grid>
</Grid>

    </>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);