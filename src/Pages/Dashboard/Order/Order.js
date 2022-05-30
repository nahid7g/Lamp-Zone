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
            <td className='btn btn-ghost'>Make Payment</td>
        </tr>
    );
};

export default Order;