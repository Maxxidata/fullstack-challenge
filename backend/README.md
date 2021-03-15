# Maxxidata FullsTack Challenge

# Tecnologias utilizadas

- **PostgreSQL**: Banco de dados SQL;
- **Node.js**: v14.15.4
  - **Sequelize**: ORM para construção, modelagem e manipulação do banco de dados;
  - **Express**:Framework para aplicações web super flexível e robusto;

## Requisitos e comandos para funcionar na sua máquina

É necessário ter um banco postgres rodando no localhost, de preferência na porta 5432

- Node.js v12+

```bash
  $ yarn
```

```bash
  $ yarn sequelize db:migrate
```

```bash
  $ yarn dev:server
```

# API

## Rotas

### Tipos de Profissionais

:large_blue_circle: `GET /types-of-professionals`

Retorno: HTTP 200

```json
[
  {
    "id": "ec6c1f19-ca13-494b-b6fb-237276de69dc",
    "description": "DESENVOLVEDOR FULL STACK",
    "createdAt": "2021-03-10T18:32:05.616Z",
    "updatedAt": "2021-03-11T17:38:16.685Z",
    "type": [
      {
        "id": "c770b7a4-0db0-4a5b-9efd-c6039af4684f",
        "name": "Franklin",
        "phone": "92 1122-3344"
      }
    ]
  }
]
```

:large_blue_circle: `GET /types-of-professionals/:id`

Retorno: HTTP 200

```json
{
  "id": "ec6c1f19-ca13-494b-b6fb-237276de69dc",
  "description": "DESENVOLVEDOR FULL STACK",
  "createdAt": "2021-03-10T18:32:05.616Z",
  "updatedAt": "2021-03-11T17:38:16.685Z",
  "type": [
    {
      "id": "c770b7a4-0db0-4a5b-9efd-c6039af4684f",
      "name": "Franklin"
    }
  ]
}
```

:large_blue_circle: `POST /types-of-professionals`

Corpo da requisição:

```json
{
  "type_of_professional": "...",
  "situacao": true
}
```

Retorno: HTTP 201

```json
{
  "id": "b7d3f658-4f70-4b0e-93b0-c31610fbf5de",
  "description": "ENGENHEIRO DE TESTES",
  "updatedAt": "2021-03-13T14:16:48.002Z",
  "createdAt": "2021-03-13T14:16:48.002Z"
}
```

:large_blue_circle: `PUT /types-of-professionals/:id`

Corpo da requisição:

```json
{
  "type_of_professional": "..."
}
```

Retorno: HTTP 200

```json
{
  "id": "b7d3f658-4f70-4b0e-93b0-c31610fbf5de",
  "description": "ENGENHEIRO DE TESTES",
  "updatedAt": "2021-03-13T14:16:48.002Z",
  "createdAt": "2021-03-13T14:16:48.002Z"
}
```

:large_blue_circle: `DELETE /types-of-professionals/:id`

Retorno: HTTP 204 (Sem conteúdo)

### Profissionais

:large_blue_circle: `GET /professionals`

Retorno: HTTP 200

```json
[
  {
    "id": "c770b7a4-0db0-4a5b-9efd-c6039af4684f",
    "name": "Franklin",
    "email": "franklin@gmail.com",
    "phone": "92 1122-3344",
    "situation": true,
    "createdAt": "2021-03-10T19:19:39.802Z",
    "updatedAt": "2021-03-10T20:17:33.992Z",
    "type_of_professional": "ec6c1f19-ca13-494b-b6fb-237276de69dc",
    "type": {
      "description": "DESENVOLVEDOR FULL STACK"
    }
  },
  {
    "id": "1be5fb78-33d5-4e70-94a9-ad57820e634e",
    "name": "Geovana",
    "email": "geo@email.com",
    "phone": "55 45952 8855",
    "situation": true,
    "createdAt": "2021-03-13T16:26:23.365Z",
    "updatedAt": "2021-03-13T16:26:23.365Z",
    "type_of_professional": "5943b984-b8cd-4191-ba76-108f8cc04a13",
    "type": {
      "description": "DESENVOLVEDOR MOBILE"
    }
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

:large_blue_circle: ​`POST /professionals`

Corpo da requisição:

```json
{
	"name": "Jefferson",
	"email": "jeff@gmail.com",
	"phone": "92 4545 4545",
	"type_of_professional": "engenheiro de testes",
	"situation": true
}
```

Retorno: HTTP 201

```json
{
  "id": "6ef889bb-7b1b-45c8-b19f-da6126fefd05",
  "name": "Jefferson",
  "email": "jeff@gmail.com",
  "phone": "92 4545 4545",
  "situation": true,
  "createdAt": "2021-03-13T17:45:22.767Z",
  "updatedAt": "2021-03-13T17:45:22.767Z",
  "type_of_professional": "b7d3f658-4f70-4b0e-93b0-c31610fbf5de",
  "type": {
    "description": "ENGENHEIRO DE TESTES"
  }
}
```

:large_blue_circle: ​`PUT /professionals/:id`

Corpo da requisição:

```json
{
	"name": "Franklin",
	"email": "franklin@gmail.com",
	"phone": "92 91122-3344",
	"type_of_professional": "FullStack",
	"situation": true
}
```

Retorno: HTTP 200

```json
{
  "id": "6ef889bb-7b1b-45c8-b19f-da6126fefd05",
  "name": "Franklin",
  "email": "franklin@gmail.com",
  "phone": "92 91122-3344",
  "situation": true,
  "createdAt": "2021-03-13T17:45:22.767Z",
  "updatedAt": "2021-03-13T17:45:22.767Z",
  "type_of_professional": "b7d3f658-4f70-4b0e-93b0-c31610fbf5de",
  "type": {
    "description": "FULLSTACK"
  }
}
```

:large_blue_circle: ​`DELETE /employees/:id`

Retorno: HTTP 204 (Sem conteúdo)