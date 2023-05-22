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
import { Container, StyledTableContainer, PaginationContainer, WrapperForm } from "./Theme";
import { BasicModal, Form } from "../../../sharedComponents";
import useModal from "../../../hooks/useModal";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { citiesAPI, offersAPI, orderOfferDetailsAPI, ordersAPI, usersAPI } from "../../../services/apis";
import { HttpsHandler } from "../../../sharedComponents/httpHandler";
import { ModalContent } from "../modalContent";
import { formatDate } from "../../../utils/date";
import DeleteIcon from "@mui/icons-material/Delete";
import { SUCCESS_STATUS } from "../../../constants";



const user = ["Email", "Gender", "Info", "IsBlocked", "Phone"];
const offers = ["Name", "Description", "Guess Price",  "IsActive" ,"Limit Price"];
const orders = ["Name", "Description", "Price From",  "IsActive" ,"Price To"];
const cities = ["Name", "Created At", "Delete"];

const formData = {
  row: {
    row1: [
      {
        tag: "input",
        type: "text",
        name: "city",
        label: "City",
      },
    ],
  },
};

interface Info {
  title: string;
  data: any;
  selectedItem: string | undefined;
  setCurrentPage: any;
  currentPage: number;
}

const AllListItems = ({
  title,
  data,
  selectedItem,
  setCurrentPage,
  currentPage,
}: Info) => {
  const [result, getResult] = useState<any>({});
  const [open, handleOpen, handleClose] = useModal();
  const itemsPerPage = 10;
  const dispatch = useDispatch<any>();

  const { entities, loading, error } = useSelector<any>((state) => {
    return {
      entities:state?.orderOfferDetails.entities,
      loading: state?.orderOfferDetails.loading,
      error: state?.orderOfferDetails.error,
    };
  }) as any;
  useEffect(() => {
    if (Object.values(result)?.length > 0) {
      (async ()=>{
        const {payload} = await dispatch(citiesAPI.addCity()({name: result?.city}))
        if(SUCCESS_STATUS.includes(payload?.status)){
          dispatch(
            citiesAPI.getCitiesList()({
              urlParams: `?page=${currentPage}&perPage=10&name=`,
            }))
        }
      })()
    }
  }, [result]);

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
    if (selectedItem == "1"){
      const data = {
        id: id,
        isBlocked: status,
      };
      dispatch(usersAPI.blockOrUnblockUser()({ data }));
    }else if(selectedItem == "2"){
      const data = {
        id: id,
        isActive: status,
      };
      dispatch(ordersAPI.activateOrder()({ data }));
    }else if(selectedItem == "3"){
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
  const handleOrderAndOfferDetails = (id: string)=>{
    dispatch(orderOfferDetailsAPI.getOrdersOrOfferDetails()({urlParams : selectedItem == '2' ? `order/details?orderId=${id}` : `offer?offerId=${id}`}))
    openModal()
  }
  const onDeleteCity = async (id: string)=>{
    const {payload} = await dispatch(citiesAPI.deleteCity()({id:id}))
    if(SUCCESS_STATUS.includes(payload?.status)){
      dispatch(
        citiesAPI.getCitiesList()({
          urlParams: `?page=${currentPage}&perPage=10&name=`,
        }))
    }
  }
  //  onClick={() => openModal(user?.id as string)}orderOfferDetailsAPI
  
  return (
    <>
      <Typography variant="h5">{title}</Typography>
      <Container>
        <StyledTableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <>
                  {selectedItem == "1" &&
                    user.map((item, idx) => {
                      return <TableCell key={idx}>{item}</TableCell>;
                    })}
                  {selectedItem == "2" &&
                    orders.map((item, idx) => {
                      return <TableCell key={idx}>{item}</TableCell>;
                    })}
                  {selectedItem == "3" &&
                    offers.map((item, idx) => {
                      return <TableCell key={idx}>{item}</TableCell>;
                    })}
                  {selectedItem == "4" &&
                    cities.map((item, idx) => {
                      return <TableCell key={idx}>{item}</TableCell>;
                    })}
                </>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* handle users */}
              {data?.usersList?.map((user: any) => (
                <TableRow key={user.id}>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>
                    {user.info}
                  </TableCell>
                  <TableCell>
                    <Switch
                      defaultChecked={user.isBlocked}
                      onChange={(event: any) =>
                        handleSwitchChange(event as any, user?.id as string)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    {user.phone}
                  </TableCell>
                </TableRow>
              ))}
              {/* handle orders */}
              {data?.orderList?.map((user: any) => (
                <TableRow key={user.id}>
                  <TableCell onClick={()=>handleOrderAndOfferDetails(user.id as string)}>{user.name}</TableCell>
                  <TableCell onClick={()=>handleOrderAndOfferDetails(user.id as string)}>{user.adDescription}</TableCell>
                  <TableCell onClick={()=>handleOrderAndOfferDetails(user.id as string)}>
                    {user.priceFrom}
                  </TableCell>
                  <TableCell>
                    <Switch
                      defaultChecked={user.isActive}
                      onChange={(event: any) =>
                        handleSwitchChange(event as any, user?.id as string)
                      }
                    />
                  </TableCell>
                  <TableCell onClick={()=>handleOrderAndOfferDetails(user.id as string)}>
                    {user.priceTo}
                  </TableCell>
                </TableRow>
              ))}
             {/* handle offers */}
              {data?.offerList?.map((offer: any) => (
                <TableRow key={offer.id}>
                  <TableCell onClick={()=>handleOrderAndOfferDetails(offer.id as string)}>{offer.name}</TableCell>
                  <TableCell onClick={()=>handleOrderAndOfferDetails(offer.id as string)}>{offer.adDescription}</TableCell>
                  <TableCell onClick={()=>handleOrderAndOfferDetails(offer.id as string)}>
                    {offer.guessPrice}
                  </TableCell>
                  <TableCell>
                    <Switch
                      defaultChecked={offer.isActive}
                      onChange={(event: any) =>
                        handleSwitchChange(event as any, offer?.id as string)
                      }
                    />
                  </TableCell>
                  <TableCell onClick={()=>handleOrderAndOfferDetails(offer.id as string)}>
                    {offer.limitPrice}
                  </TableCell>
                </TableRow>
              ))}
             {/* handle cities */}
              {data?.cityList?.map((city: any) => (
                <TableRow key={city.id}>
                  <TableCell >{city.name}</TableCell>
                  <TableCell >{formatDate(city.createdAt)}</TableCell>
                  <TableCell>
                    <DeleteIcon style={{cursor:"pointer"}} onClick={()=>onDeleteCity(city.id)}/>
                  </TableCell>
                </TableRow>
              ))}
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

        {selectedItem == "4" && <WrapperForm ><Form autoComplete="off" getResult={getResult} formData={formData} title={"Add City"} /></WrapperForm>}

        <BasicModal open={open} handleClose={handleClose}>
          <HttpsHandler loading={loading} entities={entities} error={error}>
                <ModalContent entities={entities?.order || entities?.offer } type={entities?.order  ? 'order' : entities?.offer ? 'offer' : undefined}/>
          </HttpsHandler>
        </BasicModal>
      </Container>
    </>
  );
};

export { AllListItems };
