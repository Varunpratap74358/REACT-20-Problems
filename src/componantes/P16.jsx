import React, { useState } from 'react'

const P16 = () => {
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
  const itemsParPage = 3

  const [currentPage,setCurrentPage] = useState(1)
  const indexOfLastItem = currentPage* itemsParPage;
  const indexOfFirstItem = indexOfLastItem - itemsParPage
  const currentItems =items.slice(indexOfFirstItem,indexOfLastItem)

  return <div>
    <button onClick={()=>setCurrentPage(currentPage+1)} className='bg-red-200 text-black p-4 mb-6'>Next Page {currentPage} </button>
    <button onClick={()=>setCurrentPage(currentPage-1)} className='bg-red-200 text-black p-4 mb-6'>Previus Page {currentPage} </button>
    <ul>
        {
            currentItems.map((v,i)=>{
                return(
                    <li key={i}>{v}</li>
                )
            })
        }
    </ul>
  </div>
}

export default P16
