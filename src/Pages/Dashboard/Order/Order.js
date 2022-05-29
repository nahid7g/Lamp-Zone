import React from 'react';

const Order = ({ order }) => {
    const { productName, price, email, address, phone, totalOrder } = order;
    return (
        <tr>
            <th>{productName}</th>
            <td>${price}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{totalOrder}</td>
            <button className='btn btn-primary'>Make Payment</button>
        </tr>
    );
};

export default Order;