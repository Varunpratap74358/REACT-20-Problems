import React, { useState } from 'react'

const P2 = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
      <h3 className='text-4xl font-bold'>{count}</h3>
      <button className='p-4 bg-red-50 m-2' onClick={()=>setCount(count+1)}>Incriment</button>
      <button className='p-4 bg-red-50 m-2' onClick={()=>setCount(count-1)}>Decriment</button>
      <button className='p-4 bg-red-50 m-2' onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default P2
