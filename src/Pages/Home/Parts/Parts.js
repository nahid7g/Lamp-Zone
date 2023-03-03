import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../../Shared/Loading'
import Part from '../Part/Part'

const Parts = () => {
  const [parts, setParts] = useState([])
  useEffect(() => {
    axios
      .get('https://lamp-zone-server.vercel.app/parts')
      .then((res) => setParts(res.data))
  }, [])
  return (
    <div className='my-6'>
      <div className='w-3/5 mx-auto'>
        <div>
          <h1
            className='text-4xl text-teal-900 text-center my-3'
            style={{ color: '#bc9f4c' }}
          >
            PRODUCTS
          </h1>
          <p className='text-xl'>
            Hand-crafted and designer products, Beautifully styled with an
            artistic presence, these lamp parts are feature ceramic, wood,
            acrylic, glass, metals and other natural materials.
          </p>
        </div>
      </div>
      {parts.length === 0 && <Loading />}
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-x-4 lg:grid-cols-3 container mx-auto my-5'>
        {parts.map((part) => (
          <Part key={part._id} part={part} />
        ))}
      </div>
    </div>
  )
}

export default Parts
