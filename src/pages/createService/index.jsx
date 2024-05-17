import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Box, TextField, Button, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

import serviceAction from '../../actions/service';
import Layout from '../../components/layout';
import userAction from '../../actions/user';
import space from '../../actions/space';

const CreateService = () => {
  const [service, setService] = useState({
    dentistPaidInPercentage: true,
    anotherDentist: false,
    paymentType: "pix",
    procedureTime: 0,
    materialPrice: 0,
    description: "",
    dentistValue: 0,
    value: 0,
    name: ""
  });

  const [user, setUser] = useState();

  const handleCreate = async () => {
    var space = localStorage.getItem("space");
    const send = async () => {
      var response = await serviceAction.create({space, author: user._id, data: service});
      if (response.error) throw new Error(response.error);
      return setTimeout(() => { window.location.href = "/dashboard/services" }, 500);
    }
    toast.promise(send(), {
      pending: `Criando serviço`,
      success: `Serviço criado com sucesso`,
      error: `Erro ao criar serviço`
    });
  };

  const getUser = async () => {
    var response = await userAction.me();
    setUser(response);
  };

  useEffect(() => {
    getUser()
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
          maxWidth: 600,
          margin: '0 auto',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Criar Novo Serviço
        </Typography>
        
        <TextField
          label="Nome"
          name="name"
          value={service.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Descrição"
          name="description"
          value={service.description}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <TextField
          label="Valor (R$)"
          name="value"
          type="number"
          value={service.value}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Tempo de Procedimento (horas)"
          name="procedureTime"
          type="number"
          value={service.procedureTime}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="paymentType-label" shrink>
            Tipo de Pagamento
          </InputLabel>
          <Select
            labelId="paymentType-label"
            id="paymentType"
            name="paymentType"
            value={service.paymentType}
            onChange={handleChange}
            label="Tipo de Pagamento"
          >
            <MenuItem value="pix">Pix</MenuItem>
            <MenuItem value="cartao">Cartão</MenuItem>
            <MenuItem value="dinheiro">Dinheiro</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Preço do Material especifico (R$)"
          name="materialPrice"
          type="number"
          value={service.materialPrice}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="anotherDentist-label" shrink>
            Outro Dentista
          </InputLabel>
          <Select
            labelId="anotherDentist-label"
            id="anotherDentist"
            name="anotherDentist"
            value={service.anotherDentist}
            onChange={handleChange}
            label="Outro Dentista"
          >
            <MenuItem value={true}>Sim</MenuItem>
            <MenuItem value={false}>Não</MenuItem>
          </Select>
        </FormControl>
          {
            service.anotherDentist && (
              <FormControl fullWidth margin="normal">
              <InputLabel id="dentistPaidInPercentage-label" shrink>
                Dentista Pago em Porcentagem
              </InputLabel>
              <Select
                labelId="dentistPaidInPercentage-label"
                id="dentistPaidInPercentage"
                name="dentistPaidInPercentage"
                value={service.dentistPaidInPercentage}
                onChange={handleChange}
                label="Dentista Pago em Porcentagem"
              >
                <MenuItem value={true}>Sim</MenuItem>
                <MenuItem value={false}>Não</MenuItem>
              </Select>
            </FormControl>
            )
          }
          {
            !service.dentistPaidInPercentage && (
              <TextField
              label="Valor do Dentista (R$)"
              name="dentistValue"
              type="number"
              value={service.dentistValue}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            )
          }
        <Button variant="contained" color="primary" onClick={handleCreate} sx={{ mt: 2 }}>
          Criar Serviço
        </Button>
      </Box>
    </Layout>
  );
};

export default CreateService;
