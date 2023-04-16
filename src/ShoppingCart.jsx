import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
 //executes when the component is mounted
constructor(props){
    console.log("constructor-shoppingCart");
super(props);//calling super class constructor

//initialization of the sate
this.state={
    products:[],};
}

    render() {
        console.log("render-shoppingCart");
        return (
                <div>
                <h4>Shopping Cart</h4>
                
                <div className="row">
                    {this.state.products.map((prod)=>{
                        return( 
                        <Product 
                        key={prod.id} 
                        product={prod}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete} 
                        >
                         <button className="btn btn-primary">Buy Now</button>
                        </Product>
                        );
                        })}
                </div>
                </div>

                )
    }
//render stops here
//executes after constructor and render method (includes life cycle of child component) of current component
/*componentDidMount(){
    //fetch data from database source
   var promise=fetch("http://localhost:5000/products",{method:"GET"});
   promise.then((response)=> {
    console.log(response);
     var promise2=response.json();
   promise2.then((prods)=>{console.log(prods);
this.setState({products:prods});
});
   });
     console.log("componetDidMount-shoppingCart");
};*/
//função assincrona
componentDidMount=async()=> {
var response=await fetch("http://localhost:5000/products",{method:"GET"});
var prods=await response.json();
console.log(prods);
this.setState({products:prods});

};

componentDidUpdate(prevProps,prevState){
    console.log(
        "componetDidUpdate-shoppingCart",
        prevProps,
        prevState,
        this.props,
        this.state);
};

//executes when 
componentWillUnmount(){
    console.log("componentWillUnmount-shoppingCart");
};

componentDidCatch(error,info){
console.log("componentDidCatch-shoppingCart");
console.log(error,info);
};

handleIncrement =(product,maxValue)=>{
    let allProducts=[...this.state.products];
    let index=allProducts.indexOf(product);
    if (allProducts[index].quantity<maxValue) {
        allProducts[index].quantity ++;
    this.setState({products:allProducts});
    }
};
handleDecrement =(product,minValue)=>{
    let allProducts=[...this.state.products];
    let index=allProducts.indexOf(product);
    if (allProducts[index].quantity>minValue) {
        allProducts[index].quantity --;
    this.setState({products:allProducts});
    }
};
//executes when user click on (X) button on product component
handleDelete =(product)=> {
    //get index of selected product
    let allProducts=[...this.state.products];
    let index=allProducts.indexOf(product);
    if(window.confirm("are you sure to delete?")) {
    //delete the product based on index
    allProducts.splice(index,1);
    //update the state of current component
    this.setState({products:allProducts});
}
}
}