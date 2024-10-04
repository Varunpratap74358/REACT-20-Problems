import React from 'react'

const P4 = () => {
    const item = ['Item1','item2','item3','item4']
  return (
    <div>
      {
        item.map((v,i)=>{
            return(
                <h1 key={i}>{i+1} : {v}</h1>
            )
        })
      }
    </div>
  )
}

export default P4
