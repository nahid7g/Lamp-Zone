import React from 'react';

const Review = ({ review }) => {
    const { name, image, comment, rating } = review;
    return (
        <div className="card w-64 bg-base-100 shadow-xl mx-auto">
            <figure><img className='mask mask-circle w-[100px]' src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="rating">
                    <p>Rating: {rating}</p>
                </div>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Review;