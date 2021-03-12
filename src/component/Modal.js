import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from "../Context";
import {Link} from "react-router-dom";

export default class Modal extends Component {
    render() {
        return (

            <ProductConsumer>
                  {value=>{
                     // console.log(value)
                const {modalOpen, closeModal} =value;
                const {img, title, price} = value.modalProduct;

                if(!modalOpen){
                    return null;
                } else{
                    return(

                    <ModalContainer> 
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 
                                text-center text-capitalize">
                                    <h1>item added to the cart</h1>
                                    <img  src={img} className="img-fluid" style={{height:50}} alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted "> price: ${price}</h5>
                                        <Link to="/">
                                       
                                       <ButtonContainer onClick={()=>closeModal()}>
                                                Store

                                       </ButtonContainer>

                                        </Link>
                                        <Link to="/cart">
                                       
                                       <ButtonContainer cart   onClick={()=>closeModal()}>
                                              Go to cart
                                       </ButtonContainer>

                                        </Link>
                                    </div> 

                            </div>
                        </div>
                    </ModalContainer>
                    );
            } 
                
            }}
          
            
            </ProductConsumer>
        )
    }
}


const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
display:flex;
background: rgba(0,0,0,0.3);
align-items:center;
justify-content:center;
#modal{
    background:#fff;
}


`;



const ButtonContainer =  styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:gold;
border:0.05rem  solid var(--lightBlue);
border-color:${props => 
props.cart ? "var(--mainYellow)": "var(--lightBlue)"};
color:${props=> (props.cart ? "var(mainYellow)": "var(--lightBlue)")};
border-radius:0.5rem;
padding:0.5rem 0.5rem;
cursor:pointer;
margin:0.5rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:${props=> (props.cart ? "var(mainYellow)": "var(--lightBlue)")};
    color:var(--mainBlue);
}
&:focus{
    outline:none
}
`