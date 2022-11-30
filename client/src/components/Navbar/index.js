import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <header>
                <Nav>
                    <Bars />
                    <img src="imagem/Barnavlogo.png"></img>                
                    <NavMenu>
                        <NavLink to='/' activeStyle>
                            Página inicial
                        </NavLink>
                        <NavLink to='/sobre' activeStyle>
                            Sobre
                        </NavLink>
                        <NavLink to='/contato' activeStyle>
                            Contato
                        </NavLink>
                        <NavLink to='/cadastro' activeStyle>
                            Faça parte!
                        </NavLink>
                        <NavLink to='/login' activeStyle>
                            Acesso
                        </NavLink>                                                  
                    </NavMenu>                
                </Nav>
            </header>
        </>
    );
};

export default Navbar;