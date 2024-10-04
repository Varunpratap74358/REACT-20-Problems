import React, { useEffect, useState } from 'react'

const P7 = () => {
  const [time,setTime] = useState(60)
  useEffect(()=>{
    if(time>0){
      const timer = setTimeout(()=>setTime(time-1),1000)
      return ()=>clearTimeout(timer)
    }else{
      setTime(0)
    }
  },[time])
  return (
    <div>
      Time Left : {time} second
    </div>
  )
}

export default P7
