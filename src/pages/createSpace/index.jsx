import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import Layout from '../../components/layout';
import spaceAction from '../../actions/space';
import userAction from '../../actions/user';
import { toast } from 'react-toastify';
const CreateSpace = () => {
  const [space, setSpace] = useState({ name: "", author: "", description: ""});

  const handleCreate = async () => {
    const send = async () => {
        var response = await spaceAction.create(space);
        if (response.error) throw error;
        return setTimeout(() => { window.location.href = "/dashboard/spaces" }, 500);
      }
      toast.promise(send(), {
        pending: `Criando espaço`,
        success: `Espaço criado com sucesso`,
        error: `Erro ao criar espaço`
      })
  };

  const getUser = async () => {
    var response = await userAction.me();
    setSpace({...space, author: response._id});
  };

  useEffect(() => {
    getUser();
  }, []);

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
          Criar Novo Espaço
        </Typography>
        
        <TextField
          label="Nome"
          value={space.name}
          onChange={(e) => setSpace({ ...space, name: e.target.value })}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Descrição"
          value={space.description}
          onChange={(e) => setSpace({ ...space, description: e.target.value })}
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" onClick={handleCreate} sx={{ mt: 2 }}>
          Criar Espaço
        </Button>
      </Box>
    </Layout>
  );
};

export default CreateSpace;
