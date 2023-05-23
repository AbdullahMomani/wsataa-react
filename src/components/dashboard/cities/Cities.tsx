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
import { formatDate } from "../../../utils/date";
import DeleteIcon from "@mui/icons-material/Delete";

export const Cities = ({data , onDeleteCity}:any) => {
  return (
    <>
    {data?.cityList?.map((city: any) => (
                <TableRow key={city.id}>
                  <TableCell >{city.name}</TableCell>
                  <TableCell >{formatDate(city.createdAt)}</TableCell>
                  <TableCell>
                    <DeleteIcon style={{cursor:"pointer"}} onClick={()=>onDeleteCity(city.id)}/>
                  </TableCell>
                </TableRow>
              ))}
    </>
  )
}