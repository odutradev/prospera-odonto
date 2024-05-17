import React, { useState, useEffect } from 'react';

import { Box, Typography, Grid, Paper, Button } from '@mui/material';

import spaceAction from '../../actions/space'; 
import serviceAction from '../../actions/service';
import Layout from '../../components/layout';

const Dashboard = () => {
  const [spaces, setSpaces] = useState([]);
  const [serviceLength, setServiceLength] = useState(0);

  const getSpaces = async () => {
      const response = await spaceAction.get();
      setSpaces(response);
      const servicePromises = response.map(space => serviceAction.get({ space: space._id }));
      const serviceResponses = await Promise.all(servicePromises);
      const totalServices = serviceResponses.reduce((acc, curr) => acc + curr.length, 0);
      setServiceLength(totalServices);
  };

  useEffect(() => {
    getSpaces();
  }, []);


  return (
    <Layout>
      <Box sx={{ padding: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">Espaços Criados</Typography>
              <Typography variant="h4">{spaces && spaces.length}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">Procedimentos criados</Typography>
              <Typography variant="h4">{serviceLength}</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 4, textAlign: 'center' }}>
          <Button variant="contained" color="primary" sx={{ marginRight: 2 }} onClick={() => window.location.href = "/dashboard/space/create"}>
            Criar Novo Espaço
          </Button>
          <Button variant="contained" color="secondary" sx={{ marginRight: 2 }}  onClick={() => window.location.href = "/dashboard/service/create"}>
            Criar Novo Procedimento
          </Button>

        </Box>
      </Box>
    </Layout>
  );
};

export default Dashboard;
