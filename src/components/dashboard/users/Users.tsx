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


export const Users = ({data , handleSwitchChange}:any) => {
  return (
    <>
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
      </>
  )
}

