import './index.css';
import imgURL from '../images/icon.png';
import imgIcon from '../images/img1.png';
import React, {useState} from 'react';
// import {React, useState, useEffect} from 'react';
import { useDisclosure } from "@chakra-ui/react"
// import {Pagecomponent} from "./Page"

import axios from 'axios'


import {
    Accordion,
    Container,
    InputGroup,
    InputRightElement,
    Input,
    Divider,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Text,
    Code,
    Lorem,
    Stat,
    Button,
    Center,
    StatNumber,
    StatHelpText,
    Heading,
    Flex,
    Modal,
    ModalOverlay,
    CloseButton,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from "@chakra-ui/react"
import { AddIcon, MinusIcon, CalendarIcon,Search2Icon, StarIcon } from '@chakra-ui/icons'
import "antd/dist/antd.css";
import { Steps,Select } from 'antd';
import qr from '../images/qrcode.png';

import ReceiptImages from "./ReceiptImages/ReceiptImages";
import ShippintSteppre from "./ShippingStepper/ShippingStepper";

const { Option } = Select;

const { Step } = Steps;


const data = [
    {
        "orderId": "14523",
        "userId": 11111,
        "michaelsOrderId": null,
        "productSubTotal": null,
        "productTotal": null,
        "orderTotal": 110,
        "orderType": 0,
        "shippingTotal": null,
        "taxTotal": null,
        "currency": null,
        "adjustedMerchandizeTotalTax": null,
        "adjustedShippingTotalTax": null,
        "shippingTotalTax": null,
        "merchandizeTotalTax": null,
        "orderToken": null,
        "storeId": null,
        "zipCode": null,
        "shippingStatus": null,
        "createdTime": "2020-12-10T18:58:45Z",
        "taxation": null,
        "email": null,
        "status": "Order Shipped",
        "orderItems": [
            {
                "itemId": 45,
                "orderId": "14523",
                "sellerStoreId": null,
                "thumbnail": null,
                "productId": null,
                "scheduleId": null,
                "michaelsProductId": null,
                "productName": "Item1",
                "quantity": 2,
                "basePrice": 55,
                "price": 110,
                "priceAfterItemDiscount": null,
                "priceAfterOrderDiscount": null,
                "adjustedTax": null,
                "tax": null,
                "taxBasis": null,
                "taxRate": null,
                "productType": null,
                "gift": null,
                "giftMessage": null,
                "itemDescription": "Explore the artist in you with this coloring poster from RoseArt.",
                "createdTime": null
            }
        ]
    },
    {
        "orderId": "13980",
        "userId": 11111,
        "michaelsOrderId": null,
        "productSubTotal": null,
        "productTotal": null,
        "orderTotal": 115,
        "orderType": 1,
        "shippingTotal": null,
        "taxTotal": null,
        "currency": null,
        "adjustedMerchandizeTotalTax": null,
        "adjustedShippingTotalTax": null,
        "shippingTotalTax": null,
        "merchandizeTotalTax": null,
        "orderToken": null,
        "storeId": null,
        "zipCode": null,
        "shippingStatus": null,
        "createdTime": "2020-12-14T13:10:24Z",
        "taxation": null,
        "email": null,
        "status": "Order Shipped",
        "orderItems": [
            {
                "itemId": 89,
                "orderId": "13980",
                "sellerStoreId": null,
                "thumbnail": null,
                "productId": null,
                "scheduleId": null,
                "michaelsProductId": null,
                "productName": "Item5",
                "quantity": 1,
                "basePrice": 115,
                "price": 115,
                "priceAfterItemDiscount": null,
                "priceAfterOrderDiscount": null,
                "adjustedTax": null,
                "tax": null,
                "taxBasis": null,
                "taxRate": null,
                "productType": null,
                "gift": null,
                "giftMessage": null,
                "itemDescription": "These neon crayons from Crayola are sure to add vibrancy to your art projects for that extra 'Wow' factor.",
                "createdTime": null
            }
        ]
    },
    {
        "orderId": "14523",
        "userId": 11111,
        "michaelsOrderId": null,
        "productSubTotal": null,
        "productTotal": null,
        "orderTotal": 110,
        "orderType": 3,
        "shippingTotal": null,
        "taxTotal": null,
        "currency": null,
        "adjustedMerchandizeTotalTax": null,
        "adjustedShippingTotalTax": null,
        "shippingTotalTax": null,
        "merchandizeTotalTax": null,
        "orderToken": null,
        "storeId": null,
        "zipCode": null,
        "shippingStatus": null,
        "createdTime": "2020-12-10T18:58:45Z",
        "taxation": null,
        "email": null,
        "status": "Order Shipped",
        "orderItems": [
            {
                "itemId": 45,
                "orderId": "14523",
                "sellerStoreId": null,
                "thumbnail": null,
                "productId": null,
                "scheduleId": null,
                "michaelsProductId": null,
                "productName": "Item1",
                "quantity": 2,
                "basePrice": 55,
                "price": 110,
                "priceAfterItemDiscount": null,
                "priceAfterOrderDiscount": null,
                "adjustedTax": null,
                "tax": null,
                "taxBasis": null,
                "taxRate": null,
                "productType": null,
                "gift": null,
                "giftMessage": null,
                "itemDescription": "Explore the artist in you with this coloring poster from RoseArt.",
                "createdTime": null
            }
        ]
    },
];

const lists = {
        "store": "#0000",
        "store1": "(000) 000-0000",
        "num": '0000 STREET NAME,SUITE 000CITY,STATE 0000',
        "num1": 'CITY,STATE 0000',
        "number": '0000000000',
        "time": '12/31/2021    12:00AM',
        "money1": '$1500.00',
        'money2': '$1500.00',
         "money3": '$1500.00',
        'money4': '$1500.00',
        "money5": '****9876',
       'money6': '$1500.00'
    }


function getList() {
    axios.post(
        '/order/list',
        {
            "dateSort":"",
            "priceSort":"",
            "subtractMonths":"",
            "orderType":""
        }).then(res=>{
         console.log(res);

        })
}



function OrderItemsList (props) {
   // render() {

    const [order, setOrder] = React.useState("");

    const [num, setNum] = React.useState("");

    const [showView, setShowView] = useState(false);

    const handleChange = (event) => {
        setOrder(event.target.value)
    }

    const showViewFuc =(index) => {
        console.log(index)
        setNum(index)
        setShowView(true)
    }

    const closeViewFuc =() => {
        setShowView(false)
    }



    const handleClick = (e) => {
        console.log(order)
        // this.getList();
    }



    return (
        <div>
            {
                props.isShow == 1 ? <Flex>
                    <InputGroup size="md" w="30rem" margin="4">
                        <Input
                            borderRadius="50px"
                            pr="4.5rem"
                            placeholder="Search Orders "
                            value={order}
                            onChange={handleChange}
                        />
                        <InputRightElement width="4.5rem">
                            <Button size="sm" borderRadius="50%" onClick={handleClick}  >
                                <Search2Icon fontSize="16px" style={{color: '#fff'}}/>
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <div className="flex" style={{paddingLeft:"10px"}}>
                        Results (4)
                    </div>
                </Flex>: null
            }
            <div className="header">
                <div className="flex border">
                    <div  className="headerText">Purchased within</div>
                    <div>
                        <Select  value="0" style={{ width: 160 }}>
                            <option value="0">Past Six Months</option>
                            <option value="1">Past Year</option>
                            <option value="2">Past Two Years</option>
                        </Select>
                    </div>
                </div>
                <div  className="flex border">
                    <div  className="headerText">Purchased from</div>
                    <div>
                        <Select onChange={handleChange} value="2" style={{ width: 120 }}>
                            <option value="2">All</option>
                            <option value="0">In-Store</option>
                            <option value="1">Online</option>
                        </Select>
                    </div>
                </div>
                <div  className="flex">
                    <div  className="headerText">Sort by</div>
                    <div>
                        <Select value="asc" style={{ width: 160 }}>
                            <option value="asc">Date(Newest First)</option>
                            <option value="desc">Date(Oldest First)</option>
                        </Select>
                    </div>
                </div>
                <div  className="flex">
                    <div  className="headerText">Sort by</div>
                    <div>
                        <Select value="asc" style={{ width: 160 }}>
                            <option value="asc">Price($ - $$$)</option>
                            <option value="desc">Price($$$ - $)</option>
                        </Select>
                    </div>
                </div>
            </div>
            <div>
                {
                    data.map((item, index) => {
                        return (
                            <Accordion  key={ index } margin="4" allowMultiple style={{background:'#fff'}}>

                                <AccordionItem>
                                    {({ isExpanded }) => (
                                        <>

                                                <Box style={{display: 'flex',  justifyContent: "space-between", width: '100%'}}>
                                                    <AccordionButton>
                                                    <Box>
                                                        <Flex>
                                                            {isExpanded ? (
                                                                <Box    w="100px" style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                                                                    <MinusIcon fontSize="16px" style={{border: '2px solid red', borderRadius:'50%', color: 'red',padding: '2px'}}/>
                                                                </Box>

                                                            ) : (
                                                                <Box    w="100px" style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                                                                    <AddIcon fontSize="16px" style={{border: '2px solid red', borderRadius:'50%', color: 'red',padding: '2px'}}/>
                                                                </Box>
                                                            )}
                                                            <Stat w="150px">
                                                                <StatHelpText>order Date</StatHelpText>
                                                                <StatNumber fontSize="20px">{item.createdTime}</StatNumber>
                                                            </Stat>
                                                            <Stat  w="150px">
                                                                <StatHelpText>Reciept Number</StatHelpText>
                                                                <StatNumber fontSize="20px">{item.orderId}</StatNumber>
                                                            </Stat>
                                                            <Stat  w="150px">
                                                                <StatHelpText>Order Status</StatHelpText>
                                                                <StatNumber fontSize="20px">{item.status}</StatNumber>
                                                            </Stat>
                                                            <Stat  w="150px">
                                                                <StatHelpText>Order Tatal</StatHelpText>
                                                                <StatNumber fontSize="20px">{item.orderTotal}</StatNumber>
                                                            </Stat>
                                                        </Flex>
                                                    </Box>
                                                    </AccordionButton>
                                                    <ReceiptImages></ReceiptImages>

                                                </Box>

                                            <AccordionPanel>
                                                <Box>
                                                    {
                                                        item.orderType == 0 ? <Flex paddingBottom="16" style={{ paddingLeft: '50px'}}>
                                                            <Container>
                                                                <Flex padding="2">
                                                                    <Box  paddingRight="2"><img src={imgURL } /></Box>
                                                                    <Heading  as="h4" size="sm">In-Store Purchase</Heading>
                                                                </Flex>
                                                            </Container>
                                                            <Container>
                                                                <Container>VistaRidge Village</Container>
                                                                <Container>2325 S Stemmons Fwy Ste402,</Container>
                                                                <Container>Lewisville,TX 75067</Container>
                                                            </Container>
                                                        </Flex> : item.orderType == 1 ? <Flex paddingBottom="16" style={{ paddingLeft: '50px'}}>
                                                            <Container>
                                                                <Flex padding="2">
                                                                    <Box  paddingRight="2"><img src={imgURL } /></Box>
                                                                    <Heading  as="h4" size="sm">Online Purchase</Heading>
                                                                </Flex>
                                                            </Container>
                                                            <Container>
                                                                <Container>Shipped To:</Container>
                                                                <Container>1234 MAIN STREET, NY 11001-0001</Container>
                                                            </Container>
                                                            <Container>
                                                                <Container>Estimated Arrival Date:</Container>
                                                                <Container>Tuesday, November 8, 2021</Container>
                                                            </Container>
                                                        </Flex> : <Flex paddingBottom="16" justify="space-between" style={{ paddingLeft: '50px'}}>
                                                            <Box>
                                                                <Flex padding="2">
                                                                    <Box  paddingRight="2"><img src={imgURL } /></Box>
                                                                    <Heading  as="h4" size="sm">Online Purchase</Heading>
                                                                </Flex>
                                                                <Flex padding="2">
                                                                    <Box  paddingRight="2"><img src={imgURL } /></Box>
                                                                    <Heading  as="h4" size="sm">In-Store Purchase</Heading>
                                                                </Flex>
                                                            </Box>
                                                            <Box>
                                                                <Container>VistaRidge Village</Container>
                                                                <Container>2325 S Stemmons Fwy Ste402,</Container>
                                                                <Container>Lewisville,TX 75067</Container>
                                                            </Box>
                                                            <Box>
                                                                <Container>Picked up by: </Container>
                                                                <Container>Jane Done</Container>
                                                            </Box>
                                                            <Box>
                                                                <Steps current={2} progressDot  className="ChartCard">
                                                                    <Step title="Order Rcvd" description="Nov 2" />
                                                                    <Step title="Arrived at Store" description="Nov 8" />
                                                                    <Step title="Pickup up" status="finish" description="Nov 8" />
                                                                </Steps>
                                                            </Box>
                                                        </Flex>
                                                    }

                                                    <Divider orientation="horizontal" />
                                                    <Box padding="6"  style={{ paddingLeft: '100px'}}>
                                                        <Flex>
                                                            <Box style={{width: '10%'}}>ITEM</Box>
                                                            <Box style={{width: '10%'}}>QTY</Box>
                                                            <Box style={{width: '20%'}}>IMAGE</Box>
                                                            <Box style={{width: '40%'}}>DESCRIPTION</Box>
                                                            <Box style={{width: '10%'}}>ITEM COST</Box>
                                                            <Box style={{width: '10%'}}>TOTAL COST</Box>
                                                        </Flex>
                                                        {
                                                            item.orderItems.map((mItem, index) => {
                                                                return (
                                                                    <Box key={index}>
                                                                        <Box  style={{display: "flex"}}>
                                                                            <Box style={{width: '10%'}}>{ mItem.itemId}</Box>
                                                                            <Box style={{width: '10%'}}>{ mItem.quantity}</Box>
                                                                            <Box style={{width: '20%'}}><img src={ imgIcon } /></Box>
                                                                            <Box  style={{width: '40%'}}>
                                                                                <Box>{ mItem.productName }</Box>
                                                                                <Box>{ mItem.itemDescription }</Box>
                                                                            </Box>
                                                                            <Box style={{width: '10%'}}>{ mItem.basePrice}</Box>
                                                                            <Box style={{width: '10%'}}>{ mItem.price }</Box>
                                                                        </Box>
                                                                        <Center  color="#5f92bd" padding="4">
                                                                            <Box><Button  colorScheme="red" variant="outline" style={{borderRadius: '20px', marginRight:'20px'}}>
                                                                                Buy Again
                                                                            </Button></Box>
                                                                            <Box paddingRight="2">Manuals</Box>
                                                                            <Button onClick={ () => showViewFuc(mItem.itemId) } style={{padding: '0 15px', borderLeft: '1px solid #eee', borderRight: '1px solid #eee'}}>Write a Review</Button>
                                                                            <Box paddingLeft="2">Return Item</Box>
                                                                        </Center>
                                                                       
                                                                    </Box>
                                                                )
                                                            })
                                                        }

                                                        <Divider orientation="horizontal"  style={{margin: '20px 0'}}/>
                                                        <Box>
                                                            {
                                                                item.orderType == 1 ?<Flex style={{position: 'absolute'}}>
                                                                    <Button  variant="outline" style={{borderRadius: '20px', marginRight: '20px'}}>
                                                                        Track Order
                                                                    </Button>
                                                                    <Box>
                                                                        <Box>FedEx</Box>
                                                                        <Box>999 999 999 WW</Box>
                                                                    </Box>
                                                                </Flex>: null
                                                            }
                                                            <Flex justify="flex-end">
                                                                <Box style={{width: '10%'}}>Subtotal</Box>
                                                                <Box style={{width: '10%'}}>$1,500.00</Box>
                                                            </Flex>
                                                            <Flex  justify="flex-end">
                                                                <Box style={{width: '10%'}}>Tax</Box>
                                                                <Box style={{width: '10%'}}>$123.75</Box>
                                                            </Flex>
                                                            <Flex  justify="flex-end">
                                                                <Box style={{width: '10%'}}>Total</Box>
                                                                <Box style={{width: '10%'}}>$1,623.75</Box>
                                                            </Flex>
                                                        </Box>

                                                    </Box>
                                                </Box>
                                            </AccordionPanel>
                                        </>
                                    )}
                                </AccordionItem>
                            </Accordion>
                        );
                    })
                }

            </div>
            {/*<Pagecomponent pageCallbackFn={getCurrentPage} totalPage={2} currentPage={1}></Pagecomponent>*/}
        </div>
    );
   // }
};

export default OrderItemsList;
