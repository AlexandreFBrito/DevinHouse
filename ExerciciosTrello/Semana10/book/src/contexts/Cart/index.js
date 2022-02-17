import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { toast } from "react-toastify";

export const CartContext = createContext([]);

export function CartProvider({ children }) {


    const [cart, setCart] = useState([]);

    function handleAddCart(book) {

        const newBook = {
            ...book,
            idBook: uuidv4()
        }
        
        setCart([...cart, newBook])
        localStorage.setItem("cart", JSON.stringify([...cart, newBook]));
        //alert('Adicionado no carrinho')
        toast.success('adicionado ao carrinho')
    }

    function handleRemoveItemInCart(idBook) {
        const cartFiltered = cart.filter(item => {
            if (item.idBook === idBook) {
                return false // Remove item do carrinho
            } else {
                return true // permanece item no carrinho
            }
        })
        setCart(cartFiltered)
        localStorage.setItem("cart", JSON.stringify(cartFiltered));
        //alert('Removido do item')
        toast.success('Removido do carrinho')
    }

    useEffect(() => {
        function handleGetItensLocalStorage() {
            const storedArray = JSON.parse(localStorage.getItem("cart"));
            // se storage estiver vazio , coloca um array vazio
            setCart(storedArray || [])
        }
        handleGetItensLocalStorage();
    }, [])
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