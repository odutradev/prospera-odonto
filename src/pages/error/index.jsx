import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 3,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '6rem', mb: 2 }}>
        4<ErrorOutlineIcon sx={{ fontSize: '5rem' }} />4
      </Typography>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Oops! Essa pagina nao existe.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<HomeIcon />}
        onClick={() => window.location.href = '/'}
        sx={{ textTransform: 'none' }}
      >
        Volte para pagina inicial
      </Button>
    </Box>
  );
};

export default NotFoundPage;
