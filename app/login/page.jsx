"use client"
import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut } from "next-auth/react";
import { loginValidation } from '@/utils/validation';
import { useFormik } from 'formik';
import { Paper, Box, Button, TextField } from '@mui/material';
/* `${styles["bababa"]}`, ${styles.koko}*/

const Login = () => {
  //form handler with formik 
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate: loginValidation,
    onSubmit
  })
  // login with password and email  function

  async function onSubmit(values) {
    const status  = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "http://localhost:3000/home"
    })
  }

  // google signIn function
  async function handleGoogleSignIn() {
    signIn('google', { callbackUrl: "http://localhost:3000/home" })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '400px', background: '#00008B' }}>
        <Head>
          <title>Login</title>
        </Head>
        <Box sx={{ mb: '2rem', textAlign: 'center' }}>
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Detachezvous</h1>
          <p className='w-3/4 mx-auto text-gray-400'>BLALALALALALALALALLlallalalalalalaalallaalalallall</p>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Box sx={{ textAlign: 'center', my: '1rem' }}>
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Box>
        </form>
        <Box sx={{ textAlign: 'center', my: '1rem' }}>
          <Button variant="contained" fullWidth onClick={handleGoogleSignIn}>
            Sign In with Google
          </Button>
        </Box>
        <p className='text-center text-gray-400'>
          Don't have an account yet? <Link href={'/register'}>Sign Up</Link>
        </p>
      </Paper>
    </Box>
  );
  
}

export default Login;