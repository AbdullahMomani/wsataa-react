import styled from "styled-components";
import {
    TableContainer,
  } from '@mui/material';

// Styled components
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  & .Mui-selected{
    background-color: #E5FDD1 !important
}
`;