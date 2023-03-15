import React from 'react'
import styled, { css } from 'styled-components';

const PrimitiveButton = ({ children, rightSlot, ...restProps }) => {
    return (
      <StyledButton {...restProps}>
        {rightSlot ? (
          <ButtonInner>
            <>{children}</>
            <>{rightSlot}</>
          </ButtonInner>
        ) : (
          <>{children}</>
        )}
      </StyledButton>
    );
  };

const HomeButton = (props) => {
    return (
        <PrimitiveButton {...props}
        bc = "transparent"
        color = "rgb(16, 58, 47)"
        bd = "1px solid rgb(69, 168, 143)"
        mt = "20px"
        />
    );
};

const Home = HomeButton;
const Button = {Home} ;
export default Button;

const StyledButton = styled.button`
  cursor : pointer;
  background-color: ${({ bc }) => bc};
  color: ${({ color }) => color};
  border: ${({bd}) => bd};
  font-size: ${({fs})=>fs};
  margin-top: ${({mt})=>mt};
  padding: ${({pd})=>pd};

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          height: 100px;
          width: 700px;
        `;
      case "medium":
        return css`
          height: 45px;
          width: 700px;
        `;
      default:
        return css`
          height: 40px;
          width: 700px;
        `;
    }
  }}
`;

const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;