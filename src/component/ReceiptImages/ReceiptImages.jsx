
import { useDisclosure } from "@chakra-ui/react"
import axios from 'axios'
import {
    Box,
    Button,
    Center,
    Heading,
    Flex,
    Modal,
    ModalContent,
    ModalBody,
} from "@chakra-ui/react"
import "antd/dist/antd.css";

import qr from '../../images/qrcode.png';
import './ReceiptImages.styles';
import {
    Content,
    Top,
    ModelMyContent
} from './ReceiptImages.styles';

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

export default function ReceiptImages(props) {

   const { isOpen, onOpen, onClose } = useDisclosure()

  return (

      <Box   w="200px"  style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
          <Button onClick={onOpen}>View Receipt Images</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                  {/*<ModalCloseButton />*/}
                  <ModelMyContent>
                  <ModalBody  >
                      <Content>
                          <Center pt="80px">
                              <span>STORE  </span>
                              <span>{ lists.store}</span>
                              <span>{ lists.store1}</span>
                          </Center>
                          <Center  padding={1}>
                              SHOPPING CENTER NAME
                          </Center>
                          <Center  padding={1}>
                              {lists.num}
                          </Center>
                          <Center  padding={1}>
                              {lists.num1}
                          </Center>
                          <Center  padding={2}>
                              <span>REWARDS NUMBER:</span>
                              <span>{lists.number}</span>
                          </Center>
                          <img src={qr} alt=""/>
                      </Content>
                      <Flex justify="space-between"  pt={2}>
                          <Box>00000 SALE</Box>
                          <Box>54321</Box>
                          <Box>098765</Box>
                          <Box>98766661</Box>
                          <Box>{lists.time}</Box>
                      </Flex>
                      <Flex justify="space-between" pt={1} pb={1}>
                          <Box>PRODUCT NAME</Box>
                          <Box>1111111111</Box>
                          <Box>$1600.00</Box>
                      </Flex>
                      <Flex  justify="space-between">
                          <Box></Box>
                          <Box>1@$1500.00</Box>
                          <Box>$1500.00</Box>
                      </Flex>
                      <Center  pt={1} pb={1}>
                          <Heading  as="h6" size="xs"> YOU SAVED $100.00</Heading>
                      </Center>
                      <Flex  justify="space-between"  pt={1} pb={1}>
                          <Heading  as="h6" size="xs">SUBTOTAL</Heading>
                          <Heading  as="h6" size="xs">{lists.money1}</Heading>
                      </Flex>
                      <Flex  justify="space-between">
                          <Heading  as="h6" size="xs">SALES TAX 8.25%</Heading>
                          <Heading  as="h6" size="xs">{lists.money2}</Heading>
                      </Flex>
                      <Flex  justify="space-between"  pt={1} pb={1}>
                          <Heading  as="h6" size="xs">TOTAL</Heading>
                          <Heading  as="h6" size="xs">{lists.money3}</Heading>
                      </Flex>
                      <Flex  justify="space-between"  pt={5}>
                          <Box>ACCOUNT NUMBER</Box>
                          <Box>{lists.money5}</Box>
                      </Flex>
                      <Flex  justify="space-between">
                          <Box>MASTERCARD</Box>
                          <Box>{lists.money6}</Box>
                      </Flex>
                      <Box pt={4}>
                          Proin hendrerit magna augue, ac feugiat lorem tempus at.
                          Suspendisse egestas tempor tortor in lacinia. Phasellus
                          pharetra tortor at enim lobortis, pretium fermentum
                          magna sodales. Proin blandit sapien vel velit ormare,
                          et blandit turpis luctus. Donec iaculis seem
                          non ligula actor condimentum.
                      </Box>

                  </ModalBody>
                  </ModelMyContent>
              </ModalContent>
          </Modal>
      </Box>
  );
}
