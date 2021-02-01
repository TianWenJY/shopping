import styled from '@emotion/styled/macro';
import {
    CloseButton
} from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'


export const Evaluation = styled.div`
  border: 2px solid #f0f0f0;
  border-radius: 5px;
  width: 500px;
}
`;

export const RadiusClose = styled(CloseButton)`
   background: #eee;
   border-radius: 50%;
   width: 24px;
   height: 24px;
}
`;

