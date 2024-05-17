import React, { useState, useEffect } from 'react';

import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import serviceAction from '../../actions/service'; 
import spaceAction from '../../actions/space';
import Layout from '../../components/layout';

const Services = () => {
  const [notSpace, setNotSpace] = useState(false);
  const [services, setServices] = useState([]);
  const [space, setSpace] = useState();

  const getServices = async () => {
    var spaceID = localStorage.getItem("space");
    var spaces = await spaceAction.get();
    if (!spaceID) return setNotSpace(true);
    var findSpace = spaces.find(item => item._id == spaceID);
    setSpace(findSpace)
    var response = await serviceAction.get({space: spaceID});
    console.log(response)
    setServices(response)
  };

  useEffect(() => {
    getServices();
  }, []);

  const handleCreateService = () => {
    window.location.href = "/dashboard/service/create";
  };

  const handleRowClick = (id) => {
    window.location.href = "/dashboard/service/" + id;
  };

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleCreateService} sx={{ mb: 2 }}>
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
              {services.map((service) => (
                <TableRow key={service._id} hover style={{ cursor: 'pointer' }} onClick={() => handleRowClick(service._id)}>
                  <TableCell>{service.data.name}</TableCell>
                  <TableCell>{service.data.description}</TableCell>
                  <TableCell>{new Date(service.date).toLocaleDateString()}</TableCell>
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
