import axios from 'axios'
import React, { useState } from 'react'

const P14 = () => {
    const [haal,setHaal] = useState({})
    const [input,setInput] = useState('')
    console.log(haal)
    const fetchData = async()=>{
        const {data} = await axios.get(`https://api.weatherapi.com/v1/current.json?key=27fa04acd7f6449db1e21233240210&q=${input}&aqi=no`)
        console.log(data)
        setHaal(data)
    }
    fetchData()

  return (
    <div className='flex items-center justify-center flex-col'>
      <form onSubmit={fetchData} className='bg-red-400 w-[500px] flex items-center  p-10'>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='flex justify-center w-[80%] py-2 px-4 rounded-xl' placeholder='enter any city' />
        <button type='submit' className='bg-black py-2 px-4 rounded-lg'>Search</button>
      </form>
      <div>
            <div>
                <h3>City : {haal?.location?.name}</h3>
                <p>Cloud : {haal?.current?.cloud}%</p>
                <p>condition : Partly cloudy <img src="" alt="" /></p>
                <h4>Countary : {haal?.location?.country}</h4>
                <h4>localtime : {haal?.location?.localtime}</h4>
            </div>
      </div>
    </div>
  )
}

export default P14
