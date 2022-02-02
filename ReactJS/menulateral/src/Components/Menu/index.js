import React from 'react';
import { Menu_principal, Menu_List, Menu_row, Logo } from './styles';

function Menu() {
    return (
        <Menu_principal>
            <Logo />
            <Menu_List>
                <Menu_row>DashBoard</Menu_row>
                <Menu_row>Unidades</Menu_row>
                <Menu_row>Cadastro de energia gerada</Menu_row>
            </Menu_List>
        </Menu_principal>
    )
}

export default Menu;