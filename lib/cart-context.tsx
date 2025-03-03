"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  getTotalPrice: () => 0,
})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    // Load cart items from local storage on initial load
    const storedCart = localStorage.getItem("cartItems")
    if (storedCart) {
      setItems(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    // Save cart items to local storage whenever the cart changes
    localStorage.setItem("cartItems", JSON.stringify(items))
  }, [items])

  const addToCart = (item: any) => {
    const existingItemIndex = items.findIndex((i) => i.id === item.id)

    if (existingItemIndex !== -1) {
      const newItems = [...items]
      newItems[existingItemIndex] = {
        ...newItems[existingItemIndex],
        quantity: (newItems[existingItemIndex].quantity || 1) + (item.quantity || 1),
      }
      setItems(newItems)
    } else {
      setItems([...items, { ...item, quantity: item.quantity || 1 }])
    }
  }

  const removeFromCart = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }

    const newItems = items.map((item) => (item.id === id ? { ...item, quantity: quantity } : item))
    setItems(newItems)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * (item.quantity || 1), 0)
  }

  return (
    <>
      <CartContext.Provider
        value={{
          items: items,
          addToCart: addToCart,
          removeFromCart: removeFromCart,
          updateQuantity: updateQuantity,
          getTotalPrice: getTotalPrice,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  )
}

export const useCart = () => useContext(CartContext)

