import imgURL from '../../../images/icon.png';
import React, {useState} from 'react';
import {
    HeaderPadding
} from './OrderHeader.styles';

import {
    Container,
    Box,
    Heading,
    Flex,
} from "@chakra-ui/react"
import "antd/dist/antd.css";
import { Steps } from 'antd';

const { Step } = Steps;


export default function OrderHeader(props) {

  return (
      <Box>
          {
              props.sitem.orderType == 0 ?
                  <Flex paddingBottom="16">
                      <Container>
                          <Flex padding="2">
                              <Box paddingRight="2"><img
                                  src={imgURL}/></Box>
                              <Heading as="h4" size="sm">In-Store
                                  Purchase</Heading>
                          </Flex>
                      </Container>
                      <Container>
                          <Container>VistaRidge Village</Container>
                          <Container>2325 S Stemmons Fwy
                              Ste402,</Container>
                          <Container>Lewisville,TX 75067</Container>
                      </Container>
                  </Flex> : props.sitem.orderType == 1 ?
                  <HeaderPadding>
                      <Flex paddingBottom="16">
                          <Container>
                              <Flex padding="2">
                                  <Box paddingRight="2"><img
                                      src={imgURL}/></Box>
                                  <Heading as="h4" size="sm">Online
                                      Purchase</Heading>
                              </Flex>
                          </Container>
                          <Container>
                              <Container>Shipped To:</Container>
                              <Container>1234 MAIN STREET, NY
                                  11001-0001</Container>
                          </Container>
                          <Container>
                              <Container>Estimated Arrival
                                  Date:</Container>
                              <Container>Tuesday, November 8,
                                  2021</Container>
                          </Container>
                      </Flex>
                  </HeaderPadding>
                  :
                  <HeaderPadding>
                      <Flex paddingBottom="16" justify="space-between">
                          <Box>
                              <Flex padding="2">
                    s              <Box paddingRight="2"><img
                                      src={imgURL}/></Box>
                                  <Heading as="h4" size="sm">Online
                                      Purchase</Heading>
                              </Flex>
                              <Flex padding="2">
                                  <Box paddingRight="2"><img
                                      src={imgURL}/></Box>
                                  <Heading as="h4" size="sm">In-Store
                                      Purchase</Heading>
                              </Flex>
                          </Box>
                          <Box>
                              <Container>VistaRidge Village</Container>
                              <Container>2325 S Stemmons Fwy
                                  Ste402,</Container>
                              <Container>Lewisville,TX 75067</Container>
                          </Box>
                          <Box>
                              <Container>Picked up by: </Container>
                              <Container>Jane Done</Container>
                          </Box>
                          <Box>
                              <Steps current={2} progressDot
                                     className="ChartCard">
                                  <Step title="Order Rcvd"
                                        description="Nov 2"/>
                                  <Step title="Arrived at Store"
                                        description="Nov 8"/>
                                  <Step title="Pickup up" status="finish"
                                        description="Nov 8"/>
                              </Steps>
                          </Box>
                      </Flex>
                  </HeaderPadding>
          }
      </Box>
  );
}
