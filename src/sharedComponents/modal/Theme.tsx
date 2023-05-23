import styled, { css } from "styled-components";
import Box from "@mui/material/Box";

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 400px;
  box-shadow: none;
  border: none;
  padding: 16px;
  min-height: 500px;
  border-radius: 20px;
`;
