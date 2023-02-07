import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const newsLetter = {
      name: data.name,
      email: data.email,
    }
    fetch('https://lamp-zone-server.vercel.app/newsletter', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newsLetter),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.success))
    reset()
    toast('Submited!')
  }
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>
            Please subscribe our Newsletter
          </h1>
          <p className='py-6'>
            If you want to be connected with us you can subscribe our newsletter
            so that we will be sending you about our latest plans and latest
            Products.
          </p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Your Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Name'
                  required
                  className='input input-bordered'
                  {...register('name')}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  required
                  className='input input-bordered'
                  {...register('email')}
                />
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
