import React from 'react';

import { Box, CircularProgress, Typography } from '@mui/material';

const Loading = ({ showSpinner = true, message = "Loading..." }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 9999
      }}
    >
      {showSpinner && <CircularProgress />}
      <Typography variant="h6" sx={{ mt: 2 }}>
        {message}
      </Typography>
    </Box>
  );
};

export default Loading;
