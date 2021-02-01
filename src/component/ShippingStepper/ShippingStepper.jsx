
            import React from 'react';
            import {
            StepperContainer,
            ShippingItem,
            ShippingInfo,
            ShippingRad,
            ShippingRight,
            FloatRight,
            ShippingTop,
            ShippingTopBottom,
            ShippingText,
            ShippingIcon,
            ShippingIconRight
            } from './ShippingStepper.styles';


            export default function ShippingStepper() {
            const step = 2;

            const data = [
            {
            name: "Order Precessed",
            time: "12/15/2021 11:58PM"
            },
            {
            name: "Order Shipped",
            time: "12/15/2021 11:58PM"
            }
            ,{
            name: "Out fer Deliver",
            time: "12/15/2021 11:58PM"
            }
            ]
            return (
            <StepperContainer>
            {
            data.map((item, index) => {
            return <ShippingItem filled={ step  > index + 1 }>
            <ShippingInfo>
                {

                    step  == index + 1 ? <ShippingIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width="35"
                             height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                             stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="9"/>
                            <path d="M9 12l2 2l4 -4"/>
                        </svg>
                    </ShippingIcon> : <ShippingRad filled={ step  > index}></ShippingRad>
                }
            <ShippingTop>
            {item.name}
            </ShippingTop>
            <ShippingText>
            {item.time}
            </ShippingText>
            </ShippingInfo>
                {
                    index == 2 ? <ShippingRight>
                        {

                            step  == 4  ? <ShippingIconRight>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width="35"
                                     height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="12" cy="12" r="9"/>
                                    <path d="M9 12l2 2l4 -4"/>
                                </svg>
                            </ShippingIconRight> : <FloatRight filled={ step > index+1 }></FloatRight>
                        }

                        <ShippingTopBottom>
                            Order Arrived
                        </ShippingTopBottom>
                        <ShippingText>
                            12/15/2021 11:29PM
                        </ShippingText>
                    </ShippingRight>: null

                }
            </ShippingItem>
            })
            }
            </StepperContainer>
            );
            }
