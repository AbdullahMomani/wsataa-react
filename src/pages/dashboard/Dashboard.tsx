import React, { useEffect, useState } from "react";
import { DashaoardContainer, Sider, Content , LogoContainer } from "./Theme";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { AllListItems } from "../../components";

export const Dashboard = () => {
  const {id} = useParams<{ id: string }>();  
  const [selectedItem, setSelectedItem] = useState<string | undefined>(id);
  const navigate = useNavigate();

  useEffect(()=>{
    navigate(`/dashboard/${selectedItem}`)
  } , [selectedItem])

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <DashaoardContainer>
      <Sider variant="permanent" anchor="left">
        <LogoContainer>
          <img src="logo.png" alt="Logo" />
        </LogoContainer>
        <List>
          <ListItem
            button
            selected={selectedItem === "1"}
            onClick={() => handleItemClick("1")}
          >
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem
            button
            selected={selectedItem === "2"}
            onClick={() => handleItemClick("2")}
          >
            <ListItemText primary="Orders" />
          </ListItem>
        </List>
      </Sider>
      <Content>
        {selectedItem === "1" && (
          <>
          <AllListItems title={'Customers'} />
          
          </>
        )}
        {selectedItem === "2" && (
          <>
          <AllListItems title={'Orders'}/>
          </>
        )}
       
      </Content>
    </DashaoardContainer>
  );
};
