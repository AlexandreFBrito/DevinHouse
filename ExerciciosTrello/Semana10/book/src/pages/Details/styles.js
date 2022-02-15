import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const DivConteudo= styled.div`
    width: 80%;
    height: 640px;
    margin-top 10px;
    border: 1px solid #CCC;
    border-radius: 8px;
    box-shadow: 0 0 1em #CCC;
    display: flex;
    padding: 20px;
`;

export const Image = styled.img`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    display: block;    
`

export const DivDescription = styled.div`
    display: flex;
    width: 50%;
    background-color: #FFF;
    flex-direction: column;
    padding: 10px;
`

export const BookName = styled.h2`
    font-size: 44px;
    color: #0a1a6f;
    font-weight: bold;
    margin: 1px;
    padding: 0px;
 `
 export const BookPrice = styled.h3`
    font-size: 44px;
    color: black;
    font-weight: bold;
    margin: 1px;
    padding: 0px;
 `
 export const BookDescription = styled.p`
    line-height: 20px;
    text-align: justify;
    font-size: 20px;
    color: DimGray;

`
export const ItemButton = styled.button`
    border-radius: 5px;
    background-color: #0a1a6f;
    border: 1px solid #0a1a6f;
    color: #FFF;
    cursor: pointer;     
    height: 40px;
    width: 150px;
    margin: auto;    
`;