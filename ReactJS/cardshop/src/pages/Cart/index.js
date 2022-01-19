import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';
import { MdDelete } from "react-icons/md";
import { Table, TBody, THeader, CartPhoto, RowItens, Row } from './styles';

import Container from '../../components/Container';

function Cart() {

  const { cart, removeItem } = useContext(CartContext)

  return (
    <Container>
      <Table>
        <THeader>
          <th>#</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Deletar</th>
        </THeader>
        <TBody>
          {cart.map(item =>
            <Row>
              <RowItens>
                <CartPhoto
                  src={item.card_images[0].image_url_small}
                  alt="Foto da carta"
                />
              </RowItens>
              <RowItens>{item.name}</RowItens>
              <RowItens>{
                new Intl.NumberFormat(
                  'pt-BR',
                  { style: 'currency', currency: 'BRL' }
                ).format(item.card_prices[0].cardmarket_price)
              }</RowItens>
              <RowItens>
                <MdDelete
                  size={30}
                  color="#EC6D08"
                  onClick={() => removeItem(item.idCard)}
                />
              </RowItens>
            </Row>
          )}
        </TBody>
      </Table>
      </Container>
  );
}

export default Cart;