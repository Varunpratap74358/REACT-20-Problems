import React, { useState } from 'react'

const P17 = () => {
  const [color, setColor] = useState('black')
  const handleChange = (e) => {
    setColor(e.target.value)
  }
  return (
    <div className='flex justify-between'>
      <input type="color" onChange={handleChange} value={color} />
      <div
        className="w-[100px] h-[100px]"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  )
}

export default P17
