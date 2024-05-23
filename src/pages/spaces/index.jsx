import React, { useState, useEffect } from 'react';

import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import spaceAction from '../../actions/space'; 
import Layout from '../../components/layout';

const Spaces = () => {
  const [spaces, setSpaces] = useState([]);

  const getSpaces = async () => {
    var response = await spaceAction.get();
    setSpaces(response)
  };

  useEffect(() => {
    getSpaces();
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
          Criar Tabela
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
              {spaces.map((space) => (
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

export default Spaces;
