import React from 'react'
import auth from '../../firebase.init'
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import Loading from '../Shared/Loading'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
    reset()
  }
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  if (gUser || user) {
    navigate(from, { replace: true })
  }
  let loginError
  if (gError || error) {
    loginError = (
      <p className='text-red-500'>{gError?.message || error?.message}</p>
    )
  }
  if (gLoading || loading) {
    return <Loading></Loading>
  }
  return (
    <div className='grid justify-center items-center h-screen'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='text-2xl text-center font-bold'>Login</h2>
          <form
            className='grid grid-cols-1 gap-2'
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Email  */}
            <label htmlhtmlFor='email' className='font-bold'>
              Email
            </label>
            <input
              id='email'
              className='input input-bordered w-full max-w-xs'
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is Required',
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'Provide a valid email address.',
                },
              })}
            />
            <label className='label'>
              {errors.email?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === 'pattern' && (
                <span className='label-text-alt text-red-500'>
                  {errors.email.message}
                </span>
              )}
            </label>
            {/* Password  */}
            <label htmlhtmlFor='password' className='font-bold'>
              Password
            </label>
            <input
              id='password'
              className='input input-bordered w-full max-w-xs'
              type='password'
              {...register('password', {
                required: {
                  value: true,
                  message: 'Please provide your password.',
                },
                minLength: {
                  value: 6,
                  message: 'Please provide a password more than 6 charecters.',
                },
              })}
            />
            <label className='label'>
              {errors.password?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === 'minLength' && (
                <span className='label-text-alt text-red-500'>
                  {errors.password.message}
                </span>
              )}
            </label>
            {loginError}
            <button className='btn btn-accent text-white' type='submit'>
              Login
            </button>
          </form>
          <p>
            New to Lamp Zone?{' '}
            <Link className='text-primary' to='/signup'>
              Sign Up
            </Link>
          </p>
          <div className='divider'>OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className='btn btn-outline'
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
