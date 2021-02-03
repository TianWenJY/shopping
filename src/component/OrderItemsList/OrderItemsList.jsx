import React, {useState} from 'react';
// import {React, useState, useEffect} from 'react';
import { useDisclosure } from "@chakra-ui/react"
import Suborders from "../OrderPage/Suborders/Suborders";
import {
    NowAddIcon,
    NowMinusIcon
} from './OrderItemsList.styles';
import axios from 'axios'


import {
    Accordion,
    InputGroup,
    InputLeftElement,
    Input,
    Divider,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Text,
    Code,
    Stat,
    Button,
    StatNumber,
    StatHelpText,
    Flex,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    FormLabel,
    Stack,
    Select,
    Radio,
    RadioGroup
} from "@chakra-ui/react"
import { AddIcon, MinusIcon,Search2Icon, ArrowForwardIcon } from '@chakra-ui/icons'
import "antd/dist/antd.css";
import { Steps } from 'antd';

import ReceiptImages from "../ReceiptImages/ReceiptImages";


const data =  {
    "content": [
        {
            "parentOrderNumber": "11110001",
            "subOrders": [
                {
                    "orderNumber": "b00000001",
                    "storeId": "12",
                    "orderChecksum": null,
                    "orderToken": "",
                    "orderType": 1,
                    "cancelReason": "",
                    "parentOrderNumber": "11110001",
                    "orderSplittingType": 0,
                    "channel": 1,
                    "organizationId": "1234",
                    "parentOrganizationId": "12345",
                    "subAccountName": null,
                    "userId": "12345",
                    "userType": 0,
                    "firstName": "Renda",
                    "lastName": "Zhang",
                    "phone": "13925067232",
                    "customerEmail": "renda@test.com",
                    "currency": "USD",
                    "estimatedTax": 1.1,
                    "itemsSubtotal": 1.1,
                    "shippingHandlingCharge": 1.1,
                    "partialRefundTotal": 0,
                    "grandTotalCollected": 1.1,
                    "totalDiscount": 1.1,
                    "status": 1000,
                    "gift": 0,
                    "giftMessage": "test",
                    "giftRecipientEmail": "test@email.com",
                    "createdTime": "1611674985000",
                    "updatedTime": "1611674985000",
                    "receiptNumber": "5085288866705752068",
                    "orderLines": [
                        {
                            "orderItemId": "5085288866705752070",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "12345",
                            "skuNumber": "b1000000",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 1,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5085288866705752069",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610614807000",
                            "returnDeadline": "1610614807000",
                            "status": 1000,
                            "createdTime": "1611674985000",
                            "updatedTime": "1611674985000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5085288866705752071",
                                        "orderItemId": "5085288866705752070",
                                        "userId": "12345",
                                        "skuNumber": "b1000000",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611674985000",
                                        "updatedTime": "1611674985000"
                                    }
                                }
                            ]
                        }
                    ],
                    "orderPickup": {
                        "orderPickupId": "5085288866705752069",
                        "userId": "12345",
                        "orderId": "5085288866705752067",
                        "shipFromLocationId": "12",
                        "shipToLocationId": "23",
                        "orderPickupStatus": 0,
                        "promiseReadyDate": "1610614807000",
                        "pickupDeadlineTime": "1610614807000",
                        "pickupCompletedTime": "1611674985000",
                        "pickupPersonFirstname": "Renda",
                        "pickupPersonLastname": "Zhang",
                        "pickupPersonEmail": "feavd@vfd",
                        "pickupPersonPhone": "13925067232",
                        "orderPickupType": 1,
                        "address1": "vad",
                        "address2": "vdavd",
                        "city": "dvsavds",
                        "state": "dsavds",
                        "countryCode": "US",
                        "zipCode": "55414",
                        "createdTime": "1611674985000",
                        "updatedTime": "1611674985000",
                        "orderItemIndex": [
                            "0"
                        ]
                    },
                    "orderCoupons": [
                        {
                            "orderCouponId": "5085288866705752072",
                            "userId": "12345",
                            "salesRuleId": "string",
                            "salesRuleType": 0,
                            "salesRule": "string",
                            "discountAmount": 1.1,
                            "createdTime": "1611674985000",
                            "updatedTime": "1611674985000"
                        }
                    ]
                },
                {
                    "orderNumber": "b000001",
                    "storeId": "12",
                    "orderChecksum": null,
                    "orderToken": "",
                    "orderType": 1,
                    "cancelReason": "",
                    "parentOrderNumber": "11110001",
                    "orderSplittingType": 0,
                    "channel": 1,
                    "organizationId": "1234",
                    "parentOrganizationId": "12345",
                    "subAccountName": null,
                    "userId": "12345",
                    "userType": 0,
                    "firstName": "Renda",
                    "lastName": "Zhang",
                    "phone": "13925067232",
                    "customerEmail": "renda@test.com",
                    "currency": "USD",
                    "estimatedTax": 1.1,
                    "itemsSubtotal": 1.1,
                    "shippingHandlingCharge": 1.1,
                    "partialRefundTotal": 0,
                    "grandTotalCollected": 1.1,
                    "totalDiscount": 1.1,
                    "status": 1000,
                    "gift": 0,
                    "giftMessage": "test",
                    "giftRecipientEmail": "test@email.com",
                    "createdTime": "1611674985000",
                    "updatedTime": "1611674985000",
                    "receiptNumber": "5085288832346013697",
                    "orderLines": [
                        {
                            "orderItemId": "5085288866705752064",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "12345",
                            "skuNumber": "a1000005",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 1,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5085288832346013698",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610614807000",
                            "returnDeadline": "1610614807000",
                            "status": 1000,
                            "createdTime": "1611674985000",
                            "updatedTime": "1611674985000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5085288866705752065",
                                        "orderItemId": "5085288866705752064",
                                        "userId": "12345",
                                        "skuNumber": "a1000005",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611674985000",
                                        "updatedTime": "1611674985000"
                                    }
                                }
                            ]
                        }
                    ],
                    "orderPickup": {
                        "orderPickupId": "5085288832346013698",
                        "userId": "12345",
                        "orderId": "5085288832346013696",
                        "shipFromLocationId": "12",
                        "shipToLocationId": "23",
                        "orderPickupStatus": 0,
                        "promiseReadyDate": "1610614807000",
                        "pickupDeadlineTime": "1610614807000",
                        "pickupCompletedTime": "1611674985000",
                        "pickupPersonFirstname": "Renda",
                        "pickupPersonLastname": "Zhang",
                        "pickupPersonEmail": "feavd@vfd",
                        "pickupPersonPhone": "13925067232",
                        "orderPickupType": 1,
                        "address1": "vad",
                        "address2": "vdavd",
                        "city": "dvsavds",
                        "state": "dsavds",
                        "countryCode": "US",
                        "zipCode": "55414",
                        "createdTime": "1611674985000",
                        "updatedTime": "1611674985000",
                        "orderItemIndex": [
                            "0"
                        ]
                    },
                    "orderCoupons": [
                        {
                            "orderCouponId": "5085288866705752066",
                            "userId": "12345",
                            "salesRuleId": "string",
                            "salesRuleType": 0,
                            "salesRule": "string",
                            "discountAmount": 1.1,
                            "createdTime": "1611674985000",
                            "updatedTime": "1611674985000"
                        }
                    ]
                }
            ],
            "orderBillingAddresses": {
                "orderBillingAddressId": "5085288866705752074",
                "parentOrderNumber": "11110001",
                "userId": "12345",
                "postBox": "psotBox1",
                "suite": "string1",
                "address1": "address1",
                "address2": "address2",
                "city": "city1",
                "state": "state1",
                "countryCode": "US",
                "zipCode": "55414",
                "firstName": "Renda",
                "fullName": "Renda Zhang",
                "lastName": "Zhang",
                "phone": "13925067232",
                "createdTime": "1611674985000",
                "updatedTime": "1611674985000"
            },
            "paymentTransactions": [
                {
                    "orderPaymentTransactionId": "5085288866705752073",
                    "parentOrderNumber": "11110001",
                    "userId": "12345",
                    "transactionType": 0,
                    "paymentTransactionId": "1233",
                    "requestAmount": 1.1,
                    "creditLastFourDigit": "1234",
                    "rewardsId": "cdas",
                    "giftCardNumber": "cdas",
                    "status": 0,
                    "createdTime": "1611674985000",
                    "updatedTime": "1611674985000"
                }
            ]
        },
        {
            "parentOrderNumber": "11111002",
            "subOrders": [
                {
                    "orderNumber": "renda01",
                    "storeId": "0",
                    "orderChecksum": null,
                    "orderToken": "",
                    "orderType": 2,
                    "cancelReason": "",
                    "parentOrderNumber": "11111002",
                    "orderSplittingType": 0,
                    "channel": 1,
                    "organizationId": "1234",
                    "parentOrganizationId": "12345",
                    "subAccountName": null,
                    "userId": "12345",
                    "userType": 0,
                    "firstName": "Renda",
                    "lastName": "Zhang",
                    "phone": "13925067232",
                    "customerEmail": "renda@test.com",
                    "currency": "USD",
                    "estimatedTax": 1.1,
                    "itemsSubtotal": 1.1,
                    "shippingHandlingCharge": 1.1,
                    "partialRefundTotal": 0,
                    "grandTotalCollected": 1.1,
                    "totalDiscount": 1.1,
                    "status": 1000,
                    "gift": 0,
                    "giftMessage": "test",
                    "giftRecipientEmail": "test@email.com",
                    "createdTime": "1611674271000",
                    "updatedTime": "1611674271000",
                    "receiptNumber": "5085264333852557313",
                    "orderLines": [
                        {
                            "orderItemId": "5085264333852557315",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "12345",
                            "skuNumber": "sku1",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 1,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5085264333852557314",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610687271000",
                            "returnDeadline": "1610687271000",
                            "status": 1000,
                            "createdTime": "1611674271000",
                            "updatedTime": "1611674271000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5085264333852557316",
                                        "orderItemId": "5085264333852557315",
                                        "userId": "12345",
                                        "skuNumber": "sku1",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611674271000",
                                        "updatedTime": "1611674271000"
                                    }
                                }
                            ]
                        }
                    ],
                    "shipment": [
                        {
                            "orderShipmentId": "5085264333852557314",
                            "userId": "12345",
                            "orderId": "5085264333852557312",
                            "postBox": "vfdavf",
                            "suite": "vad",
                            "address1": "vad",
                            "address2": "vdavd",
                            "city": "dvsavds",
                            "state": "dsavds",
                            "countryCode": "US",
                            "zipCode": "55414",
                            "firstName": "Renda",
                            "lastName": "Zhang",
                            "phone": "13925067232",
                            "carrier": 0,
                            "shipFromLocationId": "1",
                            "totalChargeBeforeTax": 1.1,
                            "trackingStatus": 0,
                            "trackingNumber": null,
                            "trackingRecords": null,
                            "carrierTrackingUrl": null,
                            "serviceLevel": 0,
                            "promiseShipDate": "1610687271000",
                            "promiseDeliveryDate": "1610687271000",
                            "orderShipmentType": 1,
                            "createdTime": "1611674271000",
                            "updatedTime": "1611674271000",
                            "shippingLabel": null,
                            "orderItemIndex": [
                                "0"
                            ]
                        }
                    ],
                    "orderCoupons": [
                        {
                            "orderCouponId": "5085264333852557317",
                            "userId": "12345",
                            "salesRuleId": "string",
                            "salesRuleType": 0,
                            "salesRule": "string",
                            "discountAmount": 1.1,
                            "createdTime": "1611674271000",
                            "updatedTime": "1611674271000"
                        }
                    ]
                }
            ],
            "orderBillingAddresses": {
                "orderBillingAddressId": "5085264333852557319",
                "parentOrderNumber": "11111002",
                "userId": "12345",
                "postBox": "psotBox1",
                "suite": "string1",
                "address1": "address1",
                "address2": "address2",
                "city": "city1",
                "state": "state1",
                "countryCode": "US",
                "zipCode": "55414",
                "firstName": "Renda",
                "fullName": "Renda Zhang",
                "lastName": "Zhang",
                "phone": "13925067232",
                "createdTime": "1611674271000",
                "updatedTime": "1611674271000"
            },
            "paymentTransactions": [
                {
                    "orderPaymentTransactionId": "5085264333852557318",
                    "parentOrderNumber": "11111002",
                    "userId": "12345",
                    "transactionType": 0,
                    "paymentTransactionId": "1233",
                    "requestAmount": 1.1,
                    "creditLastFourDigit": "1234",
                    "rewardsId": "cdas",
                    "giftCardNumber": "cdas",
                    "status": 0,
                    "createdTime": "1611674271000",
                    "updatedTime": "1611674271000"
                }
            ]
        },
        {
            "parentOrderNumber": "11111998",
            "subOrders": [
                {
                    "orderNumber": "cpm02",
                    "storeId": "0",
                    "orderChecksum": null,
                    "orderToken": "",
                    "orderType": 1,
                    "cancelReason": "",
                    "parentOrderNumber": "11111998",
                    "orderSplittingType": 0,
                    "channel": 1,
                    "organizationId": "1234",
                    "parentOrganizationId": "12345",
                    "subAccountName": null,
                    "userId": "12345",
                    "userType": 0,
                    "firstName": "Renda",
                    "lastName": "Zhang",
                    "phone": "13925067232",
                    "customerEmail": "renda@test.com",
                    "currency": "USD",
                    "estimatedTax": 1.1,
                    "itemsSubtotal": 1.1,
                    "shippingHandlingCharge": 1.1,
                    "partialRefundTotal": 0,
                    "grandTotalCollected": 1.1,
                    "totalDiscount": 1.1,
                    "status": 1000,
                    "gift": 0,
                    "giftMessage": "test",
                    "giftRecipientEmail": "test@email.com",
                    "createdTime": "1611687883000",
                    "updatedTime": "1611687883000",
                    "receiptNumber": "5085732038611238913",
                    "orderLines": [
                        {
                            "orderItemId": "5085732038611238915",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "12345",
                            "skuNumber": "sku1",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 1,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5085732038611238914",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610687271000",
                            "returnDeadline": "1610687271000",
                            "status": 1000,
                            "createdTime": "1611687883000",
                            "updatedTime": "1611687883000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5085732038611238916",
                                        "orderItemId": "5085732038611238915",
                                        "userId": "12345",
                                        "skuNumber": "sku1",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611687883000",
                                        "updatedTime": "1611687883000"
                                    }
                                }
                            ]
                        }
                    ],
                    "orderPickup": {
                        "orderPickupId": "5085732038611238914",
                        "userId": "12345",
                        "orderId": "5085732038611238912",
                        "shipFromLocationId": "12",
                        "shipToLocationId": "23",
                        "orderPickupStatus": 0,
                        "promiseReadyDate": "1610614807000",
                        "pickupDeadlineTime": "1610614807000",
                        "pickupCompletedTime": "1611687883000",
                        "pickupPersonFirstname": "Renda",
                        "pickupPersonLastname": "Zhang",
                        "pickupPersonEmail": "feavd@vfd",
                        "pickupPersonPhone": "13925067232",
                        "orderPickupType": 1,
                        "address1": "vad",
                        "address2": "vdavd",
                        "city": "dvsavds",
                        "state": "dsavds",
                        "countryCode": "US",
                        "zipCode": "55414",
                        "createdTime": "1611687883000",
                        "updatedTime": "1611687883000",
                        "orderItemIndex": [
                            "0"
                        ]
                    },
                    "orderCoupons": [
                        {
                            "orderCouponId": "5085732038611238917",
                            "userId": "12345",
                            "salesRuleId": "string",
                            "salesRuleType": 0,
                            "salesRule": "string",
                            "discountAmount": 1.1,
                            "createdTime": "1611687883000",
                            "updatedTime": "1611687883000"
                        }
                    ]
                }
            ],
            "orderBillingAddresses": {
                "orderBillingAddressId": "5085732038611238919",
                "parentOrderNumber": "11111998",
                "userId": "12345",
                "postBox": "psotBox1",
                "suite": "string1",
                "address1": "address1",
                "address2": "address2",
                "city": "city1",
                "state": "state1",
                "countryCode": "US",
                "zipCode": "55414",
                "firstName": "Renda",
                "fullName": "Renda Zhang",
                "lastName": "Zhang",
                "phone": "13925067232",
                "createdTime": "1611687883000",
                "updatedTime": "1611687883000"
            },
            "paymentTransactions": [
                {
                    "orderPaymentTransactionId": "5085732038611238918",
                    "parentOrderNumber": "11111998",
                    "userId": "12345",
                    "transactionType": 0,
                    "paymentTransactionId": "1233",
                    "requestAmount": 1.1,
                    "creditLastFourDigit": "1234",
                    "rewardsId": "cdas",
                    "giftCardNumber": "cdas",
                    "status": 0,
                    "createdTime": "1611687883000",
                    "updatedTime": "1611687883000"
                }
            ]
        },
        {
            "parentOrderNumber": "11111999",
            "subOrders": [
                {
                    "orderNumber": "cpm01",
                    "storeId": "0",
                    "orderChecksum": null,
                    "orderToken": "",
                    "orderType": 1,
                    "cancelReason": "",
                    "parentOrderNumber": "11111999",
                    "orderSplittingType": 0,
                    "channel": 1,
                    "organizationId": "1234",
                    "parentOrganizationId": "12345",
                    "subAccountName": null,
                    "userId": "12345",
                    "userType": 0,
                    "firstName": "Renda",
                    "lastName": "Zhang",
                    "phone": "13925067232",
                    "customerEmail": "renda@test.com",
                    "currency": "USD",
                    "estimatedTax": 1.1,
                    "itemsSubtotal": 1.1,
                    "shippingHandlingCharge": 1.1,
                    "partialRefundTotal": 0,
                    "grandTotalCollected": 1.1,
                    "totalDiscount": 1.1,
                    "status": 1000,
                    "gift": 0,
                    "giftMessage": "test",
                    "giftRecipientEmail": "test@email.com",
                    "createdTime": "1611687437000",
                    "updatedTime": "1611687437000",
                    "receiptNumber": "5085716679808172033",
                    "orderLines": [
                        {
                            "orderItemId": "5085716679808172035",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "12345",
                            "skuNumber": "sku1",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 1,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5085716679808172034",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610687271000",
                            "returnDeadline": "1610687271000",
                            "status": 1000,
                            "createdTime": "1611687437000",
                            "updatedTime": "1611687437000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5085716679808172036",
                                        "orderItemId": "5085716679808172035",
                                        "userId": "12345",
                                        "skuNumber": "sku1",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611687437000",
                                        "updatedTime": "1611687437000"
                                    }
                                }
                            ]
                        }
                    ],
                    "orderPickup": {
                        "orderPickupId": "5085716679808172034",
                        "userId": "12345",
                        "orderId": "5085716679808172032",
                        "shipFromLocationId": "12",
                        "shipToLocationId": "23",
                        "orderPickupStatus": 0,
                        "promiseReadyDate": "1610614807000",
                        "pickupDeadlineTime": "1610614807000",
                        "pickupCompletedTime": "1611687437000",
                        "pickupPersonFirstname": "Renda",
                        "pickupPersonLastname": "Zhang",
                        "pickupPersonEmail": "feavd@vfd",
                        "pickupPersonPhone": "13925067232",
                        "orderPickupType": 1,
                        "address1": "vad",
                        "address2": "vdavd",
                        "city": "dvsavds",
                        "state": "dsavds",
                        "countryCode": "US",
                        "zipCode": "55414",
                        "createdTime": "1611687437000",
                        "updatedTime": "1611687437000",
                        "orderItemIndex": [
                            "0"
                        ]
                    },
                    "orderCoupons": [
                        {
                            "orderCouponId": "5085716679808172037",
                            "userId": "12345",
                            "salesRuleId": "string",
                            "salesRuleType": 0,
                            "salesRule": "string",
                            "discountAmount": 1.1,
                            "createdTime": "1611687437000",
                            "updatedTime": "1611687437000"
                        }
                    ]
                }
            ],
            "orderBillingAddresses": {
                "orderBillingAddressId": "5085716679808172039",
                "parentOrderNumber": "11111999",
                "userId": "12345",
                "postBox": "psotBox1",
                "suite": "string1",
                "address1": "address1",
                "address2": "address2",
                "city": "city1",
                "state": "state1",
                "countryCode": "US",
                "zipCode": "55414",
                "firstName": "Renda",
                "fullName": "Renda Zhang",
                "lastName": "Zhang",
                "phone": "13925067232",
                "createdTime": "1611687437000",
                "updatedTime": "1611687437000"
            },
            "paymentTransactions": [
                {
                    "orderPaymentTransactionId": "5085716679808172038",
                    "parentOrderNumber": "11111999",
                    "userId": "12345",
                    "transactionType": 0,
                    "paymentTransactionId": "1233",
                    "requestAmount": 1.1,
                    "creditLastFourDigit": "1234",
                    "rewardsId": "cdas",
                    "giftCardNumber": "cdas",
                    "status": 0,
                    "createdTime": "1611687437000",
                    "updatedTime": "1611687437000"
                }
            ]
        },
        {
            "parentOrderNumber": "b2b11110001",
            "subOrders": [
                {
                    "orderNumber": "b2b000001",
                    "storeId": "12",
                    "orderChecksum": null,
                    "orderToken": "",
                    "orderType": 2,
                    "cancelReason": "",
                    "parentOrderNumber": "b2b11110001",
                    "orderSplittingType": 0,
                    "channel": 4,
                    "organizationId": "1",
                    "parentOrganizationId": "1",
                    "subAccountName": "subaccount",
                    "userId": "2054",
                    "userType": 0,
                    "firstName": "Tim",
                    "lastName": "Jiang",
                    "phone": "13925067232",
                    "customerEmail": "renda@test.com",
                    "currency": "USD",
                    "estimatedTax": 2.5,
                    "itemsSubtotal": 31.16,
                    "shippingHandlingCharge": 4,
                    "partialRefundTotal": 0,
                    "grandTotalCollected": 37.66,
                    "totalDiscount": 0,
                    "status": 7000,
                    "gift": 0,
                    "giftMessage": "test",
                    "giftRecipientEmail": "test@email.com",
                    "createdTime": "1611510157000",
                    "updatedTime": "1611510157000",
                    "receiptNumber": "5085562748180299777",
                    "orderLines": [
                        {
                            "orderItemId": "5085562748180299779",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "2054",
                            "skuNumber": "a1000005",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 1,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5085562748180299778",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610614807000",
                            "returnDeadline": "1610614807000",
                            "status": 1000,
                            "createdTime": "1611682957000",
                            "updatedTime": "1611682957000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5085562748180299780",
                                        "orderItemId": "5085562748180299779",
                                        "userId": "2054",
                                        "skuNumber": "a1000005",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611682957000",
                                        "updatedTime": "1611682957000"
                                    }
                                }
                            ]
                        }
                    ],
                    "shipment": [
                        {
                            "orderShipmentId": "5085562748180299778",
                            "userId": "2054",
                            "orderId": "5085562748180299776",
                            "postBox": "postbox",
                            "suite": "suite",
                            "address1": "723 Lockefield St",
                            "address2": "string",
                            "city": "Indianapolis",
                            "state": "IN",
                            "countryCode": "us",
                            "zipCode": "46710",
                            "firstName": "Tim",
                            "lastName": "Jiang",
                            "phone": "3177726975",
                            "carrier": 0,
                            "shipFromLocationId": "1",
                            "totalChargeBeforeTax": 100,
                            "trackingStatus": 0,
                            "trackingNumber": null,
                            "trackingRecords": null,
                            "carrierTrackingUrl": null,
                            "serviceLevel": 0,
                            "promiseShipDate": "1610614807000",
                            "promiseDeliveryDate": "1610614807000",
                            "orderShipmentType": 0,
                            "createdTime": "1611682957000",
                            "updatedTime": "1611682957000",
                            "shippingLabel": null,
                            "orderItemIndex": [
                                "0"
                            ]
                        }
                    ],
                    "orderCoupons": [
                        {
                            "orderCouponId": "5085562748180299781",
                            "userId": "2054",
                            "salesRuleId": "string",
                            "salesRuleType": 0,
                            "salesRule": "string",
                            "discountAmount": 1.1,
                            "createdTime": "1611682957000",
                            "updatedTime": "1611682957000"
                        }
                    ]
                },
                {
                    "orderNumber": "b2b00000004",
                    "storeId": "12",
                    "orderChecksum": null,
                    "orderToken": "",
                    "orderType": 1,
                    "cancelReason": "",
                    "parentOrderNumber": "b2b11110001",
                    "orderSplittingType": 0,
                    "channel": 1,
                    "organizationId": "12",
                    "parentOrganizationId": "1",
                    "subAccountName": null,
                    "userId": "2054",
                    "userType": 0,
                    "firstName": "Tim",
                    "lastName": "Jiang",
                    "phone": "13925067232",
                    "customerEmail": "renda@test.com",
                    "currency": "USD",
                    "estimatedTax": 1.1,
                    "itemsSubtotal": 1.1,
                    "shippingHandlingCharge": 1.1,
                    "partialRefundTotal": 0,
                    "grandTotalCollected": 1.1,
                    "totalDiscount": 1.1,
                    "status": 1000,
                    "gift": 0,
                    "giftMessage": "test",
                    "giftRecipientEmail": "test@email.com",
                    "createdTime": "1611682957000",
                    "updatedTime": "1611682957000",
                    "receiptNumber": "5085562748180299783",
                    "orderLines": [
                        {
                            "orderItemId": "5085562748180299785",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "2054",
                            "skuNumber": "b1000000",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 1,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5085562748180299784",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610614807000",
                            "returnDeadline": "1610614807000",
                            "status": 1000,
                            "createdTime": "1611682957000",
                            "updatedTime": "1611682957000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5085562748180299786",
                                        "orderItemId": "5085562748180299785",
                                        "userId": "2054",
                                        "skuNumber": "b1000000",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611682957000",
                                        "updatedTime": "1611682957000"
                                    }
                                }
                            ]
                        }
                    ],
                    "orderPickup": {
                        "orderPickupId": "5085562748180299784",
                        "userId": "2054",
                        "orderId": "5085562748180299782",
                        "shipFromLocationId": "12",
                        "shipToLocationId": "23",
                        "orderPickupStatus": 0,
                        "promiseReadyDate": "1610614807000",
                        "pickupDeadlineTime": "1610614807000",
                        "pickupCompletedTime": "1611682957000",
                        "pickupPersonFirstname": "Renda",
                        "pickupPersonLastname": "Zhang",
                        "pickupPersonEmail": "feavd@vfd",
                        "pickupPersonPhone": "13925067232",
                        "orderPickupType": 1,
                        "address1": "vad",
                        "address2": "vdavd",
                        "city": "dvsavds",
                        "state": "dsavds",
                        "countryCode": "US",
                        "zipCode": "55414",
                        "createdTime": "1611682957000",
                        "updatedTime": "1611682957000",
                        "orderItemIndex": [
                            "0"
                        ]
                    },
                    "orderCoupons": [
                        {
                            "orderCouponId": "5085562748180299787",
                            "userId": "2054",
                            "salesRuleId": "string",
                            "salesRuleType": 0,
                            "salesRule": "string",
                            "discountAmount": 1.1,
                            "createdTime": "1611682957000",
                            "updatedTime": "1611682957000"
                        }
                    ]
                }
            ],
            "orderBillingAddresses": {
                "orderBillingAddressId": "5085562748180299789",
                "parentOrderNumber": "b2b11110001",
                "userId": "2054",
                "postBox": "psotBox1",
                "suite": "string1",
                "address1": "address1",
                "address2": "address2",
                "city": "city1",
                "state": "state1",
                "countryCode": "US",
                "zipCode": "55414",
                "firstName": "Renda",
                "fullName": "Renda Zhang",
                "lastName": "Zhang",
                "phone": "13925067232",
                "createdTime": "1611682957000",
                "updatedTime": "1611682957000"
            },
            "paymentTransactions": [
                {
                    "orderPaymentTransactionId": "5085562748180299788",
                    "parentOrderNumber": "b2b11110001",
                    "userId": "2054",
                    "transactionType": 0,
                    "paymentTransactionId": "1233",
                    "requestAmount": 1.1,
                    "creditLastFourDigit": "1234",
                    "rewardsId": "cdas",
                    "giftCardNumber": "cdas",
                    "status": 0,
                    "createdTime": "1611682957000",
                    "updatedTime": "1611682957000"
                }
            ]
        },
        {
            "parentOrderNumber": "b2b11110002",
            "subOrders": [
                {
                    "orderNumber": "b2b00000003",
                    "storeId": "12",
                    "orderChecksum": null,
                    "orderToken": "",
                    "orderType": 1,
                    "cancelReason": "",
                    "parentOrderNumber": "b2b11110002",
                    "orderSplittingType": 0,
                    "channel": 1,
                    "organizationId": "12",
                    "parentOrganizationId": "1",
                    "subAccountName": null,
                    "userId": "2566",
                    "userType": 0,
                    "firstName": "Tim",
                    "lastName": "Jiang",
                    "phone": "13925067232",
                    "customerEmail": "renda@test.com",
                    "currency": "USD",
                    "estimatedTax": 1.1,
                    "itemsSubtotal": 1.1,
                    "shippingHandlingCharge": 1.1,
                    "partialRefundTotal": 0,
                    "grandTotalCollected": 1.1,
                    "totalDiscount": 1.1,
                    "status": 1000,
                    "gift": 0,
                    "giftMessage": "test",
                    "giftRecipientEmail": "test@email.com",
                    "createdTime": "1611682565000",
                    "updatedTime": "1611682565000",
                    "receiptNumber": "5085549313522581511",
                    "orderLines": [
                        {
                            "orderItemId": "5085549313522581513",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "2566",
                            "skuNumber": "b1000000",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 1,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5085549313522581512",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610614807000",
                            "returnDeadline": "1610614807000",
                            "status": 1000,
                            "createdTime": "1611682565000",
                            "updatedTime": "1611682565000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5085549313522581514",
                                        "orderItemId": "5085549313522581513",
                                        "userId": "2566",
                                        "skuNumber": "b1000000",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611682565000",
                                        "updatedTime": "1611682565000"
                                    }
                                }
                            ]
                        }
                    ],
                    "orderPickup": {
                        "orderPickupId": "5085549313522581512",
                        "userId": "2566",
                        "orderId": "5085549313522581510",
                        "shipFromLocationId": "12",
                        "shipToLocationId": "23",
                        "orderPickupStatus": 0,
                        "promiseReadyDate": "1610614807000",
                        "pickupDeadlineTime": "1610614807000",
                        "pickupCompletedTime": "1611682565000",
                        "pickupPersonFirstname": "Renda",
                        "pickupPersonLastname": "Zhang",
                        "pickupPersonEmail": "feavd@vfd",
                        "pickupPersonPhone": "13925067232",
                        "orderPickupType": 1,
                        "address1": "vad",
                        "address2": "vdavd",
                        "city": "dvsavds",
                        "state": "dsavds",
                        "countryCode": "US",
                        "zipCode": "55414",
                        "createdTime": "1611682565000",
                        "updatedTime": "1611682565000",
                        "orderItemIndex": [
                            "0"
                        ]
                    },
                    "orderCoupons": [
                        {
                            "orderCouponId": "5085549313522581515",
                            "userId": "2566",
                            "salesRuleId": "string",
                            "salesRuleType": 0,
                            "salesRule": "string",
                            "discountAmount": 1.1,
                            "createdTime": "1611682565000",
                            "updatedTime": "1611682565000"
                        }
                    ]
                },
                {
                    "orderNumber": "b2b000002",
                    "storeId": "12",
                    "orderChecksum": null,
                    "orderToken": "",
                    "orderType": 2,
                    "cancelReason": "",
                    "parentOrderNumber": "b2b11110002",
                    "orderSplittingType": 0,
                    "channel": 4,
                    "organizationId": "1",
                    "parentOrganizationId": "1",
                    "subAccountName": "subaccount",
                    "userId": "2566",
                    "userType": 0,
                    "firstName": "Tim",
                    "lastName": "Jiang",
                    "phone": "13925067232",
                    "customerEmail": "renda@test.com",
                    "currency": "USD",
                    "estimatedTax": 1.1,
                    "itemsSubtotal": 1.1,
                    "shippingHandlingCharge": 1.1,
                    "partialRefundTotal": 0,
                    "grandTotalCollected": 1.1,
                    "totalDiscount": 1.1,
                    "status": 1000,
                    "gift": 0,
                    "giftMessage": "test",
                    "giftRecipientEmail": "test@email.com",
                    "createdTime": "1611682565000",
                    "updatedTime": "1611682565000",
                    "receiptNumber": "5085549313522581505",
                    "orderLines": [
                        {
                            "orderItemId": "5085549313522581507",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "2566",
                            "skuNumber": "a1000005",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 1,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5085549313522581506",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610614807000",
                            "returnDeadline": "1610614807000",
                            "status": 1000,
                            "createdTime": "1611682565000",
                            "updatedTime": "1611682565000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5085549313522581508",
                                        "orderItemId": "5085549313522581507",
                                        "userId": "2566",
                                        "skuNumber": "a1000005",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611682565000",
                                        "updatedTime": "1611682565000"
                                    }
                                }
                            ]
                        }
                    ],
                    "shipment": [
                        {
                            "orderShipmentId": "5085549313522581506",
                            "userId": "2566",
                            "orderId": "5085549313522581504",
                            "postBox": "postbox",
                            "suite": "suite",
                            "address1": "723 Lockefield St",
                            "address2": "string",
                            "city": "Indianapolis",
                            "state": "IN",
                            "countryCode": "us",
                            "zipCode": "46710",
                            "firstName": "Tim",
                            "lastName": "Jiang",
                            "phone": "3177726975",
                            "carrier": 0,
                            "shipFromLocationId": "1",
                            "totalChargeBeforeTax": 100,
                            "trackingStatus": 0,
                            "trackingNumber": null,
                            "trackingRecords": null,
                            "carrierTrackingUrl": null,
                            "serviceLevel": 0,
                            "promiseShipDate": "1610614807000",
                            "promiseDeliveryDate": "1610614807000",
                            "orderShipmentType": 0,
                            "createdTime": "1611682565000",
                            "updatedTime": "1611682565000",
                            "shippingLabel": null,
                            "orderItemIndex": [
                                "0"
                            ]
                        }
                    ],
                    "orderCoupons": [
                        {
                            "orderCouponId": "5085549313522581509",
                            "userId": "2566",
                            "salesRuleId": "string",
                            "salesRuleType": 0,
                            "salesRule": "string",
                            "discountAmount": 1.1,
                            "createdTime": "1611682565000",
                            "updatedTime": "1611682565000"
                        }
                    ]
                }
            ],
            "orderBillingAddresses": {
                "orderBillingAddressId": "5085549313522581517",
                "parentOrderNumber": "b2b11110002",
                "userId": "2566",
                "postBox": "psotBox1",
                "suite": "string1",
                "address1": "address1",
                "address2": "address2",
                "city": "city1",
                "state": "state1",
                "countryCode": "US",
                "zipCode": "55414",
                "firstName": "Renda",
                "fullName": "Renda Zhang",
                "lastName": "Zhang",
                "phone": "13925067232",
                "createdTime": "1611682565000",
                "updatedTime": "1611682565000"
            },
            "paymentTransactions": [
                {
                    "orderPaymentTransactionId": "5085549313522581516",
                    "parentOrderNumber": "b2b11110002",
                    "userId": "2566",
                    "transactionType": 0,
                    "paymentTransactionId": "1233",
                    "requestAmount": 1.1,
                    "creditLastFourDigit": "1234",
                    "rewardsId": "cdas",
                    "giftCardNumber": "cdas",
                    "status": 0,
                    "createdTime": "1611682565000",
                    "updatedTime": "1611682565000"
                }
            ]
        },
        {
            "parentOrderNumber": "b2b11110003",
            "subOrders": [
                {
                    "orderNumber": "b2b000005",
                    "storeId": "12",
                    "orderChecksum": null,
                    "orderToken": "",
                    "orderType": 2,
                    "cancelReason": "",
                    "parentOrderNumber": "b2b11110003",
                    "orderSplittingType": 0,
                    "channel": 4,
                    "organizationId": "1",
                    "parentOrganizationId": "1",
                    "subAccountName": "subaccount",
                    "userId": "2054",
                    "userType": 0,
                    "firstName": "Tim",
                    "lastName": "Jiang",
                    "phone": "13925067232",
                    "customerEmail": "renda@test.com",
                    "currency": "USD",
                    "estimatedTax": 2.5,
                    "itemsSubtotal": 20.5,
                    "shippingHandlingCharge": 1.1,
                    "partialRefundTotal": 0,
                    "grandTotalCollected": 24.1,
                    "totalDiscount": 0,
                    "status": 3000,
                    "gift": 0,
                    "giftMessage": "test",
                    "giftRecipientEmail": "test@email.com",
                    "createdTime": "1611602157000",
                    "updatedTime": "1611602157000",
                    "receiptNumber": "5085755162715144193",
                    "orderLines": [
                        {
                            "orderItemId": "5085755162715144197",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "2054",
                            "skuNumber": "a1000006",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 2,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5085755162715144194",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610614807000",
                            "returnDeadline": "1610614807000",
                            "status": 1000,
                            "createdTime": "1611688557000",
                            "updatedTime": "1611688557000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5085755162715144198",
                                        "orderItemId": "5085755162715144197",
                                        "userId": "2054",
                                        "skuNumber": "a1000006",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611688557000",
                                        "updatedTime": "1611688557000"
                                    }
                                }
                            ]
                        },
                        {
                            "orderItemId": "5085755162715144195",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "2054",
                            "skuNumber": "a1000005",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 1,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5085755162715144194",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610614807000",
                            "returnDeadline": "1610614807000",
                            "status": 1000,
                            "createdTime": "1611688557000",
                            "updatedTime": "1611688557000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5085755162715144196",
                                        "orderItemId": "5085755162715144195",
                                        "userId": "2054",
                                        "skuNumber": "a1000005",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611688557000",
                                        "updatedTime": "1611688557000"
                                    }
                                }
                            ]
                        }
                    ],
                    "shipment": [
                        {
                            "orderShipmentId": "5085755162715144194",
                            "userId": "2054",
                            "orderId": "5085755162715144192",
                            "postBox": "postbox",
                            "suite": "suite",
                            "address1": "723 Lockefield St",
                            "address2": "string",
                            "city": "Indianapolis",
                            "state": "IN",
                            "countryCode": "us",
                            "zipCode": "46710",
                            "firstName": "Tim",
                            "lastName": "Jiang",
                            "phone": "3177726975",
                            "carrier": 0,
                            "shipFromLocationId": "1",
                            "totalChargeBeforeTax": 100,
                            "trackingStatus": 0,
                            "trackingNumber": null,
                            "trackingRecords": null,
                            "carrierTrackingUrl": null,
                            "serviceLevel": 0,
                            "promiseShipDate": "1610614807000",
                            "promiseDeliveryDate": "1610614807000",
                            "orderShipmentType": 0,
                            "createdTime": "1611688557000",
                            "updatedTime": "1611688557000",
                            "shippingLabel": null,
                            "orderItemIndex": [
                                "0",
                                "1"
                            ]
                        }
                    ],
                    "orderCoupons": [
                        {
                            "orderCouponId": "5085755162715144199",
                            "userId": "2054",
                            "salesRuleId": "string",
                            "salesRuleType": 0,
                            "salesRule": "string",
                            "discountAmount": 1.1,
                            "createdTime": "1611688557000",
                            "updatedTime": "1611688557000"
                        }
                    ]
                },
                {
                    "orderNumber": "b2b00000006",
                    "storeId": "12",
                    "orderChecksum": null,
                    "orderToken": "",
                    "orderType": 1,
                    "cancelReason": "",
                    "parentOrderNumber": "b2b11110003",
                    "orderSplittingType": 0,
                    "channel": 1,
                    "organizationId": "12",
                    "parentOrganizationId": "1",
                    "subAccountName": null,
                    "userId": "2054",
                    "userType": 0,
                    "firstName": "Max",
                    "lastName": "Planck",
                    "phone": "13925067232",
                    "customerEmail": "renda@test.com",
                    "currency": "USD",
                    "estimatedTax": 20,
                    "itemsSubtotal": 250,
                    "shippingHandlingCharge": 0,
                    "partialRefundTotal": 0,
                    "grandTotalCollected": 270,
                    "totalDiscount": 0,
                    "status": 8000,
                    "gift": 0,
                    "giftMessage": "test",
                    "giftRecipientEmail": "test@email.com",
                    "createdTime": "1611429357000",
                    "updatedTime": "1611429357000",
                    "receiptNumber": "5085755197074882561",
                    "orderLines": [
                        {
                            "orderItemId": "5085755197074882563",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "2054",
                            "skuNumber": "b1000000",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 1,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5085755197074882562",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610614807000",
                            "returnDeadline": "1610614807000",
                            "status": 1000,
                            "createdTime": "1611688557000",
                            "updatedTime": "1611688557000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5085755197074882564",
                                        "orderItemId": "5085755197074882563",
                                        "userId": "2054",
                                        "skuNumber": "b1000000",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611688557000",
                                        "updatedTime": "1611688557000"
                                    }
                                }
                            ]
                        },
                        {
                            "orderItemId": "5085755197074882565",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "2054",
                            "skuNumber": "b1000001",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 2,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5085755197074882562",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610614807000",
                            "returnDeadline": "1610614807000",
                            "status": 1000,
                            "createdTime": "1611688557000",
                            "updatedTime": "1611688557000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5085755197074882566",
                                        "orderItemId": "5085755197074882565",
                                        "userId": "2054",
                                        "skuNumber": "b1000001",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611688557000",
                                        "updatedTime": "1611688557000"
                                    }
                                }
                            ]
                        }
                    ],
                    "orderPickup": {
                        "orderPickupId": "5085755197074882562",
                        "userId": "2054",
                        "orderId": "5085755197074882560",
                        "shipFromLocationId": "12",
                        "shipToLocationId": "23",
                        "orderPickupStatus": 0,
                        "promiseReadyDate": "1610614807000",
                        "pickupDeadlineTime": "1610614807000",
                        "pickupCompletedTime": "1611688557000",
                        "pickupPersonFirstname": "Renda",
                        "pickupPersonLastname": "Zhang",
                        "pickupPersonEmail": "feavd@vfd",
                        "pickupPersonPhone": "13925067232",
                        "orderPickupType": 1,
                        "address1": "vad",
                        "address2": "vdavd",
                        "city": "dvsavds",
                        "state": "dsavds",
                        "countryCode": "US",
                        "zipCode": "55414",
                        "createdTime": "1611688557000",
                        "updatedTime": "1611688557000",
                        "orderItemIndex": [
                            "0",
                            "1"
                        ]
                    },
                    "orderCoupons": [
                        {
                            "orderCouponId": "5085755197074882567",
                            "userId": "2054",
                            "salesRuleId": "string",
                            "salesRuleType": 0,
                            "salesRule": "string",
                            "discountAmount": 1.1,
                            "createdTime": "1611688557000",
                            "updatedTime": "1611688557000"
                        }
                    ]
                }
            ],
            "orderBillingAddresses": {
                "orderBillingAddressId": "5085755197074882569",
                "parentOrderNumber": "b2b11110003",
                "userId": "2054",
                "postBox": "psotBox1",
                "suite": "string1",
                "address1": "address1",
                "address2": "address2",
                "city": "city1",
                "state": "state1",
                "countryCode": "US",
                "zipCode": "55414",
                "firstName": "Renda",
                "fullName": "Renda Zhang",
                "lastName": "Zhang",
                "phone": "13925067232",
                "createdTime": "1611688557000",
                "updatedTime": "1611688557000"
            },
            "paymentTransactions": [
                {
                    "orderPaymentTransactionId": "5085755197074882568",
                    "parentOrderNumber": "b2b11110003",
                    "userId": "2054",
                    "transactionType": 0,
                    "paymentTransactionId": "1233",
                    "requestAmount": 1.1,
                    "creditLastFourDigit": "1234",
                    "rewardsId": "cdas",
                    "giftCardNumber": "cdas",
                    "status": 0,
                    "createdTime": "1611688557000",
                    "updatedTime": "1611688557000"
                }
            ]
        },
        {
            "parentOrderNumber": "b2b11110004",
            "subOrders": [
                {
                    "orderNumber": "b2b00000008",
                    "storeId": "12",
                    "orderChecksum": null,
                    "orderToken": "",
                    "orderType": 1,
                    "cancelReason": "",
                    "parentOrderNumber": "b2b11110004",
                    "orderSplittingType": 0,
                    "channel": 1,
                    "organizationId": "12",
                    "parentOrganizationId": "1",
                    "subAccountName": null,
                    "userId": "1549",
                    "userType": 0,
                    "firstName": "Tim",
                    "lastName": "Jiang",
                    "phone": "13925067232",
                    "customerEmail": "renda@test.com",
                    "currency": "USD",
                    "estimatedTax": 1.1,
                    "itemsSubtotal": 1.1,
                    "shippingHandlingCharge": 1.1,
                    "partialRefundTotal": 0,
                    "grandTotalCollected": 1.1,
                    "totalDiscount": 1.1,
                    "status": 1000,
                    "gift": 0,
                    "giftMessage": "test",
                    "giftRecipientEmail": "test@email.com",
                    "createdTime": "1611795940000",
                    "updatedTime": "1611795940000",
                    "receiptNumber": "5089444848859594758",
                    "orderLines": [
                        {
                            "orderItemId": "5089444848859594760",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "1549",
                            "skuNumber": "b1000000",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 1,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5089444848859594759",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610614807000",
                            "returnDeadline": "1610614807000",
                            "status": 1000,
                            "createdTime": "1611795940000",
                            "updatedTime": "1611795940000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5089444848859594761",
                                        "orderItemId": "5089444848859594760",
                                        "userId": "1549",
                                        "skuNumber": "b1000000",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611795940000",
                                        "updatedTime": "1611795940000"
                                    }
                                }
                            ]
                        },
                        {
                            "orderItemId": "5089444848859594762",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "1549",
                            "skuNumber": "b1000001",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 2,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5089444848859594759",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610614807000",
                            "returnDeadline": "1610614807000",
                            "status": 1000,
                            "createdTime": "1611795940000",
                            "updatedTime": "1611795940000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5089444848859594763",
                                        "orderItemId": "5089444848859594762",
                                        "userId": "1549",
                                        "skuNumber": "b1000001",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611795940000",
                                        "updatedTime": "1611795940000"
                                    }
                                }
                            ]
                        }
                    ],
                    "orderPickup": {
                        "orderPickupId": "5089444848859594759",
                        "userId": "1549",
                        "orderId": "5089444848859594757",
                        "shipFromLocationId": "12",
                        "shipToLocationId": "23",
                        "orderPickupStatus": 0,
                        "promiseReadyDate": "1610614807000",
                        "pickupDeadlineTime": "1610614807000",
                        "pickupCompletedTime": "1611795940000",
                        "pickupPersonFirstname": "Renda",
                        "pickupPersonLastname": "Zhang",
                        "pickupPersonEmail": "feavd@vfd",
                        "pickupPersonPhone": "13925067232",
                        "orderPickupType": 1,
                        "address1": "vad",
                        "address2": "vdavd",
                        "city": "dvsavds",
                        "state": "dsavds",
                        "countryCode": "US",
                        "zipCode": "55414",
                        "createdTime": "1611795940000",
                        "updatedTime": "1611795940000",
                        "orderItemIndex": [
                            "0",
                            "1"
                        ]
                    },
                    "orderCoupons": [
                        {
                            "orderCouponId": "5089444848859594764",
                            "userId": "1549",
                            "salesRuleId": "string",
                            "salesRuleType": 0,
                            "salesRule": "string",
                            "discountAmount": 1.1,
                            "createdTime": "1611795940000",
                            "updatedTime": "1611795940000"
                        }
                    ]
                },
                {
                    "orderNumber": "b2b000007",
                    "storeId": "12",
                    "orderChecksum": null,
                    "orderToken": "",
                    "orderType": 2,
                    "cancelReason": "",
                    "parentOrderNumber": "b2b11110004",
                    "orderSplittingType": 0,
                    "channel": 4,
                    "organizationId": "1",
                    "parentOrganizationId": "1",
                    "subAccountName": "subaccount",
                    "userId": "1549",
                    "userType": 0,
                    "firstName": "Tim",
                    "lastName": "Jiang",
                    "phone": "13925067232",
                    "customerEmail": "renda@test.com",
                    "currency": "USD",
                    "estimatedTax": 1.1,
                    "itemsSubtotal": 1.1,
                    "shippingHandlingCharge": 1.1,
                    "partialRefundTotal": 0,
                    "grandTotalCollected": 1.1,
                    "totalDiscount": 1.1,
                    "status": 1000,
                    "gift": 0,
                    "giftMessage": "test",
                    "giftRecipientEmail": "test@email.com",
                    "createdTime": "1611795940000",
                    "updatedTime": "1611795940000",
                    "receiptNumber": "5089444814499856385",
                    "orderLines": [
                        {
                            "orderItemId": "5089444848859594752",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "1549",
                            "skuNumber": "a1000005",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 1,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5089444814499856386",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610614807000",
                            "returnDeadline": "1610614807000",
                            "status": 1000,
                            "createdTime": "1611795940000",
                            "updatedTime": "1611795940000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5089444848859594753",
                                        "orderItemId": "5089444848859594752",
                                        "userId": "1549",
                                        "skuNumber": "a1000005",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611795940000",
                                        "updatedTime": "1611795940000"
                                    }
                                }
                            ]
                        },
                        {
                            "orderItemId": "5089444848859594754",
                            "taxExempt": true,
                            "taxExemptId": "0",
                            "userId": "1549",
                            "skuNumber": "a1000006",
                            "itemType": 0,
                            "releaseId": "0",
                            "releaseLineId": "0",
                            "orderLineId": 2,
                            "gift": 0,
                            "giftMessage": "test",
                            "giftRecipientEmail": "av@cfdsv",
                            "uom": "ts",
                            "orderShipmentId": "5089444814499856386",
                            "orderPickupId": null,
                            "quantity": 1,
                            "thumbnail": "string",
                            "productName": "productName",
                            "rating": 0,
                            "originalPrice": 1.1,
                            "itemSubtotal": 1.1,
                            "estimatedTax": 1.1,
                            "totalDiscount": 1.1,
                            "price": 1.1,
                            "taxRate": 1.1,
                            "taxation": 0,
                            "hazmat": true,
                            "refundable": 1,
                            "returnable": 1,
                            "refundDeadline": "1610614807000",
                            "returnDeadline": "1610614807000",
                            "status": 1000,
                            "createdTime": "1611795940000",
                            "updatedTime": "1611795940000",
                            "orderItemCoupons": [
                                {
                                    "orderItemCoupon": {
                                        "orderItemCouponId": "5089444848859594755",
                                        "orderItemId": "5089444848859594754",
                                        "userId": "1549",
                                        "skuNumber": "a1000006",
                                        "salesRuleId": "string",
                                        "salesRuleType": 0,
                                        "salesRule": "string",
                                        "discountAmount": 1.1,
                                        "createdTime": "1611795940000",
                                        "updatedTime": "1611795940000"
                                    }
                                }
                            ]
                        }
                    ],
                    "shipment": [
                        {
                            "orderShipmentId": "5089444814499856386",
                            "userId": "1549",
                            "orderId": "5089444814499856384",
                            "postBox": "postbox",
                            "suite": "suite",
                            "address1": "723 Lockefield St",
                            "address2": "string",
                            "city": "Indianapolis",
                            "state": "IN",
                            "countryCode": "us",
                            "zipCode": "46710",
                            "firstName": "Tim",
                            "lastName": "Jiang",
                            "phone": "3177726975",
                            "carrier": 0,
                            "shipFromLocationId": "1",
                            "totalChargeBeforeTax": 100,
                            "trackingStatus": 0,
                            "trackingNumber": null,
                            "trackingRecords": null,
                            "carrierTrackingUrl": null,
                            "serviceLevel": 0,
                            "promiseShipDate": "1610614807000",
                            "promiseDeliveryDate": "1610614807000",
                            "orderShipmentType": 0,
                            "createdTime": "1611795940000",
                            "updatedTime": "1611795940000",
                            "shippingLabel": null,
                            "orderItemIndex": [
                                "0",
                                "1"
                            ]
                        }
                    ],
                    "orderCoupons": [
                        {
                            "orderCouponId": "5089444848859594756",
                            "userId": "1549",
                            "salesRuleId": "string",
                            "salesRuleType": 0,
                            "salesRule": "string",
                            "discountAmount": 1.1,
                            "createdTime": "1611795940000",
                            "updatedTime": "1611795940000"
                        }
                    ]
                }
            ],
            "orderBillingAddresses": {
                "orderBillingAddressId": "5089444848859594766",
                "parentOrderNumber": "b2b11110004",
                "userId": "1549",
                "postBox": "psotBox1",
                "suite": "string1",
                "address1": "address1",
                "address2": "address2",
                "city": "city1",
                "state": "state1",
                "countryCode": "US",
                "zipCode": "55414",
                "firstName": "Renda",
                "fullName": "Renda Zhang",
                "lastName": "Zhang",
                "phone": "13925067232",
                "createdTime": "1611795940000",
                "updatedTime": "1611795940000"
            },
            "paymentTransactions": [
                {
                    "orderPaymentTransactionId": "5089444848859594765",
                    "parentOrderNumber": "b2b11110004",
                    "userId": "1549",
                    "transactionType": 0,
                    "paymentTransactionId": "1233",
                    "requestAmount": 1.1,
                    "creditLastFourDigit": "1234",
                    "rewardsId": "cdas",
                    "giftCardNumber": "cdas",
                    "status": 0,
                    "createdTime": "1611795940000",
                    "updatedTime": "1611795940000"
                }
            ]
        }
    ],
    "pageNum": 0,
    "pageSize": 10,
    "totalPages": 1
}


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

    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()


    const handleChange = (event) => {
        setOrder(event.target.value)
    }






    return (
        <div>
            {/*{*/}
            {/*    props.isShow == 1 ? <Flex>*/}
            {/*        <InputGroup size="md" w="30rem" margin="4">*/}
            {/*            <Input*/}
            {/*                borderRadius="50px"*/}
            {/*                pr="4.5rem"*/}
            {/*                placeholder="Search Orders "*/}
            {/*                value={order}*/}
            {/*                onChange={handleChange}*/}
            {/*            />*/}
            {/*            <InputRightElement width="4.5rem">*/}
            {/*                <Button size="sm" borderRadius="50%" onClick={handleClick}  >*/}
            {/*                    <Search2Icon fontSize="16px" style={{color: '#fff'}}/>*/}
            {/*                </Button>*/}
            {/*            </InputRightElement>*/}
            {/*        </InputGroup>*/}
            {/*        <div className="flex" style={{paddingLeft:"10px"}}>*/}
            {/*            Results (4)*/}
            {/*        </div>*/}
            {/*    </Flex>: null*/}
            {/*}*/}
            {/*<div className="header">*/}
            {/*    <div className="flex border">*/}
            {/*        <div  className="headerText">Purchased within</div>*/}
            {/*        <div>*/}
            {/*            <Select  value="0" style={{ width: 160 }}>*/}
            {/*                <option value="0">Past Six Months</option>*/}
            {/*                <option value="1">Past Year</option>*/}
            {/*                <option value="2">Past Two Years</option>*/}
            {/*            </Select>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div  className="flex border">*/}
            {/*        <div  className="headerText">Purchased from</div>*/}
            {/*        <div>*/}
            {/*            <Select onChange={handleChange} value="2" style={{ width: 120 }}>*/}
            {/*                <option value="2">All</option>*/}
            {/*                <option value="0">In-Store</option>*/}
            {/*                <option value="1">Online</option>*/}
            {/*            </Select>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div  className="flex">*/}
            {/*        <div  className="headerText">Sort by</div>*/}
            {/*        <div>*/}
            {/*            <Select value="asc" style={{ width: 160 }}>*/}
            {/*                <option value="asc">Date(Newest First)</option>*/}
            {/*                <option value="desc">Date(Oldest First)</option>*/}
            {/*            </Select>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div  className="flex">*/}
            {/*        <div  className="headerText">Sort by</div>*/}
            {/*        <div>*/}
            {/*            <Select value="asc" style={{ width: 160 }}>*/}
            {/*                <option value="asc">Price($ - $$$)</option>*/}
            {/*                <option value="desc">Price($$$ - $)</option>*/}
            {/*            </Select>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Flex alignItems="center">
                <InputGroup size="md" w="30rem" margin="8">
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Search2Icon color="gray.300" />}
                    />
                    <Input  placeholder="Search Orders"/>
                </InputGroup>

                <Button rightIcon={<ArrowForwardIcon />} colorScheme="#000" variant="outline" onClick={onOpen}>
                    Filters
                </Button>

                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    initialFocusRef={firstField}
                    onClose={onClose}
                >
                    <DrawerOverlay>
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader borderBottomWidth="1px">
                                Filters
                            </DrawerHeader>

                            <DrawerBody>
                                <Stack spacing="24px">
                                    <Box>
                                        Purchased within
                                    </Box>
                                    <RadioGroup>
                                        <Stack>
                                            <Flex justify="space-between">
                                                <Radio value="1">
                                                    Last Six Months
                                                </Radio>
                                                <Box>10</Box>
                                            </Flex>
                                            <Flex justify="space-between">
                                                <Radio value="2">Last Nine Months</Radio>
                                                <Box>10</Box>
                                            </Flex>
                                            <Flex justify="space-between">
                                                <Radio value="3">Last Year</Radio>
                                                <Box>10</Box>
                                            </Flex>
                                            <Flex justify="space-between">
                                                <Radio value="4">Last Two Year</Radio>
                                                <Box>10</Box>
                                            </Flex>
                                        </Stack>
                                    </RadioGroup>
                                    <Divider orientation="horizontal"/>
                                    <Box>
                                        <FormLabel htmlFor="owner">Purchased within</FormLabel>
                                        {/*defaultValue="segun"*/}
                                        <Select placeholder="Select option" onChange={handleChange} value="2">
                                            <option value="2">All</option>
                                            <option value="0">In-Store</option>
                                            <option value="1">Online</option>
                                        </Select>
                                    </Box>
                                    <Divider orientation="horizontal"/>
                                    <Box>
                                        <FormLabel htmlFor="owner">Sort by</FormLabel>
                                        {/*defaultValue="segun"*/}
                                        <Select value="asc">
                                            <option value="asc">Date(Newest First)</option>
                                            <option value="desc">Date(Oldest First)</option>
                                        </Select>
                                    </Box>
                                </Stack>
                            </DrawerBody>

                            <DrawerFooter borderTopWidth="1px">
                                <Button variant="outline" mr={3} onClick={onClose}>
                                    Clear All
                                </Button>
                                <Button colorScheme="blue">View Results</Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>


            </Flex>
            <div>
                {
                    data.content.map((item, index) => {
                        return (
                            <Accordion  key={ index } margin="4" allowMultiple style={{background:'#fff', border:'#000', borderLeft: '1px solid #000', borderRight: '1px solid #000'}}>

                                <AccordionItem>
                                    {({ isExpanded }) => (
                                        <>

                                            <Box style={{display: 'flex',  justifyContent: "space-between", width: '100%'}}>
                                                <AccordionButton>
                                                    <Box>
                                                        <Flex>
                                                            {isExpanded ? (
                                                                <Flex    w="100px" justify="center" alignItems="center">
                                                                    <NowMinusIcon fontSize="16px"/>
                                                                </Flex>

                                                            ) : (
                                                                <Flex    w="100px" justify="center" alignItems="center">
                                                                    <NowAddIcon fontSize="16px" />
                                                                </Flex>
                                                            )}
                                                            <Stat w="200px">
                                                                <StatHelpText>order Date</StatHelpText>
                                                                <StatNumber fontSize="20px">{item.paymentTransactions[0].createdTime}</StatNumber>
                                                            </Stat>
                                                            <Stat  w="150px">
                                                                <StatHelpText>Order Number</StatHelpText>
                                                                <StatNumber fontSize="20px">{item.paymentTransactions[0].parentOrderNumber}</StatNumber>
                                                            </Stat>
                                                            <Stat  w="150px">
                                                                <StatHelpText>Order Status</StatHelpText>
                                                                <StatNumber fontSize="20px">{item.paymentTransactions[0].status}</StatNumber>
                                                            </Stat>
                                                            <Stat  w="150px">
                                                                <StatHelpText>Order Tatal</StatHelpText>
                                                                <StatNumber fontSize="20px">{item.paymentTransactions[0].requestAmount}</StatNumber>
                                                            </Stat>
                                                        </Flex>
                                                    </Box>
                                                </AccordionButton>
                                                <ReceiptImages></ReceiptImages>

                                            </Box>

                                            <AccordionPanel>

                                                {
                                                    item.subOrders.map((sitem, index) => {
                                                        return (
                                                            <Suborders sitem={ sitem }></Suborders>
                                                        );
                                                    })
                                                }

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
