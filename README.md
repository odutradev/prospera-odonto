# Sistema de cadastramento de alunos - Bonfire

Este site foi criado para alimentar o banco de dados, permitindo que o aplicativo e o site do Polivalente tenham acesso a esses dados, a fim de realizar a validação das informações dos alunos logo no primeiro acesso. É crucial esse sistema para que o processo de cadastro de alunos seja o mais ágil possível.

## Link do projeto

[Replit](https://2c1d3c8f-4234-4d13-9777-42fb1403b2b6-00-dq042n9wqcl1.riker.replit.dev/](https://8d6a979a-01bb-476a-b12f-267314d7cd0b-00-ho2drbeq1pxr.picard.replit.dev/))

[Protótipo - Figma](https://www.figma.com/file/JKlsxdKRmYsjFLwdrXgDXD/projeto-polivalente?type=design&node-id=1265-74&mode=design&t=IQkNr402pWf03Oe1-0)


## Usado por

Esse projeto é usado pelas seguintes empresas:

- Bonfire

O projeto em questão representa uma iniciativa de natureza privada integrante da entidade empresarial previamente mencionada. Sua principal operação envolve a comercialização de aplicativos destinados a outras empresas que decidem adquirir tais soluções tecnológicas. Nesse contexto apresentado, esse sistema é direcionado para o ramo de instituições educacionais. E, nesse caso, o cadastramento inicial de alunos é de responsabilidade do Bonfire. Portanto, visando agilizar esse procedimento de cadastramento, foi criado este site que suporta o cadastramento em massa e simultâneo, tornando essa tarefa mais ágil.



## Funcionalidades

- Cadastrar usuários
- Checagem de alunos antes de cadastrar
- Cadastramento de vários alunos numa mesma input
- Cadastramento de alunos em massa
- Separação de nomes em linha
- Necessidade de tocken para acessar as páginas
- Redirecionamento para página de erro, em caso de url incorreta
- Barra de progresso para acompanhar o preenchimento o formulário
- Alertas especificos para guiar os usuários



## Tecnologias

- react
- styled-components
- react-icons
- vite
- axios
- sweetalert2
- templete personalizado
- react-router-dom
- Replit



## Rotas do sistema de cadastramento

### Rota: /
Descrição: Essa rota é onde colocará o nome de todos os usuário da mesma sala ao mesmo tempo.

### Rota: /insert-class
Descrição: Nesta página, são exibidos todos os nomes dos alunos que você colocou na página anterior e nela você irá relacionar todos esses aluno à uma turma especifica.

### Rota: /finish
Descrição: Aqui, será possível vizualizar todos os alunos e a que turma eles fora relacionados, nisso você pode ver se há um erro e no fim clicar no botão para cadastra-los efim no banco de dados.


## Funcionalidades do templete 

- Vite configurado (build, port, .env, scripts)
- Theme Provider
- Global Styles
- Arquivo de configuração geral (title, baseURL)
- Rotas configuradas
- Rota de erro configurada
- Estrutura de pastas
- Instancia do axios
- 

## Autor do Template:

- [@darknx](https://github.com/darknx)



## Autores do sistema de cadastramento:

- [@Gabi-Viana](https://github.com/Gabi-Viana)
- [@adrianBonfire](https://github.com/adrianBonfire)



## Sistema de cadastramento pertencente à:

- [@Projeto-Bonfire](https://github.com/Projeto-Bonfire)