import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Container, Form, TextArea, Logo } from "./styles";
import Button from "../../components/button";
import ProgressBar from "../../components/progressBar";
import setAuthToken from "../../services/setAuthToken";
import api from "../../services/api"; 

const InsertUser = () => {
  
  const [user, setUser] = useState({ email: "carlosjosep@gmail.com", password: "12345678" });


    const Login = async () => {
      try {
        var response = await api.post("/user/signin", user);
        response = response.data;
        await setAuthToken(response.token);
        console.log(1)
      } catch (error) {
        console.log(error)
      }
    }
  

  async function sendUsers(usersText) {
    const users = userText
      .split(/[\n\t]+/)
      .map((user) => user.trim())
      .filter((user) => user !== "");
    const List = JSON.stringify(users);
    localStorage.setItem("users", List);
    window.location.assign("/insert-class");
  }

  const [userText, setUserText] = useState("");
  return (
    <Layout onLayout={(x) => x.setBackgroundPadding(false)}>
      <Container>
        <ProgressBar currentStep="0" />

        <Form>
          <Logo />
          <section>
            <label>Nome do(s) Usuário(s):</label>
            <TextArea
              onChange={(e) => setUserText(e.target.value)}
              placeholder="Anthony Lima,
    Benjamin Viana,
    Gabriel da Silva Costa,
    João Felipe Dutra,
    Pedro Sampaio da Silveira,
    Ravy Bispo Moreira,
    Saturn Viana"
            />
          </section>
          <Button name="avançar" onAction={async () => {
                await sendUsers(userText);
                await Login();
            }}  />
        </Form>
      </Container>
    </Layout>
  );
};

export default InsertUser;
