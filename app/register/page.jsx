"use client"

import { useState } from 'react';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser, HiPhone } from "react-icons/hi";
import { register } from '@/endPoints/apiEndpoints';
import Link from 'next/link';
import Head from 'next/head';
import { useFormik } from 'formik';
import { registerValidation } from '@/utils/validation';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import { HiOutlineUserCircle, HiKey } from "react-icons/hi";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      fullName: "",
      password: "",
      cpassword: "",
      email: "",
      dob: "",
      phone: "",
      address: ""
    },
    validate: registerValidation,
    onSubmit
  })

  async function onSubmit(values) {
    const result = await register(values);
    console.log(result);
  }

  const [show, setShow] = useState({ password: false, cpassword: false })

  return (
    <div>
      
      <Head>
        <title>Register</title>
      </Head>

      <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '400px', background: '#00008B' }}>
        <Typography variant="h4" component="h1" align="center" color="textPrimary" gutterBottom>
          Register
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
          BLABLABLABLABL
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="fullName"
            name="fullName"
            label="Full Name *"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.fullName}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HiOutlineUserCircle />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="userName"
            name="userName"
            label="Username *"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.userName}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HiOutlineUserCircle />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="address"
            name="address"
            label="Address *"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.address}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HiPhone />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HiPhone />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="dob"
            name="dob"
            label="Date of Birth"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.dob}
            error={formik.touched.dob && Boolean(formik.errors.dob)}
            helperText={formik.touched.dob && formik.errors.dob}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HiPhone />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="email"
            name="email"
            label="Email *"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HiAtSymbol />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="password"
            name="password"
            label="Password *"
            fullWidth
            type={show.password ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HiKey />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShow({ ...show, password: !show.password })}>
                    {show.password ? <HiFingerPrint /> : <HiOutlineUserCircle />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="cpassword"
            name="cpassword"
            label="Confirm Password *"
            fullWidth
            type={show.cpassword ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.cpassword}
            error={formik.touched.cpassword && Boolean(formik.errors.cpassword)}
            helperText={formik.touched.cpassword && formik.errors.cpassword}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HiKey />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
                    {show.cpassword ? <HiFingerPrint /> : <HiOutlineUserCircle />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <div className="input-button">
            <Button type="submit" variant="contained" fullWidth>
              Register
            </Button>
          </div>
        </form>

        <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
          Have an account? <Link href="/login">Sign In</Link>
        </Typography>
        </Paper>
      </Container>
      
    </div>
  )
}

export default Register;
