## visão geral da api de blog

esta api foi feita para aprimorar meu conhecimento de clean architecture e obtive bastante aprendizado.

## funcionalidades do sistema

- [x] criar um usuário.
- [x] logar o usuário gerando um token de acesso.
- [x] usuário pode criar posts
- [x] usuário pode apagar posts
- [x] usuário pode editar posts
- [x] usuário pode pegar um post pelo seu id
- [x] listar todos os posts de um usuário
- [x] usário pode pesquisar posts
- [x] usuário pode apagar sua conta [isso apagará seus posts também]
- [x] usuários relacionados a seus posts
- [x] adicionar comentários aos posts
- [x] apagar um comentário
- [x] pegar um comentário
- [x] editar um comemtário
- [x] listar todos os comentários de um post, se houver
- [ ] usuário pode adicionar tags aos posts
- [ ] usuário pode adicionar fotos em seus posts
- [ ] é possível ordenar posts por tags
- [ ] usuário pode adicionar categorias nos posts
- [ ] usuário pode ter um perfil
- [ ] usuário pode editar seu perfil
- [ ] usuário pode desativar sua conta
- [ ] usuário pode apagar sua conta
- [ ] usuário pode redefinir sua senha

tentei manter uma arquitetura legal e bem organizada, pretendo ir melhorando este projeto
pois foi algo que gostei de fazer, foquei bastante na estrutura de diretorios desta aplicação, foi a primeira vez que
organizei um projeto assim então se vc tiver alguma dica de melhoria não hesite em me chamar para conversarmos.
aqui no meu perfil tem todas as minhas redes socias.

## tecnologias ultilizadas neste projeto

- **node js**
- **typescript**
- **express**
- **eslint**
- **prettier**
- **commitlint**
- **husky**
- **prisma**
- **postgres**
- **postman**
- **jest**
- **git**
- **nginx**
- **github actions** (estou focado em aprender)

## rotas da aplicação

### endpoints de usuários

### `/user`

- **Método:** POST
- **Descrição:** cria um novo usuário no sistema
- **Parâmetros da Solicitação:**
  - `body`: name ,email , password
- **Exemplo de Resposta de Sucesso:**
- `status code 201`

  ```json
  {
    "msg": "user created successfully",
    "user": {
      "name": "nome do usuário"
      "email": "email usuário",
      "password": "hash da senha"
   }
  ```

### `/user/:id`

- **Método:** GET
- **Descrição:** pega um usuário pelo seu id
- **Parâmetros da Solicitação:**
  - `params`: id
- **Exemplo de Resposta de Sucesso:**
- `status code 200`

  ```json
  {
    "user": {
      "name": "nome do usuário"
      "email": "email usuário",
   },
  },
   "posts": [
   "id": "UUID",
   "title": "tittulo do post",
   "content": "conteudo do post",
   "createdAt": "2024-02-05T22:52:05.093Z",
   "updatedAt": "2024-02-05T22:52:05.093Z",
   "userId": "a5e1052b-b83c-4b98-8740-6171cbb9fe77",
  ]

  ```

## enpoints de post

### `/post`

- **Método:** POST
- **Descrição:** cria um novo post no sistema
- **Parâmetros da Solicitação:**
  - `body`: title, content, userId
- **Exemplo de Resposta de Sucesso:**
- `status code 201`

  ```json
  {
    "msg": "post created successfully"
    "post": {
    "id": "UUID",
    "title": "tittulo do post",
    "content": "conteudo do post",
    "createdAt": "2024-02-05T22:52:05.093Z",
    "updatedAt": "2024-02-05T22:52:05.093Z",
    "userId": "a5e1052b-b83c-4b98-8740-6171cbb9fe77",
  },

  ```

### `/post`

- **Método:** PUT
- **Descrição:** atualiza um post no sitema
- **Parâmetros da Solicitação:**
  - `body`: title, content, userId
- **Exemplo de Resposta de Sucesso:**
- `status code 201`

  ```json
  {
    "msg": "post has been updated successfully"
    "post": {
    "id": "UUID",
    "title": "tittulo do post atualizado",
    "content": "conteudo do post atualizado",
    "createdAt": "2024-02-05T22:52:05.093Z",
    "updatedAt": "2024-02-05T22:52:05.093Z",
    "userId": "a5e1052b-b83c-4b98-8740-6171cbb9fe77",
  },

  ```

### `/post/:id`

- **Método:** GET
- **Descrição:** pega um post pelo seu id
- **Parâmetros da Solicitação:**
  - `params`: id
- **Exemplo de Resposta de Sucesso:**
- `status code 200`

  ```json
  {
    "msg": "post found successfully"
    "post": {
    "id": "UUID",
    "title": "tittulo do post",
    "content": "conteudo do post",
    "createdAt": "2024-02-05T22:52:05.093Z",
    "updatedAt": "2024-02-05T22:52:05.093Z",
    "userId": "a5e1052b-b83c-4b98-8740-6171cbb9fe77",
  },
  ```

### `/post/:id`

- **Método:** DELETE
- **Descrição:** pega um post pelo seu id
- **Parâmetros da Solicitação:**
  - `params`: id
- **Exemplo de Resposta de Sucesso:**
- `status code 200`

  ```json
  {
    "msg": "this post has been deleted"
  },


  ```

## endpoints de comentários

### `/comment`

- **Método:** POST
- **Descrição:** adiciona um comentário a um post
- **Parâmetros da Solicitação:**
  - `body`: comment, postId
- **Exemplo de Resposta de Sucesso:**
- `status code 201`

  ```json
  {
    "user": {
      "name": "nome do usuário"
      "email": "email usuário",
   },
  },
   "posts": [
   "id": "UUID",
   "title": "tittulo do post",
   "content": "conteudo do post",
   "createdAt": "2024-02-05T22:52:05.093Z",
   "updatedAt": "2024-02-05T22:52:05.093Z",
   "userId": "a5e1052b-b83c-4b98-8740-6171cbb9fe77",
  ]

  ```

## endpoint de login

### `/login`

- **Método:** POST
- **Descrição:** autentica um usuário no sistema
- **Parâmetros da Solicitação:**
  - `body`: email, password
- **Exemplo de Resposta de Sucesso:**
- `status code 200`
  ```json
  {
   "msg": "Authentication successful",
    "user": {
      "name": "nome do usuário"
      "email": "email usuário",
      "password": "hash da senha"
   },
   "token": "token jwt"
  },
  ```

## modelagem dos dados (podem ocorrer alterações)

![modelagem](https://i.ibb.co/Gkzpm75/Screenshot-from-2024-02-03-16-29-57.png)

## entre em contato comigo (ficarei extremamente feliz)

- E-mail : hebertsantosdeveloper@gmail.com
- Linkedin: [@hebert santos](https://www.linkedin.com/in/hebert-santos-241429243/)
- portifolio : [clique aqui](https://ihebert.vercel.app/)
