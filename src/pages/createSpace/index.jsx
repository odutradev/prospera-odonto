import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import Layout from '../../components/layout';
import spaceAction from '../../actions/space';

const CreateSpace = () => {
  const [space, setSpace] = useState({
    name: "",
    author: "",
    description: "",
    date: new Date().toISOString(),
    config: {
      tax: 0,
      cardChange: 0,
      materialTime: 0,
      valueTime: 0,
      dentistValue: 0,
      annualCapital: 0,
    }
  });

  const handleCreate = async () => {
    await spaceAction.create(space);
    window.location.href = "/dashboard/spaces";
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
          label="Autor"
          value={space.author}
          onChange={(e) => setSpace({ ...space, author: e.target.value })}
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
