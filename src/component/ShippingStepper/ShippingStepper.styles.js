import styled from '@emotion/styled/macro';

export const StepperContainer = styled.div`
  display: flex;
   justifyContent: space-between;
   width: 80%; 
   marginLeft: 50px;
}
`;

export const Title = styled.div`
  margin-top: 16px;
  margin-left: 40px;
`;
//
// export const RightIcon = styled(IconChevronRight)`
//   position: absolute;
//   top: 16px;
//   right: 40px;
// `;

export const ShippingItem = styled.div`
      flex: 1;
      position: relative;
       &::after {
       width: calc(100% - 18px);
       margin-left: 20px;
       display: inline-block;
       /* width: 100%; */
       height: 6px;
       background: ${(props) =>
       props.filled ? 'red' : 'grey'};
       border-radius: 1px;
       transition: background 0.3s;
       content: '';
       margin-top: 14px;
    }
`;


export const ShippingInfo = styled.div`
    position: absolute;
    top: 2px
    
`;

export const ShippingRad = styled.div`
    width: 28px;
    height:28px;
    border-radius: 50%;
    background: ${(props) =>
    props.filled ? 'red' : 'grey'};
`;

export const ShippingRight = styled.div`
    position: absolute;
    top: 2px;
    right: 0;
    
`;

export const FloatRight = styled.div`
    width: 28px;
    height:28px;
    border-radius: 50%;
    background: ${(props) =>
    props.filled ? 'red' : 'grey'};
    float: right;
    margin-right: -5px;
    
`;

export const ShippingTop = styled.div`
    margin-top: 8px
`;

export const ShippingTopBottom = styled.div`
    margin-top: 38px;
    text-align: center;
`;

export const ShippingText = styled.div`
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
`;

export const ShippingIcon = styled.div`
    color: rgb(255, 255, 255);
    background: red;
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5px;
`;

export const ShippingIconRight = styled.div`
    color: rgb(255, 255, 255);
    background: red;
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5px;
    float: right;
    margin-right: -5px;
`;


