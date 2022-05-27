import React from 'react';

const Part = ({ part }) => {
    const { name, image, minOrder, price, description } = part;
    return (
        <div class="card w-96 bg-base-100 shadow-xl m-2 p-2">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Minimum order: {minOrder}pcs</p>
                <p>description: {description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;