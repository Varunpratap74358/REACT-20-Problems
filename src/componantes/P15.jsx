import React, { useState } from 'react'

const P15 = () => {
  const items = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
    'item8',
  ]
  const [input, setInput] = useState('')
  const filterItems = items.filter((item) => {
    return item.toLowerCase().includes(input.toLowerCase())
  })
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex justify-center w-[80%] py-2 px-4 rounded-xl text-black"
        placeholder="search item"
      />
      <ul className=' flex flex-col gap-2 mt-10'>
        {filterItems.map((v, i) => {
          return (
            <li key={i} className="text-xl bg-pink-500 text-red-100">
              {v}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default P15
