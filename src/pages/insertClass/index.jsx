import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Container, Users, Form, Input, Logo } from "./styles";
import Button from "../../components/button";
import ProgressBar from "../../components/progressBar";
import api from "../../services/api"; 

const InsertClass = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);
  
  const [classText, setClassText] = useState("");
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  function sendClass(classText) {
      localStorage.setItem("class", classText);
      window.location.assign("/finish");
  }

  return (
    <Layout onLayout={(x) => x.setBackgroundPadding(false)}>
      <Container>
        <ProgressBar currentStep="1" />
        <div>
          <Users>
            {users.map((user, index) => (
              <p key={index}>{user}</p>
            ))}
          </Users>

          <Form>
            <Logo />
            <div>
              <label>Turma dos Usuários:</label>
              <Input onChange={(e) => setClassText(e.target.value)} />
            </div>
            <Button name="avançar" onAction={() => sendClass(classText)} />
          </Form>
        </div>
      </Container>
    </Layout>
  );
};

export default InsertClass;
