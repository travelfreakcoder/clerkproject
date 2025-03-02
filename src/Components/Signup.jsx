import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"








const Signup=()=> {

  const navigate=useNavigate()

  const schema=yup.object({
    first_name:yup.string().required("First name is required"),
    last_name:yup.string().required("Last name is required"),
    email:yup.string().required("This field is required"),
    password:yup.string().required("This field is required")
  })

  const {register,handleSubmit,formState:{errors}} =useForm({resolver:yupResolver(schema)})


  const onSubmit = (data) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

    console.log(data);
    
    const formData=new FormData()
    formData.append("first_name",data?.first_name)
    formData.append("last_name",data?.last_name)
    formData.append("email",data?.email)
    formData.append("password",data?.password)
    navigate("/signin")


  };

  return (
    
      <Container component="main" maxWidth="xs" style={{marginBottom:"150px"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                 
                  
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register("first_name")}
                />
                {errors?.first_name && <p>{errors?.first_name?.message}</p> }
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  
                  autoComplete="family-name"
                  {...register("last_name")}
                />
                {errors?.last_name && <p>{errors?.last_name?.message}</p> }
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  id="email"
                  label="Email Address"
                 
                  autoComplete="email"
                  {...register("email")}
                />
                {errors?.email && <p>{errors?.email?.message}</p> }
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password")}
                />
                {errors?.password && <p>{errors?.password?.message}</p> }
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink to="/signin" style={{color:"blue",textDecoration:"underline",fontWeight:"bold"}} >
                  Already have an account? Sign in
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
        
      </Container>
    
  );
}

export default Signup