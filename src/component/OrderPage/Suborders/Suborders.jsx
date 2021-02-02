import React, {useState} from 'react';
import {
    TenPercent,
    TwentyPercent,
    FortyPercent,
    NowDivider,
    MarginButton,
    PositionFlex
} from './Suborders.styles';

import {
    Divider,
    Box,
    Flex,
} from "@chakra-ui/react"
import "antd/dist/antd.css";
import { Steps } from 'antd';

import OrderHeader from "../OrderHeader/OrderHeader";
import OrderItem from "../OrderItem/OrderItem";



const { Step } = Steps;


export default function Suborders(props) {

    const sitem = props.sitem;

  return (
      <Box>
          <OrderHeader sitem = { sitem }></OrderHeader>
          <Divider orientation="horizontal" />
          <Box padding="6"  pl={50}>
              <Flex>
                  <TenPercent>ITEM</TenPercent>
                  <TenPercent>Quantity</TenPercent>
                  <TwentyPercent>IMAGE</TwentyPercent>
                  <FortyPercent>DESCRIPTION</FortyPercent>
                  <TenPercent>ITEM COST</TenPercent>
                  <TenPercent>TOTAL COST</TenPercent>
              </Flex>

              <OrderItem sitem = { sitem }></OrderItem>
              <NowDivider orientation="horizontal"/>
              <Box>
                  {
                      sitem.orderType == 1 ?<PositionFlex>
                          <MarginButton  variant="outline">
                              Track Order
                          </MarginButton>
                          <Box>
                              <Box>FedEx</Box>
                              <Box>999 999 999 WW</Box>
                          </Box>
                      </PositionFlex>: null
                  }
                  <Flex justify="flex-end">
                      <TenPercent>Subtotal</TenPercent>
                      <TenPercent>$1,500.00</TenPercent>
                  </Flex>
                  <Flex  justify="flex-end">
                      <TenPercent>Tax</TenPercent>
                      <TenPercent>$123.75</TenPercent>
                  </Flex>
                  <Flex  justify="flex-end">
                      <TenPercent>Total</TenPercent>
                      <TenPercent>$1,623.75</TenPercent>
                  </Flex>
              </Box>

          </Box>
      </Box>
  );
}
