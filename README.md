![Logo](https://i.postimg.cc/qRXTZZ0z/logo-3.png)

[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/maxxidata/stack#stack)

- [Desafio FullStack :earth_americas: :computer: :iphone:](#desafio-fullstack-earth_americas-computer-iphone)
- [Contexto :game_die:](#contexto-game_die)
  - [Modelo de dados :memo:](#modelo-de-dados-memo)
    - [Tipo de profissional](#tipo-de-profissional)
    - [Profissional](#profissional)
  - [Requisitos funcionais :white_check_mark:](#requisitos-funcionais-white_check_mark)
    - [Backend :earth_americas:](#backend-earth_americas)
    - [Frontend :computer:](#frontend-computer)
    - [Mobile :iphone:](#mobile-iphone)
  - [Diferencial :crossed_swords:](#diferencial-crossed_swords)
  - [Requisitos não funcionais :cool:](#requisitos-não-funcionais-cool)
  - [Opcional - Requisitos avançados 	:grey_exclamation:](#opcional---requisitos-avançados-grey_exclamation)
- [Com o que nos preocupamos :dart:](#com-o-que-nos-preocupamos-dart)
- [FAQ :question:](#faq-question)

# Desafio FullStack :earth_americas: :computer: :iphone:

**Seja bem-vindo ao nosso desafio de desenvolvimento!** :raised_hands:

*Tenha certeza de ter lido todo o documento atentamente até o final e esclarecido as dúvidas com nosso time caso surja alguma.*

Esta é a proposta de um desafio que FullStack sinta-se a vontade para tentá-lo por completo, caso seu objetivo esteja focado em uma das duas funções Backend, Frontend ou Mobile fique a vontade para deixar o outros desafios de lado.

:rocket: Tudo certo!?  Então vamos lá! 


# Contexto :game_die:

Em todo aplicativo comercial temos um controle dos profissinais envolvidos no processo sejam usuários, responsáveis, gerentes, administradores, operadores, etc. Por isso um ponto importante de qualquer aplicação é permitir designarmos estas funções ou seja categorizar em tipos estes profissionais.  Ex.: ProfissionalAna = Médica, José = Professor... 

Vamos criar então uma aplicação que nos permita consultar, criar e editar essas informações e manter essa relação entre o profissional e seu tipo.

## Modelo de dados :memo:
### Tipo de profissional
```js
{
  "id": xxx,                  // ID 
  "descricao": "test",        // descricao do tipo *Obrigatório
  "situacao": true,           // situacao do cadastro *Obrigatório
  "updatedAt": "",            // data e hora ultima atualizacao *Obrigatório
  "createdAt": ""             // data e hora de cadastro *Obrigatório
}
```

### Profissional
```js
{
    "id": xxx,                   // ID
    "nome": "teste",             // Nome do profisisonal *Obrigatório
    "telefone": "(xx) xxxx",     // Telefone
    "email": "a@a.com",          // Endereço de e-mail do profissional
    "tipoDeProfissional": xxx,   // Vinculo com o tipo de profissional *Obrigatório
    "situacao": true,            // Situação do cadastro *Obrigatório
    "updatedAt": "",             // Data e hora da última atualização *Obrigatório
    "createdAt": ""              // Data e hora da de cadastro *Obrigatório
}
```

## Requisitos funcionais :white_check_mark:
### Backend :earth_americas:
- A API deve seguir as boas práticas e padrões de implementação REST
- Os dados deve ser salvos em um banco de dados
- Escrever os testes para o código e as APIs geradas
- Prover documentação para API. (Sugestão OpenAPI/Swagger)
- Use **Node.js** e qualquer outro framework
- Use **TypeScript**
- Use qualquer DB. PostgreSQL DB é a sugestão, sinta-se livre para usar qualquer outro.

### Frontend :computer:
** Se optar por realizar somente desafio frontend, utilize o modelo de dados proposto com algum mecanismo para gerar o Mock dos dados.
- Criar uma tela home com menu de acesso as funcionalidades
- Uma tela de listagem para cada uma das entidades
- Uma tela de cadastro para cada uma das entidades
- Implementar solução usando **ReactJS** ultima versão disponível
- Fique a vontade para utilizar bibliotecas de componentes de mercado ou criar os seus
- Utilize **TypeScript**

### Mobile :iphone:
- Também desenvolvemos soluções mobile e procuramos profissionais com essas habilidades e conhecimentos. 
- Caso queira ou seja solicitado a você desenvolva a aplicação mobile com os mesmos requisitos do Frontend, usando tecnologia **ReactNative**.

## Diferencial :crossed_swords:
- Documentação clara do código. Código comentado sempre é bom!
- Utilização do framework Nest.js.
- Boas mensagens de commit ajudam!

## Requisitos não funcionais :cool:
- Um arquivo README.md com o resumo de escolhas por frameworks, bibliotecas, banco de dados e como executar seu projeto.


## Opcional - Requisitos avançados 	:grey_exclamation:

Estes requisitos são opcionais no desafio, sinta-se a vontade para deixá-los de lado, a menos que seja solicitado que os cumpra!   

- Criar mecanismo completo de autenticação e autorização (authentication/authorization/etc.) , como OAuth.
- Criar mecanismo de log e auditoria (quando/como/quem etc.).
- Configuração Docker para build da imagem do projeto, docker compose para subir banco de dados com carga inicial necessaria (migrations, seeders).

# Com o que nos preocupamos :dart:
- Com certeza muito mais do que o desafio completo é avaliarmos suas competências e habilidades até o ponto em que chegou.
- Sabemos que nem todos temos o mesmo tempo disponível, então como dissemos fique a vontade para ir até onde conseguir ou solicitar mais tempo para o processo, transparência total.
- Sinta-se livre pra usar bibliotecas de código aberto se fizerem sentido, e lembre que avaliaremos sua capacidade de resolver problemas reais.
- Procuramos por código funcional e limpo
- Exemplos práticos de conhecimento em NodeJS e TypeScript e suas APIs padrões
- Orientação a testes 

# FAQ :question:
> Como devo fazer a entrega do desafio?

- Envie o link do seu repositório de código particular para quem te fez a solicitação de execução desse desafio.

> Se eu tiver dúvidas?
- Entre em contato com nosso time que esta te apoiando no processo seletivo ou pelo rh@maxxidata.com.

[Voltar ao topo](#desafio-fullstack-earth_americas-computer-iphone)
