import styled from 'styled-components';

export const ItemCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #FFF;
    width: 320px;
    margin: 20px;
    height: 530px;    
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 0 2em #CCC;
`;

 export const ItemCardPhoto = styled.img`
    width: 318px;
    height: 400px  
 `
 export const ItemCardName = styled.span`
    text-align: center;
    font-size: 24px;
    color: #53504e;
    margin-bottom: 5px;
 `
 export const ItemCardPrice = styled.span`
    text-align: center;
    font-size: 20px;
    color: #0a1a6f;
    margin-bottom: 5px;
 
 `
export const ItemButton = styled.button`
    border-radius: 5px;
    background-color: #0a1a6f;
    border: 1px solid #0a1a6f;
    color: #FFF;
    cursor: pointer;     
    height: 30px;
    width: 80px;
    margin-bottom: 5px;
`;