# API Filosofia e Esoterismo

Esta API permite o cadastro e gerenciamento de resumos de pensamentos filosóficos e esotéricos, com funcionalidades de autenticação de usuários e operações CRUD.

## Tecnologias Utilizadas

- Node.js
- Express
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- Swagger para documentação

## Configuração do Projeto

### Pré-requisitos

- Node.js instalado
- npm ou yarn

### Passos para Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/api-filosofia-esoterica.git
   cd api-filosofia-esoterica

2. Instale as dependências:
   ```bash
   npm install

3. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
   ```bash
   JWT_SECRET=secrettoken
   ADMIN_PASSWORD=admin123

4. Inicie o servidor:
   ```bash
   npm start

### Endpoints
Autenticação

    POST /api/auth/register
        Cadastro de um novo usuário.
        Corpo JSON:
           {
       "username": "filosofo1",
       "password": "senhaSegura123",
       "isAdmin": false
         }
