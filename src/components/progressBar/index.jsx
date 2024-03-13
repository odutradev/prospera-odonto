import React from 'react';
import { Container, ProgressStep, stepActive } from "./styles";

const ProgressBar = ({ currentStep }) => {
  return (
    <Container>
      <ProgressStep as={stepActive} data-title='cadastrar usuário' />
      <ProgressStep as={currentStep >= 1 ? stepActive : ''} data-title='cadastrar turma' />
      <ProgressStep as={currentStep >= 2 ? stepActive : ''} data-title='verificar usuários' />
    </Container>
  );
}

export default ProgressBar;
