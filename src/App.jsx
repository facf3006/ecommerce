import React, { Component } from "react";
import {BrowserRouter,Routes , Route} from 'react-router-dom'

import NavBar from "./NavBar";
import CustomersList from "./CustomersList";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import Dashboard from "./Dashboard";
import NoMatchPage from "./NoMatchPage";


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>   
            <NavBar/>
            <div className="container-fluid">
            <Routes>              
                <Route  path="/"  exact element={<Login/>} />
                <Route  path="/dashboard"  exact element={<Dashboard/>} />
                <Route  path="/cart"  exact element={<ShoppingCart/>} />
                <Route  path="/customers"  exact element={<CustomersList/>} />
                <Route  path="*" element={<NoMatchPage/>} />
            </Routes>
            </div>
          </BrowserRouter>
          )
    } 
}