import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import Loading from '../../Shared/Loading'
import Order from '../Order/Order'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [user] = useAuthState(auth)
  useEffect(() => {
    fetch(`https://lamp-zone-server.vercel.app/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
  }, [user?.email])
  if (orders.length === 0) {
    return <Loading />
  }
  return (
    <div>
      <h2 className='my-2'>Your Orders: {orders.length}</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <Order key={order._id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
