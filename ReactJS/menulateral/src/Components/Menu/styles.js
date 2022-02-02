import styled from "styled-components";
import logo from "../../assets/logo.png";

export const Menu_principal = styled.nav`
    height: 100%;
    width: 250px;
    background-color: white;
    border: 1px solid green;
`;

/* export const Menu_Title = styled.h1`
    color: #666666;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-top: 100px;
`; */

export const Logo = styled.img`
    width: 159px;
    height: 159px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 20px;
    background: url(${logo});
`;

export const Menu_List = styled.ul`
    height: auto; 
    padding: 0;
    width: 100%;
    margin-top: 100px;
`;

export const Menu_row = styled.li`
    width: 200;
    height: 60px;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    color: #A098AE;
    justify-content: center;
    align-items: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    
    &:hover {
        cursor: pointer;
        background-color: #4CBC9A;
        color: #FFF;
        border-radius: 10px;
        margin-left: 5px;
        margin-right: 5px;
      }

`;