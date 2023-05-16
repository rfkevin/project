"use client"
import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut } from "next-auth/react";
import { loginValidation } from '@/utils/validation';
import { useFormik } from 'formik';
import {styles} from "./login.module.css" ;
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
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
    <>
    <Box >
      <Head>
        <title>Login</title>
      </Head>

      <section className='w-3/4 mx-auto flex flex-col gap-10'>
        <div className="title">
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Detachezvous</h1>
          <p className='w-3/4 mx-auto text-gray-400'>BLALALALALALALALALLlallalalalalalaalallaalalallall</p>
        </div>

        {/* form */}
        <form onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name='email'
              placeholder='Email *'
              onChange={formik.handleChange}
              value={formik.values.email}
            />

          </div>
          {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span> : <></>}
          <div className="input-group">
            <input
              type="password"
              name='password'
              placeholder='password *'
              onChange={formik.handleChange}
              value={formik.values.password}
            />

          </div>
          {formik.errors.password && formik.touched.password? <span>{formik.errors.password}</span> : <></>}
          {/* login buttons */}
          <div className="input-button">
            <button type='submit'>
              Login
            </button>
          </div>

        </form>
        <div >
          <button onClick={handleGoogleSignIn}>
            Sign In with Google
          </button>
        </div>
        {/* bottom */}

        <p className='text-center text-gray-400 '>
          don't have an account yet? <Link href={'/register'}>Sign Up </Link>
        </p>
      </section>
      </Box>
    </>
  )
}

export default Login;