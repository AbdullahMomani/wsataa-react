import React from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Pagination,
    Typography,
  } from "@mui/material";
  import Switch from "@mui/material/Switch";


export const Orders = ({data , handleSwitchChange , handleOrderAndOfferDetails}:any) => {
  return (
    <>
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
    </>
  )
}