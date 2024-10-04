import React, { useState } from 'react'

const P3 = () => {
    const [input,setInput] = useState('')
  return (
    <div>
      <input className='bg-red-100 mt-7 text-black text-center' type="text" onChange={(e)=>setInput(e.target.value)} value={input} />
      <p>User: {input}</p>
    </div>
  )
}

export default P3
