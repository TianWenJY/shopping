import './index.css';
import React from 'react';

import {
    Box,
    Icon,
    Heading,
    Flex,
} from "@chakra-ui/react"
import "antd/dist/antd.css";
import { Steps,Select } from 'antd';
import {
    StepperContainer
} from './ShippingStepper/ShippingStepper.styles';
import ShippingStepper from "./ShippingStepper/ShippingStepper";

const { Option } = Select;

const { Step } = Steps;



const CartIconSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck" width="44" height="44"
         viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
         stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="7" cy="17" r="2"/>
        <circle cx="17" cy="17" r="2"/>
        <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"/>
    </svg>
);


class CurrentOrderStatus extends React.Component  {

   render() {
    return (
            <Box style={{ backgroundColor: '#f7f1e4'}} padding="6" pb={100}>
                <Heading   as="h4" size="md">Current Shipping Status</Heading>
                <Flex padding="6" style={{alignItems: "center"}}>
                    <Box  w="100px">
                        <Icon as={ CartIconSvg} />
                    </Box>
                    <Box  w="200px">
                        <Box>Order Number</Box>
                        <Box>987654321-987654321</Box>
                    </Box>
                    <Box  w="200px">
                        <Box>Excepted Arrival</Box>
                        <Box>12/31/2021</Box>
                    </Box>
                    <Box  w="200px">
                        <Box>Tracking Number</Box>
                        <Box>FedEx <span style={{color: '#6aa6cc'}}>999 999 999 WW</span></Box>
                    </Box>
                </Flex>
                <ShippingStepper></ShippingStepper>
            </Box>
    );
   }
}

export default CurrentOrderStatus;
