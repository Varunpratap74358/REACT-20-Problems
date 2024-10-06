import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCRIMENT': {
      return state + 1
    }
    case 'DECRIMENT': {
      return state - 1
    }
    case 'RESET': {
      return 0
    }
    default: {
      return state
    }
  }
}

const P20 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="flex h-screen justify-center items-center my-auto">
      <div className="container w-[300px] h-[150px] bg-red-300 flex flex-col justify-around items-center rounded-lg shadow-lg shadow-red-600">
        <h2 className="text-black text-3xl font-bold">{state}</h2>
        <div className="btn">
          <button
            className="bg-green-600 py-2 px-5 rounded m-1 cursor-pointer hover:bg-green-500"
            onClick={() => dispatch({ type: 'INCRIMENT' })}
          >
            INC
          </button>
          <button
            className="bg-green-600 py-2 px-5 rounded m-1 cursor-pointer hover:bg-green-500"
            onClick={() => dispatch({ type: 'DECRIMENT' })}
          >
            DEC
          </button>
          <button
            className="bg-green-600 py-2 px-5 rounded m-1 cursor-pointer hover:bg-green-500"
            onClick={() => dispatch({ type: 'RESET' })}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  )
}
export default P20
