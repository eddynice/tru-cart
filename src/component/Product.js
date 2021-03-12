import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import  {ProductConsumer} from "../Context";
import ProTypes from "prop-types"



export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product
        return (
           < ProductWrapper className=" col-9 mx-auto col-md-6 col-lg-3 my-3">
        
               <div className="card">

                   <ProductConsumer>

                       {(value)=>(
                             <div className="img-container  p-5" 
                             onClick={()=> value.handleDetails(id)}>
             
                                <Link to="/details">
                                <img src={img}  style={{width:150, height:150}}alt="product" className="card-img-top" ></img>
                                    </Link> 
             <button className="cart-btn"
              disabled={inCart ? true:false} 
              onClick={()=>{
                  value.addTocart(id) ;
                  value.openModal(id)
              }}
              >  incart{inCart ? (
                 <p className="text-capitalize mb-0" disabled>
                     {" "} 
                     in ancart
                 </p>
             
             ):(
                 <i className="fas fa-cart-plus"/>
             )}
              
             
              </button>
             
                             </div>

                       )}
                 

                   </ProductConsumer>
                
                {/**card footer */}
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">{title}</p>
                    <h5 className="text-blue font-italic mb-0 ">
                        <span className="mr-1">#</span>
                        {price}
                    </h5>
                </div>

               </div>

           </ProductWrapper>
               
            
         )
    }
}


Product.protype={
    product:ProTypes.shape({
        id:ProTypes.number,
        img:ProTypes.string,
        title:ProTypes.string,
        price:ProTypes.number,
        inCart:ProTypes.bool,
    }).isRequired

}

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;

}

&:hover{
    .card{
        border:0.04rem solid rgba(0, 0 , 0, 0.2);
        box-shodow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247, 247)
    }
}
  .img-container{
      position:relative;
      overflow:hidden;
      background:rgb(35 32 32);
  }
  .card-img-top{
      transition:all 1s linear;
  }
  .img-container:hover .card-img-top{
      transform: scale(1.2);  
  }
  .cart-btn{
      
      bottom:0;
      right:0;
      padding:0.2rem 0.4rem;
      background: #ed3e3e;
      border:none;
      color:#fff;
      font-size:1.4rem;
      border-radius:0.5rem 0 0 0;
      transform:translate(100%, 100%);
 


  }

  .img-containter:hover .cart-btn{
      transform:translate(0, 0)
  }
`;