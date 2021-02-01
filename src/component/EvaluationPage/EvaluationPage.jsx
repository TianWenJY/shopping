
import React from 'react';
import {
    Box,
    Heading,
    Flex,
    CloseButton
} from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'

import {
    Evaluation,
    RadiusClose
} from './EvaluationPage.styles';


export default function EvaluationPage(props) {

    const close = () => {
        console.log(props.onClicked())
    }
  return (

        <Flex justify="flex-end">
          <Evaluation>
              <Flex justify="space-between" bg="grey" pl={2} pr ="2" pt={1} pb={1}>
                  <Box mt="-3px">
                      <Box d="flex" mt="2" alignItems="center">
                          {Array(5)
                              .fill("")
                              .map((_, i) => (
                                  <StarIcon
                                      key={i}
                                      color={i < 3 ? "teal.500" : "gray.300"}
                                  />
                              ))}
                      </Box>
                  </Box>
                  <RadiusClose onClick={close}></RadiusClose>
              </Flex>
              <Box padding={2}>
                  <Heading pb={2} as="h5" size="xs">Order History</Heading>
                  <Box maxW="3xl">
                      This is a convenient way for a buyer to keep track of all current
                      and past orders and their status in the order process. It allows
                      the buyer to get up-to-date information on each order placed online
                      , including shipping updates, delivery, and payment details.
                  </Box>
              </Box>
          </Evaluation>
      </Flex>
  );
}
