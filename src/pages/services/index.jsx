import React, { useState, useEffect } from 'react';

import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import serviceAction from '../../actions/service'; 
import Layout from '../../components/layout';

const Services = () => {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    var space = localStorage.getItem("space");
    console.log(space)
    var response = await serviceAction.get({space});
    console.log(response)
    //setServices(response)
  };

  useEffect(() => {
    getServices();
  }, []);

  const handleCreateSpace = () => {
    window.location.href = "/dashboard/space/create";
  };

  const handleRowClick = (id) => {
    window.location.href = "/dashboard/space/" + id;
  };

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleCreateSpace} sx={{ mb: 2 }}>
          Criar Serviço
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Data de Criação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((space) => (
                <TableRow key={space._id} hover onClick={() => handleRowClick(space._id)} style={{ cursor: 'pointer' }}>
                  <TableCell>{space.name}</TableCell>
                  <TableCell>{space.description}</TableCell>
                  <TableCell>{new Date(space.date).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Services;
