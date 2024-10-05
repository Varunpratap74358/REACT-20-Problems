import React from 'react'
import { useCart } from '../pages/CartContext'

const P19 = () => {
  const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
    { id: 4, name: 'Product D' },
    { id: 5, name: 'Product E' },
    { id: 6, name: 'Product F' },
    { id: 7, name: 'Product G' },
    { id: 8, name: 'Product H' },
    { id: 9, name: 'Product I' },
    { id: 10, name: 'Product K' },
    { id: 11, name: 'Product K' },
    { id: 12, name: 'Product L' },
    { id: 13, name: 'Product M' },
    { id: 14, name: 'Product N' },
  ]

  const { cartState, cartDispatch } = useCart()
  //   console.log(cartState)

  const addToCart = (item) => {
    // console.log(item)
    const existIngCartItem = cartState?.cartItems.find(
      (cartItems) => cartItems.id === item.id,
    )
    if (existIngCartItem) {
      cartDispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id: item.id, quantity: existIngCartItem.quantity + 1 },
      })
    } else {
      cartDispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } })
    }
  }


  const updateQuantity = (itemId,quantity)=>{
    if(quantity > 0){
        cartDispatch({type:'UPDATE_QUANTITY',payload: { id: itemId, quantity}})
    }
  }

  const removeItem = (itemId)=>{
    cartDispatch({type:'REMOVE_FROM_CART',payload:itemId})
  }
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-red-400">
        Shoping Cart
      </h1>
      <ul className="flex flex-wrap gap-2">
        {cartState?.cartItems.map((item, i) => (
          <li key={i}>
            {item.name} - {item.quantity}{' '}
            <button onClick={()=>updateQuantity(item.id, item.quantity+1)} className="bg-red-400 px-2 py-1 rounded-lg">+</button>{' '}
            <button onClick={()=>removeItem(item.id)} className="bg-red-400 px-2 py-1 rounded-lg">Remove</button>{' '}
            <button onClick={()=>updateQuantity(item.id, item.quantity-1)} className="bg-red-400 px-2 py-1 rounded-lg">-</button>
          </li>
        ))}
      </ul>
      <ul className="grid grid-cols-3 gap-1 mt-5">
        {products.map((product, i) => {
          return (
            <div
              key={i}
              className="bg-red-100 rounded-lg px-5 py-6 flex flex-col justify-between"
            >
              <h1 className="text-center mb-4 text-black font-bold">
                {product.name}
              </h1>
              <button
                onClick={() => addToCart(product)}
                className="bg-green-500 rounded-lg py-2 px-3"
              >
                Add To Cart
              </button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default P19
