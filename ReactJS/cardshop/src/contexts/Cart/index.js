/* 
  COMO CRIAR UM CONTEXTO 
  1 - Importar createContext do react
  2 - atribui createContext para uma variável
    Ex: export const CartContext = createContext([]);
  3 - Criar o Provider
  4 - Importar o Provider no App.js
  5 - Consumir o contexto usando o useContex 
  ...
*/

import { createContext, useEffect, useState } from "react"; // 1 
import { v4 as uuidv4 } from 'uuid';
import Card from "../../components/Card";


export const CartContext = createContext([]); // 2

export function CartProvider({ children }) {

  const [cart, setCart] = useState([])

  function handleAddCart(card) {

/*     if (cart.find(item => item.id === card.id)) {
      alert('Item ja adicionado ao carrinho')
      return
    } */

    const newCard ={
      ...card,
      idCard: uuidv4()
    }
    setCart([...cart, newCard])
    localStorage.setItem("cart", JSON.stringify([...cart, newCard]));
    alert('Adicionado no carrinho');


  }

  function handleRemoveItemCart(idCard) {
    const cartFiltered = cart.filter(item => {
      if (item.idCard === idCard) {
        return false; //remove item do carrinho
      } else {
        return true; //permanece item no carrinho
      }
    })
    
    setCart(cartFiltered);
    localStorage.setItem("cart", JSON.stringify(cartFiltered));
    alert('Removido do carrinho');
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
        removeItem: handleRemoveItemCart
      }}>
      {children}
    </CartContext.Provider>
  )
}