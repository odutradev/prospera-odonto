import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Button, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Card, Grid, CardContent} from '@mui/material';

import Layout from '../../components/layout';
import userAction from '../../actions/user';

const User = () => {
  const [selectedSpace, setSelectedSpace] = useState('');
  const [data, setData] = useState([]);
  const [user, setUser] = useState();
  const { id } = useParams();

  const getUser = async () => {
    var response = await userAction.me();
    setUser(response);
  };

  const getData = async () => {
    if (!id) return;
    var response = await userAction.getSpacesAndServices(id);
    setData(response);
  };

  useEffect(() => {
    getUser()
    getData();
  }, [id]);

  const handleChange = (event) => {
    console.log(selectedServices)
    setSelectedSpace(event.target.value);
  };

  const handleBackClick = () => {
    window.location.href = '/dashboard/admin/users'; 
  };

  const selectedServices = data.find(space => space.spaceID === selectedSpace)?.data || [];

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, width: '100%' }}>
        <Button variant="contained" color="secondary" onClick={handleBackClick} sx={{ mb: 2 }}>
          Voltar
        </Button>
        <Typography variant="h3" gutterBottom>
          {user?.name || "nome"} - {user?.email || "email"}
        </Typography>
        

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="select-space-label">Selecione uma tabela</InputLabel>
          <Select
            labelId="select-space-label"
            value={selectedSpace}
            onChange={handleChange}
            label="Selecione a tabela"
          >
            {data.map((space) => (
              <MenuItem key={space.spaceID} value={space.spaceID}>
                {space.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {selectedSpace && (
                  <Card sx={{ width: '100%', mb: 2 }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h6" color="textSecondary">Taxa de Imposto (%):</Typography>
                        <Typography variant="body1">{data.find(space => space.spaceID === selectedSpace)?.config.tax || 0}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" color="textSecondary">Taxa do Cartão (%):</Typography>
                        <Typography variant="body1">{data.find(space => space.spaceID === selectedSpace)?.config?.cardChange || 0}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" color="textSecondary">Material Hora (R$):</Typography>
                        <Typography variant="body1">{data.find(space => space.spaceID === selectedSpace)?.config?.materialTime || 0}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" color="textSecondary">Valor Hora Clinica (R$):</Typography>
                        <Typography variant="body1">{data.find(space => space.spaceID === selectedSpace)?.config?.valueTime || 0}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" color="textSecondary">Porcentagem do Dentista (%):</Typography>
                        <Typography variant="body1">{data.find(space => space.spaceID === selectedSpace)?.config?.dentistValue || 0}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" color="textSecondary">Custo Capital Anual (%):</Typography>
                        <Typography variant="body1">{data.find(space => space.spaceID === selectedSpace)?.config?.annualCapital || 0}</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
        )}
        {selectedSpace && (
          
          <Box sx={{ width: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Procedimentos na tabela: {data.find(space => space.spaceID === selectedSpace)?.name}
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Descrição</TableCell>
                    <TableCell>Valor (R$)</TableCell>
                    <TableCell>Tempo do Procedimento (h)</TableCell>
                    <TableCell>Tipo de Pagamento</TableCell>
                    <TableCell>Preço do Material (R$)</TableCell>
                    <TableCell>Dentista Recebe em %</TableCell>
                    <TableCell>Valor do Dentista (R$)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedServices.map((service) => (
                    <TableRow key={service._id}>
                      <TableCell>{service.data.name}</TableCell>
                      <TableCell>{service.data.description}</TableCell>
                      <TableCell>{service.data.value}</TableCell>
                      <TableCell>{service.data.procedureTime}</TableCell>
                      <TableCell>{service.data.paymentType}</TableCell>
                      <TableCell>{service.data.materialPrice}</TableCell>
                      <TableCell>{service.data.dentistPaidInPercentage ? 'Sim' : 'Não'}</TableCell>
                      <TableCell>{service.data.dentistValue}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default User;
