import styled from 'styled-components';

export const Table = styled.table`
  width: 70%;
  background: #FFF;  
  border-radius: 10px;
  margin: 10px 0;
  box-shadow: 0 0 1em #CCC;
`;

export const THeader = styled.thead`
  th {
  color: DimGray;
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #CCC;
  font-size: 20px;
  }
`;

export const TBody = styled.tbody`
`;

export const Row = styled.tr`
`;

export const RowItem = styled.td`
  padding: 5px;
  border-bottom: 1px solid #CCC;
  font-size: 18px;
`;

export const CartPhoto = styled.img`
  height: 100px;
`;

export const Button = styled.button`
  border: 0;
  background: #0a1a6f;
  height: 35px;  
  color: #FFF;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
`;

export const TotalBook = styled.span`
    width: 70%;
    font-weight: bold;
    font-size: 36px;
    text-align: right;
    margin: 5px 5px;
`

export const ContainerDefault = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f5;
`;
