import React from 'react';

const Review = ({ review }) => {
    const { name, image, comment, rating } = review;
    return (
        <div className="card w-64 bg-base-100 shadow-xl">
            <figure><img className='mask mask-circle w-[100px]' src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                </div>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Review;