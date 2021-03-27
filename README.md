# Objetivo
Repositório destinado ao desafio proposto da Maxxidata
# Sobre o desenvolvimento
## Backend
### Escolhas
Para desenvolver o backend decidi utilizar NodeJS + Express pois já tenho uma certa familiaridade.

### Documentação
A documentação da API foi feita utilizando o *Swagger*. Para acessar a documentação, basta acessar o link `http://localhost:3333/api` quando a aplicação estiver em execução.

- Rotas 
  - Profissionais

  ![Rotas de Profissionais](readme-files/professional/routes.png)
  
  - Profissões
  
  ![Rotas de Profissionais](readme-files/professional-type/routes.png)

- Schemas 
  - Profissionais

  ![Rotas de Profissionais](readme-files/professional/schema.png)
  
  - Profissões

  ![Rotas de Profissionais](readme-files/professional-type/schema.png)

### Como executar?
Para executar o projeto:
- Ambiente de desenvolvimento
  - Usando Yarn: `yarn start`

## Frontend
Para desenvolver o frontend decidi utilizar o [ReactJS](https://reactjs.org/) + [Ant Design](https://ant.design/) pois já tenho uma certa familiaridade.

- Componentes
  - Tela de Início - `Home`
  - Cabeçalho - `Header`
  - Profissionais - `Professionals`
  - Tipos de Profissional ou Profissões - `ProfessionalTypes`
  - Profissional - Profissão (Criado apenas para mostrar a relação entre os dois componentes citados acima) - `ProfessionalProfessionalTypes` 

### Telas
- Home

  ![Página inicial](readme-files/home.png)

- Listar profissionais

  ![Listar profissionais](readme-files/professional/list.png)

- Cadastrar profissional

  ![Novo profissional](readme-files/professional/add.png)

- Editar profissional

  ![Nova profissisão](readme-files/professional/edit.png)

- Listar profissões

  ![Listar profissões](readme-files/professional-type/list.png)

- Cadastrar profissão

  ![Novo profissional](readme-files/professional-type/add.png)

- Editar profissão

  ![Nova profissisão](readme-files/professional-type/edit.png)

### Como executar?
Para executar o projeto:
- Basta executar o comando: `yarn start`