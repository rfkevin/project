"use client"
import { useState } from 'react';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser, HiPhone } from "react-icons/hi";
import { register } from '@/endPoints/apiEndpoints';
import Link from 'next/link';
import Head from 'next/head';
import { useFormik } from 'formik';
import { registerValidation } from '@/utils/validation';

const Register = () => {
  // formik handle form
  const formik = useFormik({
    initialValues:{
      userName:"",
      fullName:"",
      password:"",
      cpassword:"",
      email:"",
      dob:"",
      phone:"",
      address:""
    },
    validate: registerValidation,
    onSubmit
  })

  // function on submit
  async function onSubmit(values){
    const result = await register(values);
    console.log(result);
  }
  const [show, setShow] = useState({ password: false, cpassword: false })

  
  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>

      <section className='w-3/4 mx-auto flex flex-col gap-10'>
        <div className="title">
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
          <p className='w-3/4 mx-auto text-gray-400'>BLABLABLABLABLABALBALABLABALNBAKBAKBABAKBAKBAKBKABKAKABANAN</p>
        </div>

        {/* form */}
        <form onSubmit={formik.handleSubmit}>
          <div >
            <input
              type="text"
              name='fullName'
              placeholder='Fullname *'
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
            <span className='icon flex items-center px-4'>
              <HiOutlineUser size={25} />
            </span>
          </div>
          {formik.errors.fullName && formik.touched.fullName ? <span>{formik.errors.fullName}</span> : <></>}
          <div >
            <input
              type="text"
              name='userName'
              placeholder='Username *'
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
            <span className='icon flex items-center px-4'>
              <HiOutlineUser size={25} />
            </span>
          </div>
          {formik.errors.userName && formik.touched.userName ? <span>{formik.errors.userName}</span> : <></>}
          <div>
            <input
              type="text"
              name='address'
              placeholder='Address *'
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            <span className='icon flex items-center px-4'>
              <HiPhone size={25} />
            </span>
          </div>
          {formik.errors.address && formik.touched.address ? <span>{formik.errors.address}</span> : <></>}
          <div >
            <input
              type="text"
              name='phone'
              placeholder='Phone'
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <span className='icon flex items-center px-4'>
              <HiPhone size={25} />
            </span>
          </div>
          {formik.errors.phone && formik.touched.phone ? <span>{formik.errors.phone}</span> : <></>}
          <div >
            <input
              type="text"
              name='dob'
              placeholder='date of birth'
              onChange={formik.handleChange}
              value={formik.values.dob}
            />
            <span className='icon flex items-center px-4'>
              <HiPhone size={25} />
            </span>
          </div>
          {formik.errors.dob && formik.touched.dob ? <span>{formik.errors.dob}</span> : <></>}
          <div>
            <input
              type="email"
              name='email'
              placeholder='Email *'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <span className='icon flex items-center px-4'>
              <HiAtSymbol size={25} />
            </span>         
          </div>
          {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span> : <></>}
          <div >
            <input
              type={`${show.password ? "text" : "password"}`}
              name='password'
              placeholder='password *'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, password: !show.password })}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? <span>{formik.errors.password}</span> : <></>}
          <div >
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              name='cpassword'
              placeholder='Confirm Password *'
              onChange={formik.handleChange}
              value={formik.values.cpassword}
            />
            <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
              <HiFingerPrint size={25} />
            </span>
            
          </div>
          {formik.errors.cpassword && formik.touched.cpassword ? <span>{formik.errors.cpassword}</span> : <></>}
          {/* login buttons */}
          <div className="input-button">
            <button type='submit' >
              Login
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className='text-center text-gray-400 '>
          Have an account? <Link href={'/login'}>Sign In </Link>
        </p>
      </section></div>
  )
}

export default Register