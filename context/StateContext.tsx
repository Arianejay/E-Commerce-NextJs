// next and react
import { createContext, useContext, useState } from 'react'

// styles
import toast, { Toast } from 'react-hot-toast'

// types
import { IContext } from '../types/context'
import { IProduct } from '../types/product'

const Context = createContext({} as IContext)

export const useStateContext = () => useContext(Context)

export const StateContext = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<Array<IProduct | any>>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [totalQuantities, setTotalQuantities] = useState<number>(0)
  const [qty, setQty] = useState<number>(1)

  let check: any
  let spliceItems

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
  const onAdd = (
    product: {
      name: string
      quantity: number
      _id: string
      price: number
    },
    quantity: number,
  ) => {
    check = cartItems.find((item: any) => item._id === product._id)

    // price and qty
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price)
    setTotalQuantities((prevTotalQty) => prevTotalQty + quantity)

    if (check) {
      // update cart
      const updateCart = cartItems.map((item: any) => {
        if (item._id === product._id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          }
        }
      })
      setCartItems(updateCart)
    } else {
      product.quantity = quantity
      setCartItems([...cartItems, { ...product }])
    }

    toast.success(`${qty} ${product.name} added to the cart.`)
  }

  // remove item on cart
  const onRemove = (product: any) => {
    check = cartItems.find((item) => item._id === product._id)
    spliceItems = cartItems.filter((item) => item._id !== product._id)

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - check.price * check.quantity,
    )
    setTotalQuantities((prevTotalQty) => prevTotalQty - check.quantity)
    setCartItems(spliceItems)
  }

  // toggle cart qty
  const toggleQty = (_id: any, value: any) => {
    check = cartItems.find((item) => item._id === _id)
    const index = cartItems.findIndex((product) => product._id === _id)
    spliceItems = cartItems.filter((item) => item._id !== _id)

    if (value === 'increment') {
      let newCartItems = [
        ...spliceItems,
        { ...check, quantity: check.quantity + 1 },
      ]

      setCartItems(newCartItems)
      setTotalPrice((prevTotalPrice) => prevTotalPrice + check.price)
      setTotalQuantities((prevTotalQty) => prevTotalQty + 1)
    } else if (value === 'decrement') {
      if (check.quantity > 1) {
        let newCartItems = [
          ...spliceItems,
          { ...check, quantity: check.quantity - 1 },
        ]

        setCartItems(newCartItems)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - check.price)
        setTotalQuantities((prevTotalQty) => prevTotalQty - 1)
      }
    }
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
        onRemove,
        toggleQty,
      }}
    >
      {children}
    </Context.Provider>
  )
}
