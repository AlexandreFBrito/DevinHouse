import React, { useContext } from 'react';
import { ContainerDefault, TotalBook, Table, THeader, TBody, CartPhoto, Row, RowItem, Button } from './styles';
import { CartContext } from '../../contexts/Cart';


function Cart() {

  const { cart, removeItem } = useContext(CartContext)
  const totalBook = cart.reduce((total, totalRetorno) => total + totalRetorno.price, 0);
  return (
    <ContainerDefault>
        <TotalBook>Total: {
                  new Intl.NumberFormat(
                    'pt-BR',
                    { style: 'currency', currency: 'BRL' }
                  ).format(totalBook)
                }</TotalBook>
        <Table>
          <THeader>
            <th>#</th>
            <th>Nome</th>
            <th>SubTotal</th>
            <th></th>
          </THeader>
          <TBody>
            {cart.map(item =>
              <Row>
                <RowItem>
                  <CartPhoto
                    src={item.image}
                    alt="Foto do livro"
                  />
                </RowItem>
                <RowItem>{item.title}</RowItem>
                <RowItem>{
                  new Intl.NumberFormat(
                    'pt-BR',
                    { style: 'currency', currency: 'BRL' }
                  ).format(item.price)
                }
                </RowItem>
                <RowItem>
                  <Button onClick={() => removeItem(item.idBook)}>Remover</Button>
                </RowItem>
              </Row>
            )}
          </TBody>
        </Table>
      
    </ContainerDefault>
  )
}

export default Cart;