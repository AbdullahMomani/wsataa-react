import styled from "styled-components";
import { TableContainer } from "@mui/material";

// Styled components
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 20px;
`;

export const StyledTableContainer = styled(TableContainer)`
  margin-top: 20px;
  width: 80%;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  & .Mui-selected {
    background-color: #4bbf7a !important;
  }
`;

export const WrapperForm = styled.div`
  height: 500px;
  display:flex;
  align-items:center;
  && div{
    border: none;
    box-shadow:none;
  }
`;
export const ButtonWrapper = styled.div`
  display:flex;
  justify-content:end;
  && button{
    background-color:#4BBF7A;
    color: white;
  }
`;
