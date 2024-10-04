import React from 'react'
import { Link, useParams } from 'react-router-dom'

const P10 = () => {
    const params = useParams()
    
  return (
    <div className='flex flex-col '>
      <Link className='text-xl text-blue-600' to={'/'}>Home</Link>
      <Link className='text-xl text-blue-600' to={'/about'}>About</Link>
      <Link className='text-xl text-blue-600' to={'/contact'}>Contact</Link>
    </div>
  )
}

export default P10
