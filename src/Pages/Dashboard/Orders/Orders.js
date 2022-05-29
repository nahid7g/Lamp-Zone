import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Order from '../Order/Order';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);
    return (
        <div>
            <h2 className='my-2'>Your Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <Order key={order._id} order={order} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;