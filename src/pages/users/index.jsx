import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Box, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';

import Layout from '../../components/layout';
import userAction from '../../actions/user'; 

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const getUsers = async () => {
    var response = await userAction.get();
    setUsers(response);
  };

  const deleteUser = async (id) => {
    const send = async () => {
      var response = await userAction.remove({id});
      if (response.error) throw error;
      return setTimeout(() => { getUsers() }, 500);
    }
    toast.promise(send(), {
      pending: `Apagando usuario`,
      success: `Usuario apagado com sucesso`,
      error: `Erro ao apagar usuario`
    })
  };

  const blockUser = async (id, user) => {
    const send = async () => {
      var response = await userAction.update({id, data: {...user, role: "block"}});
      if (response.error) throw error;
      return setTimeout(() => { getUsers() }, 500);
    }
    toast.promise(send(), {
      pending: `Bloqueando usuario`,
      success: `Usuario bloqueado com sucesso`,
      error: `Erro ao bloquear usuario`
    })
  };

  const unlockUser = async (id, user) => {
    const send = async () => {
      var response = await userAction.update({id, data: {...user, role: "normal"}});
      if (response.error) throw error;
      return setTimeout(() => { getUsers() }, 500);
    }
    toast.promise(send(), {
      pending: `Desbloqueando usuario`,
      success: `Usuario desbloqueado com sucesso`,
      error: `Erro ao desbloquear usuario`
    })
  };

  const handleViewClick = (id) => {
    window.location.href = "/dashboard/admin/user/" + id;
  };

  useEffect(() => {
    getUsers();
  }, []);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(filter.toLowerCase()) || 
    user.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
        <TextField
          variant="outlined"
          label="Pesquisar"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          sx={{ mb: 2, width: '100%' }}
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Contato</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Data de Criação</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user._id} hover style={{ cursor: 'pointer' }}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.contact}</TableCell>
                  <TableCell>{user.description}</TableCell>
                  <TableCell>{user.role == "block" ? "bloqueado" : "acesso liberado"}</TableCell>
                  <TableCell>{new Date(user.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => deleteUser(user._id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => blockUser(user._id, user)}>
                      <BlockIcon />
                    </IconButton>
                    <IconButton onClick={() => unlockUser(user._id)}>
                      <CheckCircleOutlineIcon />
                    </IconButton>
                    <IconButton onClick={() => handleViewClick(user._id)}>
                      <VisibilityIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Users;
