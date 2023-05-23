import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
  Typography,
} from "@mui/material";
import {
  Container,
  StyledTableContainer,
  PaginationContainer,
  ButtonWrapper,
} from "./Theme";
import { BasicModal, Button, Form } from "../../../sharedComponents";
import useModal from "../../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import {
  citiesAPI,
  offersAPI,
  orderOfferDetailsAPI,
  ordersAPI,
  usersAPI,
} from "../../../services/apis";
import { HttpsHandler } from "../../../sharedComponents/httpHandler";
import { ModalContent } from "../modalContent";
import { SUCCESS_STATUS } from "../../../constants";
import { Users } from "../users";
import { Orders } from "../orders";
import { Offers } from "../offers";
import { Cities } from "../cities";

const user = ["Email", "Gender", "Info", "IsBlocked", "Phone"];
const offers = [
  "Name",
  "Description",
  "Guess Price",
  "IsActive",
  "Limit Price",
];
const orders = ["Name", "Description", "Price From", "IsActive", "Price To"];
const cities = ["Name", "Created At", "Delete"];

interface Info {
  title?: string;
  data: any;
  selectedItem: string | undefined;
  setCurrentPage: any;
  currentPage: number;
  openCitiesModal?:any;
}

const AllListItems = ({
  title,
  data,
  selectedItem,
  setCurrentPage,
  currentPage,
  openCitiesModal
}: Info) => {
  const [open, handleOpen, handleClose] = useModal();
  const itemsPerPage = 10;
  const dispatch = useDispatch<any>();

  const { entities, loading, error } = useSelector<any>((state) => {
    return {
      entities: state?.orderOfferDetails.entities,
      loading: state?.orderOfferDetails.loading,
      error: state?.orderOfferDetails.error,
    };
  }) as any;


  const calculateTotalPages = (totalCount: number) => {
    // Calculate the total number of pages based on totalCount
    if (!totalCount) return;
    if (totalCount % itemsPerPage === 0) {
      return totalCount / itemsPerPage;
    } else {
      return Math.floor(totalCount / itemsPerPage) + 1;
    }
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleSwitchChange = async (event: any, id: string) => {
    const status = event.target.checked;
    if (selectedItem == "1") {
      const data = {
        id: id,
        isBlocked: status,
      };
      dispatch(usersAPI.blockOrUnblockUser()({ data }));
    } else if (selectedItem == "2") {
      const data = {
        id: id,
        isActive: status,
      };
      dispatch(ordersAPI.activateOrder()({ data }));
    } else if (selectedItem == "3") {
      const data = {
        id: id,
        isActive: status,
      };
      dispatch(offersAPI.activateOffer()({ data }));
    }
  };

  const openModal = () => {
    handleOpen();
  };
  const handleOrderAndOfferDetails = (id: string) => {
    dispatch(
      orderOfferDetailsAPI.getOrdersOrOfferDetails()({
        urlParams:
          selectedItem == "2"
            ? `order/details?orderId=${id}`
            : `offer?offerId=${id}`,
      })
    );
    openModal();
  };
  const onDeleteCity = async (id: string) => {
    const { payload } = await dispatch(citiesAPI.deleteCity()({ id: id }));
    if (SUCCESS_STATUS.includes(payload?.status)) {
      dispatch(
        citiesAPI.getCitiesList()({
          urlParams: `?page=${currentPage}&perPage=10&name=`,
        })
      );
    }
  };
  const page =
    selectedItem == "1"
      ? user
      : selectedItem == "2"
      ? orders
      : selectedItem == "3"
      ? offers
      : selectedItem == "4"
      ? cities
      : undefined;
  return (
    <>
      <Typography variant="h5">{title}</Typography>
      {selectedItem == "4" && <ButtonWrapper><Button onClick={()=>openCitiesModal()} text={'Add City'}/></ButtonWrapper>}
      <Container>
        <StyledTableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {page?.map((item, idx) => {
                  return <TableCell key={idx}>{item}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* handle users */}
              <Users data={data} handleSwitchChange={handleSwitchChange} />
              {/* handle orders */}
              <Orders
                data={data}
                handleSwitchChange={handleSwitchChange}
                handleOrderAndOfferDetails={handleOrderAndOfferDetails}
              />
              {/* handle offers */}
              <Offers
                data={data}
                handleSwitchChange={handleSwitchChange}
                handleOrderAndOfferDetails={handleOrderAndOfferDetails}
              />
              {/* handle cities */}
              <Cities data={data} onDeleteCity={onDeleteCity} />
            </TableBody>
          </Table>
        </StyledTableContainer>
        <PaginationContainer>
          <Pagination
            count={calculateTotalPages(data?.totalCount)}
            page={currentPage}
            onChange={handleChangePage}
          />
        </PaginationContainer>

        {selectedItem != "4" && (
          <BasicModal open={open} handleClose={handleClose}>
            <HttpsHandler loading={loading} entities={entities} error={error}>
              <ModalContent
                entities={entities?.order || entities?.offer}
                type={
                  entities?.order
                    ? "Order"
                    : entities?.offer
                    ? "Offer"
                    : undefined
                }
              />
            </HttpsHandler>
          </BasicModal>
        )}
      </Container>
    </>
  );
};

export { AllListItems };
