import React from "react";

export default function Product(props) {

    return (
        <div className="col-lg-6">
            <div className="card m-2">
                <div className="card-body">
                    <div className="text-muted">
                        #{props.product.id}
                        <span 
                            className="pull-right hand-icon"
                            onClick={()=>{props.onDelete(props.product);}}
                        >
                            <i className="fa fa-times"></i>
                        </span>
                    </div>
                    <h5 className="pt-2 border-top">{props.product.productName}</h5>
                    <div className="">€{props.product.price}</div>
                </div>
                {/*card body ends here*/}
                <div className="card-footer">
                    <div className="float-left">
                        <span className="badge bg-secondary">{props.product.quantity}</span>
                        <div className="btn-group">
                            <button 
                                className="btn btn-outline-success" 
                                onClick={()=>{props.onIncrement(props.product,10);}}
                            >
                                + 
                            </button>
                            <button 
                                className="btn btn-outline-success" 
                                onClick={()=>{props.onDecrement(props.product,0);}}
                            >
                                -
                            </button>
                        </div>
                        {props.children}
                    </div>
                  {/*float-left ends here*/}  
                                  
                </div>
                {/*card footer ends here*/}
            </div>
        </div>
    );
}
