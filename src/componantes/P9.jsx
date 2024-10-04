import React, { useState } from 'react'

const P9 = () => {
    const [bgColor,setBgColor] = useState('black')
    const colorChanger=(color)=>{
        setBgColor(color)
    }
  return (
    <div className={`flex gap-3 justify-center mt-20 ${bgColor} h-screen`}>
      <button onClick={()=>colorChanger("bg-red-500")} className={`px-10 py-5 bg-red-800`}>Red</button>
      <button onClick={()=>colorChanger("bg-yellow-500")} className={`px-10 py-5 bg-yellow-800`}>Yellow</button>
      <button onClick={()=>colorChanger("bg-green-500")} className={`px-10 py-5 bg-green-800`}>Green</button>
    </div>
  )
}

export default P9
