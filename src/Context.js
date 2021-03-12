import React, { Component } from 'react';
import {storeProducts,detailProduct } from './data'

const  ProductContext = React.createContext();
//provider
//consumer

 class ProductProvider  extends Component {
    state={
        products:[],
        //products:storeProducts,
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSumTotal:0,
        cartTax:0,
        cartTotal:0,
    };
    
    componentDidMount(){
        this.setProduct();
    }

    setProduct=()=>{
        let tempsProduct = [];
        storeProducts.forEach(item=>{
            const singleItem={...item};
            tempsProduct = [...tempsProduct, singleItem];

        });
        this.setState(()=>{
            return {
                products:tempsProduct
            }
        })
    }

    getItem=id=>{
        const product  = this.state.products.find(item=>item.id ===id);
        return product
    }
    handleDetails=(id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        })
    }
    addTocart=(id)=>{
       let tempPro  = [...this.state.products];
       const index = tempPro.indexOf(this.getItem(id));
       const product = tempPro[index];
       product.inCart = true;
       product.count =1;
       const price =product.price;
       product.total = price;
       this.setState(()=>{
           return{
               products:tempPro,
               cart:[...this.state.cart ,product]
           }
       },
       ()=>{
           this.addTotal();
           //we added addTotal after we created ou
           console.log(this.state)
       })

    }
 
    openModal= (id)=>{
       const product = this.getItem(id);
       this.setState(()=>{
           return{
               modalProduct:product,
               modalOpen:true
           }
       })
    }

   closeModal= ()=>{
      
        this.setState(()=>{
            return{
                modalOpen:false
            }
        })
     }

  increment =(id)=>{
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item=>item.id ===id)
    const index =tempCart.indexOf(selectedProduct);
    const product  = tempCart[index];
     
    product.count = product.count +1;
    product.total = product.count * product.price;

    this.setState(()=>{
        return{
            cart:[...tempCart]
        };
    },
    ()=>{
        this.addTotal();
    }
    );

  };
  decrement =(id)=>{
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item=>item.id ===id)

    const index =tempCart.indexOf(selectedProduct);

    const product  = tempCart[index];
     product.count = product.count -1;

     if(product.count === 0){
         this.removeItem(id);
             }else{
                 product.total = product.count * product.price;
                 this.setState(()=>{
                     return{
                         cart: [...tempCart]
                     };

                 },()=>{
                     this.addTotal();
                 });
             }
      
}

removeItem=(id)=>{
  //let tempPro = [...this.state.products];
   let tempProduct = [...this.state.products];
   let tempCart = [...this.state.cart];

   tempCart = tempCart.filter(item=>item.id !== id);
   const index = tempProduct.indexOf(this.getItem(id))
   let removeProduct = tempProduct[index];
   removeProduct.inCart = false ;
   removeProduct.count = 0;
   removeProduct.total = 0  ;
   this.setState(()=>{
       return{
           cart:[...tempCart],
           products:[...tempProduct],
           
       }
   },
   ()=>{
       this.addTotal();
   })

}

clearCart=()=>{
    this.setState(()=>{
        return{
            cart:[]
        }
    },()=>{
        this.setProduct();
        this.addTotal()
    })
    console.log('clear')
}

addTotal=()=>{
    let subTotal= 0;
    this.state.cart.map(item=>(subTotal += item.total));
    //const tempTax  = subTotal * 0;
    const tempTax  = subTotal * 0.0005;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(()=>{
        return{
            cartSumTotal:subTotal,
            cartTax:tax,
            cartTotal:total
        }
    })
}
    render() {
        return (
           <ProductContext.Provider value={{
               ...this.state,
               handleDetails:this.handleDetails,
               addTocart:this.addTocart,
               openModal:this.openModal,
               closeModal:this.closeModal,
               increment:this.increment,
               decrement:this.decrement,
               clearCart:this.clearCart,
               removeItem:this.removeItem,
            
               
           }}>

               {this.props.children}
           </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
