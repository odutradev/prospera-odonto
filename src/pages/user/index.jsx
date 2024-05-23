import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Box, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';

import Layout from '../../components/layout';
import userAction from '../../actions/user'; 

const User = () => {
  const [user, setUsers] = useState([]);
  const { id } = useParams();

  const getUsers = async () => {
    var response = await userAction.get();
    setUsers(response);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
       
      </Box>
    </Layout>
  );
};

export default User;
