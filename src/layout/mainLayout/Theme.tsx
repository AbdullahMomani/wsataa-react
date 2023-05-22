import styled, { css } from "styled-components";

export const Main = styled.main<any>`
  ${(props) => 
    props.isLoginPage ? css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #4BBF7A;
    ` 
    : 
    css`
    height: 100%;
    width:100%;
    `

  }

  }

`;
