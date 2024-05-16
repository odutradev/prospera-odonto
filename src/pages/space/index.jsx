import React, { useState, useEffect } from 'react';

import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import spaceAction from '../../actions/space'; 
import Layout from '../../components/layout';

const Space = () => {
  const [spaces, setSpaces] = useState([]);

  const getSpaces = async () => {
    var response = await spaceAction.get();
    setSpaces(response)
  };

  useEffect(() => {
    getSpaces();
  }, []);

  return (
    <Layout>

    </Layout>
  );
};

export default Space;
