import React, { useEffect, useState } from 'react'

const P6 = () => {
    const [user,setUser] = useState([])
    useEffect(()=>{
        const fetChdata = async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            let data =await res.json()
            console.log(data)
            setUser(data)
        }
        fetChdata()
    },[])
  return (
    <div className='grid grid-cols-3 justify-center items-center'>
      {
        user ? user.map((v,i)=>{
            return (
                <div key={i} className='m-1'>
                    <div className="bg-blue-500 w-[250px] h-[260px]">
                            <h1 className='text-xl '>Name: <span className='text-red-700'>{v.name}</span></h1>
                    </div>
                </div>
            )
        }) :(
            <p className='text-5xl '>Loading....</p>
        )
      }
    </div>
  )
}

export default P6
