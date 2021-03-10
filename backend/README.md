# Maxxidata Challenge v0.1.0 [Backend]

❗️**WARNING!** Este projeto está em estágio ALPHA, algum _BREAKING CHANGE_ pode aparecer.

# Tecnologias utilizadas :computer:

- **PostgreSQL**: banco de dados relacional, open source. Um dos melhores, se não, o melhor SGBD open source que existe;
- **Docker-compose**: para orquestração de de imagens de docker numa única máquina;
- **Node.js**: _requsitado no desafio_
  - **Sequelize**: para abstração dos modelos de dados gerenciados no banco de dados;
  - **Dotenv**: para carregamento de variáveis de ambiente na etapa de desenvolvimento;
  - **Express**: fazer o roteamento _estilo on rails_ de chamada de rotas/middlewares;
- **Eslint**: para orientação e correção de padrões estéticos;
- **Make**: para executar tasks não voltadas para o ambiente javascript;
- **Redis** (em andamento...): para realização de cache das rotas de consulta;
- **JWT** (em andamento...): para autenticação por uso de tokens;
- **JEST** (em andamento...): para realização de testes automatizados;
- **Faker** (em andamento...): para dados *mockados* para o ambiente de testes;
- **Supertest** (em andamento...): para realizar testes nos *endpoints* da API REST;

# Getting Started

## Requisitos e comandos

### Para _Development_ mode

- Node.js v12+

- NPM v6+

- Docker;

- Docker-compose;

  ```bash
  $ docker-compose up -d
  $ npm run dev
  ```

### Para _Stage_/_Production_ mode

- Docker;

- Docker-compose;

  ```bash
  $ docker-compose -f docker-compose.stage.yml up -d --build
  ```

# API

## Rotas

### Tipos de Funcionários

:large_blue_circle: `GET /employee-types`

Retorno: HTTP 200

```json
[
  {
    "id": "156c09cc-0e95-4df7-a1b3-5400da20f8eb",
    "descricao": "...",
    "situacao": "true",
    "createdAt": "2021-03-10T19:45:20.284Z",
    "updatedAt": "2021-03-10T19:45:20.284Z",
    "deletedAt": null
  },
  {
    "id": "48b8a36c-090a-4af5-a0e3-c8011d1d57a1",
    "descricao": "...",
    "situacao": "true",
    "createdAt": "2021-03-10T19:45:22.096Z",
    "updatedAt": "2021-03-10T19:45:22.096Z",
    "deletedAt": null
  }
]
```

:large_blue_circle: `GET /employee-types/:id`

Retorno: HTTP 200

```json
{
  "id": "156c09cc-0e95-4df7-a1b3-5400da20f8eb",
  "descricao": "...",
  "situacao": "true",
  "createdAt": "2021-03-10T19:45:20.284Z",
  "updatedAt": "2021-03-10T19:45:20.284Z",
  "deletedAt": null
}
```

:large_blue_circle: `POST /employee-types`

Corpo da requisição:

```json
{
  "descricao": "...",
  "situacao": true
}
```

Retorno: HTTP 201

```json
{
  "id": "48b8a36c-090a-4af5-a0e3-c8011d1d57a1",
  "descricao": "...",
  "situacao": "true",
  "updatedAt": "2021-03-10T19:45:22.096Z",
  "createdAt": "2021-03-10T19:45:22.096Z",
  "deletedAt": null
}
```

:large_blue_circle: `PATCH /employee-types/:id`

Corpo da requisição:

```json
{
  "descricao": "..."
}
```

Retorno: HTTP 200

```json
[ 
    {
      "id": "156c09cc-0e95-4df7-a1b3-5400da20f8eb",
      "descricao": "...",
      "situacao": "true",
      "createdAt": "2021-03-10T19:45:20.284Z",
      "updatedAt": "2021-03-10T19:49:24.488Z",
      "deletedAt": null
    }
]
```

:large_blue_circle: `DELETE /employee-types/:id`

Retorno: HTTP 204 (Sem conteúdo)

### Funcionários

:large_blue_circle: `GET /employees`

Retorno: HTTP 200

```json
[
  {
    "id": "87b36c6c-74da-470c-a263-2af51b978363",
    "nome": "Trace Predovic MD",
    "telefone": "###.###.#### x#####",
    "email": "Rey.Schmitt@gmail.com",
    "tipoDeProfissional": "48b8a36c-090a-4af5-a0e3-c8011d1d57a1",
    "situacao": true,
    "createdAt": "2021-03-10T19:53:26.881Z",
    "updatedAt": "2021-03-10T19:53:26.881Z",
    "deletedAt": null
  },
  {
    "id": "12d7c688-1259-404e-ade9-fe8ff8bcc5d4",
    "nome": "Dr. Mohammad Koepp",
    "telefone": "(###) ###-#### x###",
    "email": "Krista.Schaden31@gmail.com",
    "tipoDeProfissional": "48b8a36c-090a-4af5-a0e3-c8011d1d57a1",
    "situacao": false,
    "createdAt": "2021-03-10T19:54:36.279Z",
    "updatedAt": "2021-03-10T19:54:36.279Z",
    "deletedAt": null
  }
]
```

:large_blue_circle: ​`GET /employees/:id`

Retorno: HTTP 200

```json
{
  "id": "87b36c6c-74da-470c-a263-2af51b978363",
  "nome": "Trace Predovic MD",
  "telefone": "###.###.#### x#####",
  "email": "Rey.Schmitt@gmail.com",
  "tipoDeProfissional": "48b8a36c-090a-4af5-a0e3-c8011d1d57a1",
  "situacao": true,
  "createdAt": "2021-03-10T19:53:26.881Z",
  "updatedAt": "2021-03-10T19:53:26.881Z",
  "deletedAt": null
}
```

:large_blue_circle: ​`POST /employees`

Corpo da requisição:

```json
{
  "nome": "Dr. Mohammad Koepp",
  "telefone": "(###) ###-#### x###",
  "email": "Krista.Schaden31@gmail.com",
  "tipoDeProfissional": "48b8a36c-090a-4af5-a0e3-c8011d1d57a1",
  "situacao": false
}
```

Retorno: HTTP 201

```json
{
  "id": "12d7c688-1259-404e-ade9-fe8ff8bcc5d4",
  "nome": "Dr. Mohammad Koepp",
  "telefone": "(###) ###-#### x###",
  "email": "Krista.Schaden31@gmail.com",
  "tipoDeProfissional": "48b8a36c-090a-4af5-a0e3-c8011d1d57a1",
  "situacao": false,
  "updatedAt": "2021-03-10T19:54:36.279Z",
  "createdAt": "2021-03-10T19:54:36.279Z",
  "deletedAt": null
}
```

:large_blue_circle: ​`PATCH /employees/:id`

Corpo da requisição:

```json
{
  "nome": "Dr. Christopher Nolan",
  "email": "nolan@hollywood.com"
}
```

Retorno: HTTP 200

```json
[
    {
        "id": "87b36c6c-74da-470c-a263-2af51b978363",
        "nome": "James",
        "telefone": "###.###.#### x#####",
        "email": ".com",
        "tipoDeProfissional": "48b8a36c-090a-4af5-a0e3-c8011d1d57a1",
        "situacao": true,
        "createdAt": "2021-03-10T19:53:26.881Z",
        "updatedAt": "2021-03-10T19:57:25.393Z",
        "deletedAt": null
	}
]
```

:large_blue_circle: ​`DELETE /employees/:id`

Retorno: HTTP 204 (Sem conteúdo)
