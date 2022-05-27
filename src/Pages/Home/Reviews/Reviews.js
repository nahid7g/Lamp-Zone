import React, { useState, useEffect } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-6'>
            <div className='w-3/5 mx-auto'>
                <h1 className='text-4xl text-teal-900 text-center my-3' style={{ color: "#bc9f4c" }}>REVIEWS</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 container mx-auto my-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>
        </div>
    );
};

export default Reviews;