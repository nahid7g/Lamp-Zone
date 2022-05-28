import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    const { name, image, minOrder, price, description, _id } = part;
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-2 p-2">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Minimum order: {minOrder}pcs</p>
                <p>description: {description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/parts/${_id}`} className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Part;