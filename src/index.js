import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
import viewOrderHistory from './component/viewOrderHistory';

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
          <Router>
              <Route path="/" exact component={ viewOrderHistory }></Route>
              <Route path="/view-order-history" exact component={ viewOrderHistory }></Route>
          </Router>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
