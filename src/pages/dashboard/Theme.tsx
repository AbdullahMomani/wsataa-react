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
    background-color: #c9f4aa;
  }
  & .Mui-selected {
    background-color: #f5f5f5;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  padding: 5px 10px;
`;
