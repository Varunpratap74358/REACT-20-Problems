import React, { useState } from 'react'

const P8 = () => {
  const [todo, setTodo] = useState([])
  const [item, setItem] = useState('')
  const addTodo = (e) => {
    e.preventDefault()
    setTodo([...todo, item])
    console.log(todo)
    setItem('')
  }
  //   console.log(todo)

  const deleteTodo = (index)=>{
    const filterData = todo.filter((v,i)=> i !== index)
    setTodo(filterData)
  }
  return (
    <div>
      <div className="min-w-[300px] bg-green-300">
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="w-full px-4 py-3 text-black"
          />
        </form>
      </div>
      <div className="my-7">
        <ul className="w-full flex flex-col gap-3">
          {todo &&
            todo.map((v, i) => {
              return (
                <li key={i} className="rounded-xl py-2 text-2xl w-full bg-red-700 flex justify-between px-10 items-center font-bold">
                  {v} <button onClick={()=>deleteTodo(i)} className="bg-white text-black p-3">X</button>{' '}
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default P8
