import styled from "styled-components";
import { Drawer } from "@mui/material";

export const DashaoardContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Sider = styled(Drawer)`
  height: 100%;
  background-color: #c9f4aa;
  width: 250px;
  & .MuiPaper-root {
    width: 250px;
    background-color: #4BBF7A;
  }
  & .Mui-selected {
    background-color: #f5f5f5;
  }
  & .MuiTypography-root{
    color: white;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;

  img {
    height: 70px;
    width:80px;
  }
`;
//
export const WrapperForm = styled.div`
  height: 500px;
  display:flex;
  align-items:center;
  && div{
    border: none;
    box-shadow:none;
  }
`;
