import React from 'react'
import auth from '../../firebase.init'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import Loading from '../Shared/Loading'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)
  const [updateProfile, updating, updateError] = useUpdateProfile(auth)
  if (gUser || user) {
    navigate('/')
  }
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.name })
    reset()
  }
  let loginError
  if (gError || error || updateError) {
    loginError = (
      <p className='text-red-500'>
        {gError?.message || error?.message || updateError.message}
      </p>
    )
  }
  if (gLoading || loading || updating) {
    return <Loading></Loading>
  }
  return (
    <div className='grid justify-center items-center h-screen'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='text-2xl text-center font-bold'>Sign Up</h2>
          <form
            className='grid grid-cols-1 gap-2'
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name  */}
            <label htmlhtmlFor='name' className='font-bold'>
              Your Name
            </label>
            <input
              id='name'
              className='input input-bordered w-full max-w-xs'
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is Required',
                },
              })}
            />
            <label className='label'>
              {errors.name?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.name.message}
                </span>
              )}
            </label>
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
              Sign Up
            </button>
          </form>
          <p>
            Already have an Account?{' '}
            <Link className='text-primary' to='/login'>
              Login
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

export default SignUp
