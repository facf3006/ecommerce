import React from 'react';
import ReactDOM from 'react-dom/client';
//import {createRoot} from 'react-dom/client';
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import'./index.css';
import App  from './App';

//var element=<button class="btn btn-danger">Hello wordl</button>;

//ReactDOM.render(<App/>,document.getElementById("root"));
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
//
//const container = document.getElementById('root');
//const root =createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(<App/>);

//console.log(element);