import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { detailProduct } from '../data';
//import {storeProducts,detailProduct } from '../data'



export default class Details extends Component {
    render() {
       
        return (
            //ProductConsumer
            <ProductConsumer>
     {value=>{
           console.log(detailProduct)
            const {id,company,img
                , info,price,title,inCart
            }=value.detailProduct;  
            return(
                <div className="container py-5">
                    {/** title */}
                    <div className="row">
                        <div className="col-10 mx-auto text-center 
                        text-slanted text-blue my-5">
                           <h1>{title}</h1>
           
                        </div>
                    </div>
                       {/**end titlr */}
                        {/**product */}
                        <div className="row">
                         <div className="col-10 mx-auto col-md-6 my-3">
                             <img src={img} className="img-fluid" alt="product"/>
                         </div>
                         {/** product text */}
                         <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                             <h2>Model: {title} </h2>
                             <h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by:<span className="text-uppercae"> {company}</span></h4>
                             <h4 className="text-blue">
                                 <strong>
                                     price:<span>#</span>
                                     {price}

                                 </strong>
                             </h4>
                             <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                 some info about product:
                             </p>
                             <p className="text-muted lead text-blue">{info}</p>
                             {/**buttons */}
                         </div>
                         <Link to="/">
                             <ButtonContainer>
                                 back to store
                             </ButtonContainer>
                         
                         
                         </Link>
                         <ButtonContainer onClick={()=>{
                             value.addTocart(id);
                             value.openModal(id);
                         }}
                          disabled={inCart?true:false}
                         >
                             {inCart ? "incart": "add to cart"}

                          </ButtonContainer>

                        </div>

                </div>
            )
              // console.log(value.detailproduct)
           }}

            </ProductConsumer>
        )
    }
}





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
    outline:none;
}
`