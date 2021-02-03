import './index.css';
import React from 'react';
import Header from "./Header";
import CurrentOrderStatus from "./CurrentOrderStatus";
import OrderItemsList from "./OrderItemsList/OrderItemsList";

class viewOrderHistory extends React.Component  {

   render() {
    return (
        <div style={{backgroundColor: "#f7f7f7", padding: '0 50px', fontSize: '16px', paddingBottom:'20px'}}>
            <Header></Header>
            <CurrentOrderStatus></CurrentOrderStatus>
            <OrderItemsList  isShow={1}></OrderItemsList>
        </div>
    );
   }
}

export default viewOrderHistory;
