import React, { Component } from 'react'
import { ProductConsumer } from '../../Context'
import Tite from '../Title'
import Cartcolumn from './Cartcolumn'
import EmptyCart from './EmptyCart'
import CartList from "./CartList"
import CartTotal from './CartTotal'

export default class Cart extends Component {
    render() {
        return (
           <section>
               <ProductConsumer>
                 {value=>{
                     const {cart} =value;
                     if (cart.length > 0){
                         return(
                             <React.Fragment>
                                 <Tite  name="Your" title="Cart"/>
                                 <Cartcolumn/>
                                 <CartList value={value}/>
                                 <CartTotal value={value} history={this.props.history}/>
                             </React.Fragment>
                         );
                     }else{
                         return( <EmptyCart/> 

                         );
                     }
                 }}

               </ProductConsumer>
            
           </section>
        )
    }
}
