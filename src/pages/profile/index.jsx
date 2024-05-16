import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Box, TextField, Button, Typography, Avatar, Card, CardContent, Grid } from '@mui/material';
import Layout from '../../components/layout';
import userAction from '../../actions/user';

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    contact: "",
    description: "",
    email: "",
    date: "",
  });

  const getUser = async () => {
    var response = await userAction.me();
    setUser({
      name: response.name || "",
      contact: response.contact || "",
      description: response.description || "",
      email: response.email || "",
      date: response.date || "",
      _id: response._id
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  const handleUpdate = async () => {
    const send = async () => {
        var response = await userAction.update({id: user._id, data: user});
        if (response.error) throw error;
        return getUser();
      }
      toast.promise(send(), {
        pending: `Atualizando usuario`,
        success: `Usuario atualizado com sucesso`,
        error: `erro ao atualizar usuario`
      })
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
        <Avatar sx={{ width: 80, height: 80, mb: 2 }}>
          {user.name && user.name.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="h4" gutterBottom>
          Meu Perfil
        </Typography>
        
        <Card sx={{ width: '100%', mb: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" color="textSecondary">Email:</Typography>
                <Typography variant="body1">{user.email}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" color="textSecondary">Data de Registro:</Typography>
                <Typography variant="body1">{new Date(user.date).toLocaleDateString()}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <TextField
          label="Nome"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: !!user.name }}
        />
        <TextField
          label="Contato"
          value={user.contact}
          onChange={(e) => setUser({ ...user, contact: e.target.value })}
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: !!user.contact }}
        />
        <TextField
          label="Descrição"
          value={user.description}
          onChange={(e) => setUser({ ...user, description: e.target.value })}
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          InputLabelProps={{ shrink: !!user.description }}
        />
        <Button variant="contained" color="primary" onClick={handleUpdate} sx={{ mt: 2 }}>
          Salvar
        </Button>
      </Box>
    </Layout>
  );
};

export default Profile;
