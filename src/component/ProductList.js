import React, { Component } from 'react'
import Product from './Product'
import Tite from './Title';
//import {storeProducts} from '../data';
import {ProductConsumer} from '../Context'

export default class ProductList extends Component {


    render() {
        return (
           <React.Fragment>
       <div className="py-5">
           <div className="container">
               <Tite name="our" title="Product"/>
               <div className="row">
<ProductConsumer>
    {value=>{
       return value.products.map(product=>{
           return <Product key={product.id}
            product={product} />
       })
    }

    }
</ProductConsumer>

               </div>
           </div>

       </div>

           </React.Fragment>
        )
    }
}
