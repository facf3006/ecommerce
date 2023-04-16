import React,{ Component } from "react"


export default class CustomersList extends Component {
state={
        pageTitle:"Costumers", 
        customersCount:5,
        customers:[
            {
                id:1,
                name:"fernando", 
                phone:"123-456", 
                adress:{city:"Amarante",},
                photo:"https://picsum.photos/id/1010/60",
            },
            {
                id:2, 
                name:"antonio", 
                phone:"789-496", 
                adress:{city:"Braga",},
                photo:"https://picsum.photos/id/1011/60",
            },
            {
                id:3, 
                name:"adão", 
                phone:"135-856", 
                adress:{city:"Lisboa",},
                photo:"https://picsum.photos/id/1012/60",
            },
            {
                id:4, 
                name:"nando", 
                phone:null, 
                adress:{city:"Porto",},
                photo:"https://picsum.photos/id/1013/60",
            },
            {
                id:5, 
                name:"fonseca", 
                phone:"231-756", 
                adress:{city:"Amarante",},
                photo:"https://picsum.photos/id/1014/60",
            },
        ]};

 
render () {
        return <div>
            <h4 className="m-1 p-1">
                {this.state.pageTitle}

            <span className="badge bg-secondary m-2">
                {this.state.customersCount}</span> 

            <button className="btn btn-info" onClick={this.onRefreshClick} >
                Refresh
            </button>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>city</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getCustomerRow()}     
                </tbody>
            </table>            
        </div>
    }

    //executes when the user clicks on refresh button
onRefreshClick=()=> {
   this.setState({customersCount:7,} );
}
getPhoneToRender = (phone) => {
    if (phone) return phone;
    else { 
        return <div className="bg-warning p-2 text-center"> No phone</div>};
    }
getCustomerRow=()=>{
    return (
        this.state.customers.map((cust,index)=>{
            return(
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>
                        <img src={cust.photo} alt="customer"/>
                        <div>
                            <button className="btn btn-sm btn-secondary" onClick={()=>{this.onChangePictureClick(cust,index);}}>
                                Change picture
                            </button>
                        </div>
                    </td>
                    <td>{cust.name}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.adress.city}</td>
                 </tr>
            );
        })
        );

        
        };

onChangePictureClick =(cust,index) => {
   /* console.log(cust);
    console.log(index); */
//updates picture customers
    var custArr=this.state.customers;
    custArr[index].photo="https://picsum.photos/id/104/60";
    this.setState({customers:custArr});
}
}

