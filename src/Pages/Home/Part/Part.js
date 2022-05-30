import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    const { name, image, minOrder, price, description, _id, stock } = part;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-2 p-2">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Minimum order: {minOrder}pcs</p>
                <p>description: {description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/parts/${_id}`} disabled={stock < 5000} className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Part;