import React, { useEffect, useState } from "react";
import { DashaoardContainer, Sider, Content, LogoContainer } from "./Theme";
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
import { useDispatch, useSelector } from "react-redux";
import {
  authAPI,
  usersAPI,
  offersAPI,
  ordersAPI,
  citiesAPI,
} from "../../services/apis";
import { Alert, Box, CircularProgress } from "@mui/material";
import { store } from "../../redux/store";
import { HttpsHandler } from "../../sharedComponents/httpHandler";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../../sharedComponents/assets/wesataa-logo.png";

export const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams<{ id: string }>();
  const [selectedItem, setSelectedItem] = useState<string | undefined>(id);
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const { signInInfo } = useSelector<any>((state) => {
    return {
      signInInfo: state?.admin.entities,
    };
  }) as any;
  const { entities, loading, error } = useSelector<any>((state) => {
    return {
      entities:
        selectedItem == "1"
          ? state?.users.entities
          : selectedItem == "2"
          ? state?.orders.entities
          : selectedItem == "3"
          ? state?.offers.entities
          : selectedItem == "4"
          ? state?.cities.entities
          : undefined,
      loading:
        selectedItem == "1"
          ? state?.users.loading
          : selectedItem == "2"
          ? state?.orders.loading
          : selectedItem == "3"
          ? state?.offers.loading
          : selectedItem == "4"
          ? state?.cities.loading
          : undefined,
      error:
        selectedItem == "1"
          ? state?.users.error
          : selectedItem == "2"
          ? state?.orders.error
          : selectedItem == "3"
          ? state?.offers.error
          : selectedItem == "4"
          ? state?.cities.error
          : undefined,
    };
  }) as any;
  const { deleteEntities, deleteError } = useSelector<any>((state) => {
    return {
      deleteEntities:state?.cities.entities,
      deleteError: state?.cities.error,
    };
  }) as any;
  console.log("deleteEntities",deleteEntities);
  
  useEffect(() => {
    if (signInInfo) {
      if (selectedItem == "1") {
        dispatch(
          usersAPI.getUsersList()({
            urlParams: `?page=${currentPage}&perPage=10&name=`,
          })
        );
      } else if (selectedItem == "2") {
        dispatch(
          ordersAPI.getOrdersList()({
            urlParams: `?page=${currentPage}&perPage=10&name=`,
          })
        );
      } else if (selectedItem == "3") {
        dispatch(
          offersAPI.getOffersList()({
            urlParams: `?page=${currentPage}&perPage=10&name=`,
          })
        );
      } else if (selectedItem == "4") {
        dispatch(
          citiesAPI.getCitiesList()({
            urlParams: `?page=${currentPage}&perPage=10&name=`,
          })
        );
      }
    }
  }, [selectedItem, signInInfo, currentPage]);

  useEffect(() => {
    navigate(`/wsataa-dasboard/dashboard/${selectedItem}`);
  }, [selectedItem]);

  const handleItemClick = (item: string) => {
    setCurrentPage(1);
    setSelectedItem(item);
  };
  const handleSignOut = () => {
    dispatch(authAPI.signOut()).then(navigate("/wsataa-dasboard"));
  };

  return (
    <DashaoardContainer>
      <Sider variant="permanent" anchor="left">
        <LogoContainer>
          <img src={Logo} alt="Logo" />
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
          <ListItem
            button
            selected={selectedItem === "3"}
            onClick={() => handleItemClick("3")}
          >
            <ListItemText primary="Offers" />
          </ListItem>
          <ListItem
            button
            selected={selectedItem === "4"}
            onClick={() => handleItemClick("4")}
          >
            <ListItemText primary="Cities" />
          </ListItem>
        </List>
        <LogoutIcon
          style={{
            cursor: "pointer",
            marginLeft: "10px",
            transform: `rotate(180deg)`,
          }}
          onClick={() => handleSignOut()}
        />
      </Sider>
      <Content>
        <HttpsHandler loading={loading} entities={entities} error={error}>
          <>
            <AllListItems
              data={entities}
              title={
                selectedItem == "1"
                  ? "Users"
                  : selectedItem == "2"
                  ? "Orders"
                  : selectedItem == "3"
                  ? "Offers"
                  : selectedItem == "4"
                  ? "Cities"
                  : ""
              }
              selectedItem={selectedItem}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </>
        </HttpsHandler>
        {/* {selectedItem === "2" && (
          <>
          <AllListItems title={'Orders'}/>
          </>
        )} */}
      </Content>
    </DashaoardContainer>
  );
};
