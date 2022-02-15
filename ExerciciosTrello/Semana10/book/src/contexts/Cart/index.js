import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({ children }) {
    
    const [cart, setCart] = useState([]);

    function handleAddCart(card) {
        setCart([...cart])
        toast.success('adicionado ao carrinho')
        localStorage.setItem("cart", JSON.stringify([...cart, card]));
        alert('Adicionado no carrinho')
    }

    function handleRemoveItemInCart(idCard) {
        const cartFiltered = cart.filter(item => {
            if (item.idCard === idCard) {
                return false // Remove item do carrinho
            } else {
                return true // permanece item no carrinho
            }
        })
        setCart(cartFiltered)
        localStorage.setItem("cart", JSON.stringify(cartFiltered));
        alert('Removido do item')
    }

    return (
        <CartContext.Provider
            value={{
                cart: cart,
                addItem: handleAddCart,
                removeItem: handleRemoveItemInCart
            }}>
            {children}
        </CartContext.Provider>
    )
}