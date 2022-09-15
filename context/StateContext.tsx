// next and react
import { createContext, useContext, useState } from 'react'

// styles
import toast, { Toast } from 'react-hot-toast'

// types
import { IContext } from '../types/context'
import { IProduct } from '../types/product'

const Context = createContext({} as IContext)

export const useStateContext = () => useContext(Context)

export const StateContext: React.FC = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<Array<IProduct>>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [totalQuantities, setTotalQuantities] = useState<number>(0)
  const [qty, setQty] = useState<number>(1)

  // increase and decrease qty
  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1 // qty cannot go lower 1
      return prevQty - 1
    })
  }

  // add to cart
  const onAdd = (product: {
    name: string
    quantity: number
    _id: string
    price: number
  }) => {
    const check = cartItems.find((item: any) => item._id === product._id)

    // price
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price)

    if (check) {
      // update cart
      const updateCart = cartItems.map((item: any) => {
        if (item._id === product._id) {
          return {
            ...item,
          }
        }
      })
      setCartItems(updateCart)
    } else {
      setCartItems([...cartItems, { ...product }])
    }

    toast.success(`${qty} ${product.name} added to the cart.`)
  }

  return (
    <Context.Provider
      value={{
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  )
}
