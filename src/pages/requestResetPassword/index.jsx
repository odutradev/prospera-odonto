import { toast } from 'react-toastify';
import * as React from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import userAction from '../../actions/user.js';

const RequestResetPassword = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var form = {
      email: data.get('email').toLowerCase()
    };
    var response = await userAction.requestResetPassword(form);
    if (response?.error) {
      return toast.error(response.error);
    }
    toast.success("Solicitação enviada!");
    setTimeout(() => { 
      window.location.href = '/';
    }, 2500)
  };

  return (
      <Container component="main" maxWidth="xs" sx={{ justifyContent: 'center'}}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center'
          }}
        >
          <Typography component="h1" variant="h5">
            Solicitar troca de senha!
          </Typography>
          <Typography variant="body2">
            Ao enviar uma solicitação, os responsaveis pela plataforma irão analisar a solicitação, e caso autorizado entrarão em contato com você!
          </Typography>
        </Box>
          <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ENVIAR SOLICITAÇÃO
            </Button>
          </Box>
        </Box>
      </Container>
  );
}

export default RequestResetPassword;