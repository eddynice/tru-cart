import React from 'react';
import {Link} from 'react-router-dom'
import PaypalButton from "./Paypal"

export default function CartTotal({value,history}) {
    const {cartSumTotal,cartTax, cartTotal ,clearCart} = value;
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/" >
                    <button onClick={()=>clearCart()} className="btn btn-outline-danger text-uppercase mb-3 px-5">
                        clear Cart
                    </button>
                    </Link>
                    <h3>
                     {/**   <span className="text-title"> subtotal::</span>
                        <strong>#{cartSumTotal}</strong>
                        */} 
                    </h3>
                    <h3>
                       <span className="text-title"> shipping fee:</span>
                        <strong>#{cartTax}</strong>   
                    </h3>
                    <h3>
                        <span className="text-title"> Total:</span>
                        <strong>#{cartTotal}</strong>
                    </h3>
                    <PaypalButton total={cartTotal} clearCart={clearCart} history={history}/>
                </div>

            </div>
            
        </div>
    )
}
