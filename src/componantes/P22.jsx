import React, { useEffect, useReducer } from 'react'

const itemParPage = 5
const paginationReducer = (state, action) => {
  // console.log(state,action)
  switch (action.type) {
    case 'Set_total_items': {
      return { ...state, totalItems: action.payload }
    }
    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.payload }
    }
    default: {
      return state
    }
  }
}

const P22 = () => {
  const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`)
  const [paginationState, dispatch] = useReducer(paginationReducer, {
    currentPage: 1,
    totalItems: 0,
  })

  useEffect(() => {
    dispatch({ type: 'Set_total_items', payload: data.length })
  }, [])

  const startIndex = (paginationState.currentPage - 1) * itemParPage
  const lastIndex = startIndex + itemParPage
  const displayedItems = data.slice(startIndex, lastIndex)

  const handelPageClick = (newPage) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: newPage })
  }

  return (
    <div>
      <h1 className="text-4xl text-center">PAGINATION</h1>
      <ul className="mt-7 flex justify-between flex-wrap">
        {displayedItems.map((item, index) => {
          return (
            <li
              key={index}
              className="bg-green-500 px-5 py-3 w-[100px] rounded "
            >
              {item}
            </li>
          )
        })}
      </ul>
      <div className="flex justify-center mt-10">
        <button
          className={` py-3 px-9 m-4 rounded font-bold hover:bg-blue-800 ${
            paginationState.currentPage === 1
              ? 'bg-slate-500 hover:bg-slate-500 cursor-not-allowed'
              : 'bg-blue-700'
          } `}
          onClick={() => handelPageClick(paginationState.currentPage - 1)}
          disabled={paginationState.currentPage === 1}
        >
          Previos
        </button>
        <button
          className={` py-3 px-9 m-4 rounded font-bold hover:bg-blue-800 ${
            lastIndex >= data.length
              ? 'bg-red-500 hover:bg-red-500 cursor-not-allowed'
              : 'bg-blue-700'
          } `}
          onClick={() => handelPageClick(paginationState.currentPage + 1)}
          disabled={lastIndex >= data.length}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default P22
