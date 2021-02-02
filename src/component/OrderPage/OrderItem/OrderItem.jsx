import imgIcon from '../../../images/img1.png';
import React, {useState} from 'react';
import {
    TenPercent,
    TwentyPercent,
    FortyPercent,
    MarginButton,
    BorderButton
} from './OrderItem.styles';


import {
    Box,
    Center,
    Flex,
} from "@chakra-ui/react"
import "antd/dist/antd.css";
import { Steps } from 'antd';

const { Step } = Steps;


export default function OrderItem(props) {
    const [order, setOrder] = React.useState("");

    const [num, setNum] = React.useState("");

    const [showView, setShowView] = useState(false);

    const sitem = props.sitem;

    const showViewFuc =(index) => {
        setNum(index)
        setShowView(true)
    }


  return (
      <Box>
          {
              props.sitem.orderLines.map((mItem, index) => {
                  return (
                      <Box key={index}>
                          <Flex>
                              <TenPercent>{ mItem.itemId }</TenPercent>
                              <TenPercent>{ mItem.quantity }</TenPercent>
                              <TwentyPercent><img src={ imgIcon } /></TwentyPercent>
                              <FortyPercent>
                                  <Box>{ mItem.productName }</Box>
                                  <Box>{ mItem.itemDescription }</Box>
                              </FortyPercent>
                              <TenPercent>{ mItem.basePrice }</TenPercent>
                              <TenPercent>{ mItem.price }</TenPercent>
                          </Flex>
                          <Center  color="#5f92bd" padding="4">
                              <Box>
                                  <MarginButton  colorScheme="red" variant="outline">
                                  Buy Again
                              </MarginButton></Box>
                              <Box paddingRight="2">Manuals</Box>
                              <BorderButton onClick={ () => showViewFuc(mItem.itemId) }>Write a Review</BorderButton>
                              <Box paddingLeft="2">Return Item</Box>
                          </Center>

                      </Box>
                  )
              })
          }
      </Box>
  );
}
