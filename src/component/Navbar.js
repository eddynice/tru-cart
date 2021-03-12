import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expandd-sm px-sm-5">
               <Link to="/">  TRU store
              {/** <img src="" alt="store" className="nav-brand"/>*/} 
               </Link>
               <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                       <Link to="/" className="nav-link">Product</Link>
                   </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                   <ButtonContainer>
                       <i className="fas fa-cart-plus"/>
                       My Cart
                       </ButtonContainer>
               </Link>


           </NavWrapper >
        )
    }
}
const NavWrapper = styled.nav`
background:#ed3e3e;
.nav-link{
    color:#fff;
    font-size:1.3rem;
    text-transform:uppercase;
}
a{
    font-size:1.3rem;
   
    color:#fff;
    &:hover{
        background:var(--lightBlue);
        color:#fff;
        text-decoration:none;
    }

}
`;


const ButtonContainer =  styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:gold;
border:0.05rem  solid var(--lightBlue);
border-radius:0.5rem;
padding:0.5rem 0.5rem;
cursor:pointer;
margin:0.5rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--lightBlue);
    color:var(--mainBlue);
}
&:focus{
    outline:none
}
`