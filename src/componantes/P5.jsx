import React, { useState } from 'react'

const P5 = () => {
    const [isTogle,setIsTogle] = useState(false)
  return (
    <div>
      <label htmlFor="">
        <input type="checkbox" onChange={()=>setIsTogle(!isTogle)} />
      </label>
      <p>{isTogle ? 'On' : 'Off'}</p>
    </div>
  )
}

export default P5
