import React, { useEffect, useState } from 'react'

const P11 = () => {
    const quets = ['qute1','qute2','qute3','qute4','qute5','qute6','qute7','qute8']
    let [random,setrandom] = useState(0)
    const randomQuets = ()=>{
        let temp = Math.floor(Math.random()*quets.length)
        setrandom(temp)
    }
    console.log(random)
  return (
    <div>
       <p>{quets[random]}</p>
       <button onClick={randomQuets} className='bg-green-700 p-4 mt-40'>Random</button>
    </div>
  )
}

export default P11
