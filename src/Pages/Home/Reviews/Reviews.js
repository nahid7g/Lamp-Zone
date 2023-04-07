import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Loading from '../../Shared/Loading'
import Review from '../Review/Review'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    const fetchReviews = async() => {
      await axios
      .get('https://lamp-zone-server.vercel.app/reviews')
      .then((res) => setReviews(res.data))
    }
    fetchReviews()
  }, [])
  return (
    <div className='my-10'>
      <div className='w-3/5 mx-auto'>
        <h1
          className='text-4xl text-teal-900 text-center my-3'
          style={{ color: '#bc9f4c' }}
        >
          REVIEWS
        </h1>
      </div>
      {reviews.length === 0 && <Loading />}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 container mx-auto my-5'>
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  )
}

export default Reviews
