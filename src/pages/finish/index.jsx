import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Container, Box, Users } from "./styles";
import Button from "../../components/button";
import ProgressBar from "../../components/progressBar";

import api from "../../services/api"; 
const Finish = () => {
  
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const classe = localStorage.getItem("class");

  const userClass = classe;


  const createUser = async () => {
    try {
      for (const name of users) { 
        const responseCheckUser = await api.get("user/admin");

        if (responseCheckUser.data.some((user) => user.name === name)) {
          return;
        }
        const newUser = {
          userClass: userClass,
          name: name,
        };

        await api.post("user/admin/create-user", newUser);
        console.log("funcionou fi")
      }
      localStorage.removeItem("users");
      localStorage.removeItem("class");
      location.assign("/");
    } catch (error) {
      console.log(error)
    }
  };
    
  return (
    <Layout onLayout={(x) => x.setBackgroundPadding(false)}>
      <Container>
        <ProgressBar currentStep="2" />
        <Box>
          <h1>{classe || "Turma indefinida"}</h1>
          <Users>
            {users.map((user, index) => (
              <p key={index}>{user}</p>
            ))}
          </Users>
          <Button name="finalizar" onAction={ createUser }/>
        </Box>
      </Container>
    </Layout>
  );
};

export default Finish;
