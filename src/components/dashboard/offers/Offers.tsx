import React from 'react'
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


export const Offers = ({data ,handleSwitchChange , handleOrderAndOfferDetails }:any) => {
  return (
    <> 
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
      </>
  )
}