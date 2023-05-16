import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
  Typography
} from '@mui/material';
import {Container , StyledTableContainer , PaginationContainer} from './Theme'
import { BasicModal } from '../../../sharedComponents';
import useModal from '../../../hooks/useModal';

const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smit8h', email: 'jane.smith@exampl7e.com' },
  { id: 3, name: 'Jane Smi8t', email: 'jane.smith@exampl6e.com' },
  { id: 4, name: 'Jane Smit8h', email: 'jane.smith@examp6le.caaom' },
  { id: 5, name: 'Jane Smithaa', email: 'jane.smith@exam6ple.caaom' },
  { id: 6, name: 'Jane Smit12h', email: 'jane.smith@example.caaom' },
  { id: 7, name: 'Jane Smith2', email: 'jane.smith@example.coaam' },
  { id: 8, name: 'Jane Smithaaa', email: 'jane.smith@example.coaam' },
  { id: 8, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 10, name: 'Jane Smith32', email: 'jane.smith@example.com' },
  { id: 12, name: 'Jane Smit133h', email: 'jane.smith@example.com' },
  { id: 112, name: 'Jane Smit322h', email: 'jane.smith@example.com' },
  { id: 211, name: 'Jane Smith233', email: 'jane.smith@example.com' },
  { id: 122, name: 'Jane Smith322', email: 'jane.smith@example.com' },
  { id: 2223, name: 'Jane Smit223h', email: 'jane.smith@example.com' },
  { id: 2111, name: 'Jane Smit321h', email: 'jane.smith@example.com' },
  { id: 2, name: 'Jane Smit98h', email: 'jane.smith@example.com' },
  // Add more user data here
];

interface Info {
    title: string
}

const AllListItems = ({title}:Info) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, handleOpen, handleClose] = useModal();
  const itemsPerPage = 5;

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return users.slice(startIndex, endIndex);
  };
  const openModal = (id :any)=>{
    handleOpen()
  }

  return (
    <>
    <Typography variant="h5">{title}</Typography>
    <Container>
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell >ID</TableCell>
              <TableCell >Name</TableCell>
              <TableCell >Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getPageData().map((user) => (
              <TableRow key={user.id} onClick={() => openModal(user?.id as any)}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <PaginationContainer>
        <Pagination
          count={Math.ceil(users.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
        />
      </PaginationContainer>
      <BasicModal open={open} handleClose={handleClose}>
        <p> hiii </p>
        <p> hiii </p>
        <p> hiii </p>
        <p> hiii </p>
        <p> hiii </p>
        <p> hiii </p>
        </BasicModal> 
    </Container>
    </>
  );
};

export  {AllListItems};
