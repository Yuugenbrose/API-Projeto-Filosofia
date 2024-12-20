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

    POST /api/auth/login
        Login de um usuário.
        Corpo JSON:
        
                                   {
       "username": "filosofo1",
       "password": "senhaSegura123"
           }

Usuários

    POST /api/users/admin
        Criação de um novo administrador. (Requer token de administrador)
        Corpo JSON:

                                    {
          "username": "admin2",
          "password": "senhaSegura123"
           }

    DELETE /api/users/:id

          Exclusão de um usuário não administrador. (Requer token de administrador)

    PUT /api/users/:id
          Atualização de dados de um usuário. (Requer token)

Resumos

    POST /api/resumos
   
       Cadastro de um novo resumo. (Requer token)
       Corpo JSON:
                                                                                                 {
          "titulo": "Pensamentos de Sócrates",
          "conteudo": "Sócrates acreditava que a sabedoria vem do reconhecimento da própria ignorância."
            }

    GET /api/resumos
       Listagem de resumos com paginação.
       Parâmetros de query:
           limite (opções: 5, 10, 30)
           pagina

    GET /api/resumos/:id
       Busca de um resumo por ID.

    PUT /api/resumos/:id
       Atualização de um resumo. (Requer token)
       Corpo JSON:
                                        {
          "titulo": "Novo Título",
          "conteudo": "Novo conteúdo do resumo."
            }

    DELETE /api/resumos/:id
       Exclusão de um resumo. (Requer token)

##Instalação e Documentação

    GET /install
        Criação de um usuário administrador padrão.

    GET /docs
        Documentação da API gerada pelo Swagger.

##Tratamento de Erros
A API utiliza middlewares para tratamento de erros e respostas padronizadas.
