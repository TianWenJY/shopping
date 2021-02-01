import './index.css';
import React from 'react';

import {
    Box,
    Heading,
} from "@chakra-ui/react"
import "antd/dist/antd.css";


class Header extends React.Component  {

    render() {
        return (
                <Box padding = '4'>
                    <Heading padding = '2' >Order History</Heading>
                    <Box  padding="4"  maxW="3xl">
                        This is a convenient way for a buyer to keep track of all current
                        and past orders and their status in the order process. It allows
                        the buyer to get up-to-date information on each order placed online
                        , including shipping updates, delivery, and payment details.
                    </Box>
                </Box>
        );
    }
}

export default Header;
