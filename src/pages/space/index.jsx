import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Box, TextField, Button, Typography, Card, CardContent, Grid, Stack } from '@mui/material';

import spaceAction from '../../actions/space'; 
import Layout from '../../components/layout';

const Space = () => {
  const [loading, setLoading] = useState(true);
  const [spaces, setSpaces] = useState([]);
  const [space, setSpace] = useState([]);
  const { id } = useParams();

  const getSpaces = async () => {
    var response = await spaceAction.get();
    setSpaces(response)
    var findSpace = response.find(item => item._id == id);
    setSpace(findSpace);
    setLoading(false)
  };

  useEffect(() => {
    getSpaces();
  }, []);

  const handleUpdate = async () => {
    const send = async () => {
        var response = await spaceAction.update({id: space._id, data: space});
        if (response.error) throw error;
        return setTimeout(() => { window.location.href = "/dashboard/spaces" }, 500);
      }
      toast.promise(send(), {
        pending: `Atualizando tabela`,
        success: `Tabela atualizado com sucesso`,
        error: `Erro ao atualizar tabela`
      })
  };

  const handleDelete = async () => {
    const send = async () => {
        var response = await spaceAction.remove({id: space._id});
        if (response.error) throw error;
        return setTimeout(() => { window.location.href = "/dashboard/spaces" }, 500);
      }
      toast.promise(send(), {
        pending: `Apagando Tabela`,
        success: `Tabela apagado com sucesso`,
        error: `Erro ao apagar Tabela`
      })
  };

  return (
    <Layout loading={loading}> 
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
          Minha Tabela
        </Typography>
        
        <Card sx={{ width: '100%', mb: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" color="textSecondary">Data de Registro:</Typography>
                <Typography variant="body1">{new Date(space.date).toLocaleDateString()}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <TextField
          label="Nome"
          value={space.name}
          onChange={(e) => setSpace({ ...space, name: e.target.value })}
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: !!space.name }}
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
          InputLabelProps={{ shrink: !!space.description }}
        />
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Apagar
          </Button>
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Salvar
          </Button>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Space;
