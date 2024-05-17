import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import serviceAction from '../../actions/service'; 
import spaceAction from '../../actions/space';
import Layout from '../../components/layout';

const Services = () => {
  const [notSpace, setNotSpace] = useState(false);
  const [services, setServices] = useState([]);
  const [space, setSpace] = useState();
  const [config, setConfig] = useState({
    tax: 0,
    cardChange: 0,
    materialTime: 0,
    valueTime: 0,
    dentistValue: 0,
    annualCapital: 0
  });

  const getServices = async () => {
    var spaceID = localStorage.getItem("space");
    var spaces = await spaceAction.get();
    if (!spaceID) return setNotSpace(true);
    var findSpace = spaces.find(item => item._id == spaceID);
    setSpace(findSpace)
    setConfig(findSpace.config)
    var response = await serviceAction.get({space: spaceID});
    setServices(response)
  };

  useEffect(() => {
    getServices();
  }, []);

  const handleCreateService = () => {
    window.location.href = "/dashboard/service/create";
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
    var response = await spaceAction.update({id: space._id, data: { config: { ...config, [name]: value }}});
  };

  const handleRowClick = (id) => {
    window.location.href = "/dashboard/service/" + id;
  };

  const formatCurrency = (number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
  };

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Taxa (%)"
              name="tax"
              type="number"
              value={config.tax}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Taxa do Cartão (%)"
              name="cardChange"
              type="number"
              value={config.cardChange}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Material hora (R$)"
              name="materialTime"
              type="number"
              value={config.materialTime}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Valor hora (R$)"
              name="valueTime"
              type="number"
              value={config.valueTime}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Porcentagem do Dentista (%)"
              name="dentistValue"
              type="number"
              value={config.dentistValue}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Custo Capital Anual (%)"
              name="annualCapital"
              type="number"
              value={config.annualCapital}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleCreateService} sx={{ mt: 2 }}>
          Criar Serviço
        </Button>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Data de Criação</TableCell>
                <TableCell>Preço (R$)</TableCell>
                <TableCell>Tempo do procedimento (h)</TableCell>
                <TableCell>Tipo de pagamento</TableCell>
                <TableCell>Material Específico (R$)</TableCell>
                <TableCell>Valor Dentista (R$)</TableCell>
                <TableCell>Imposto (R$)</TableCell>
                <TableCell>Encargo Cartão (R$)</TableCell>
                <TableCell>Custo Capital (R$)</TableCell>
                <TableCell>Custo Operacional (R$)</TableCell>
                <TableCell>Margem Lucro (R$)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((service) => {

                var value = service.data.value;
                var tax = service.data.paymentType != "dinheiro" ? value * (config.tax / 100) : 0;
                var cardChange = service.data.paymentType == "cartao" ?  value * (config.cardChange / 100) : 0;
                var annualCapital = service.data.paymentType == "cartao" ?  value * (config.annualCapital / 100) : 0;

                var dentistValue = 0;
                if (service.data.anotherDentist){
                  if (service.data.dentistPaidInPercentage){
                    dentistValue = (value - tax) * (config.dentistValue / 100)
                  } else {
                    dentistValue = service.data.dentistValue;
                  }
                }
                var total = tax + cardChange + annualCapital + dentistValue;
                var operationalValue = value - total;

                return (
                  <TableRow key={service._id} hover style={{ cursor: 'pointer' }} onClick={() => handleRowClick(service._id)}>
                    <TableCell>{service.data.name}</TableCell>
                    <TableCell>{new Date(service.date).toLocaleDateString()}</TableCell>
                    <TableCell>{formatCurrency(service.data.value)}</TableCell>
                    <TableCell>{service.data.procedureTime}</TableCell>
                    <TableCell>{service.data.paymentType}</TableCell>
                    <TableCell>{formatCurrency(service.data.materialPrice)}</TableCell>
                    <TableCell>{formatCurrency(dentistValue)}</TableCell>
                    <TableCell>{formatCurrency(tax)}</TableCell>
                    <TableCell>{formatCurrency(cardChange)}</TableCell>
                    <TableCell>{formatCurrency(annualCapital)}</TableCell>
                    <TableCell>{formatCurrency(total)}</TableCell>
                    <TableCell>{formatCurrency(operationalValue)}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Services;
