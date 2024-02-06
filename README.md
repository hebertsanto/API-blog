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
- [ ] criar um perfil com informações

tentei manter uma arquitetura legal e bem organizada, pretendo ir melhorando este projeto
pois foi algo que gostei de fazer, foquei bastante na estrutura de diretorios desta aplicação, foi a primeira vez que
organizei um projeto assim então se vc tiver alguma dica de melhoria não hesite em me chamar para conversarmos.
aqui no meu perfil tem todas as minhas redes socias.

## tecnologias ultilizadas neste projeto

- node js
- typescript
- express
- eslint
- prettier
- commitlint
- husky
- prisma
- postgres
- postman
- jest
- git
- github actions (estou focado em aprender)

## rotas da aplicação

### usuários

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
  }

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
      "password": "hash da senha"
   }
  }
  
## modelagem dos dados (podem ocorrer alterações)

![modelagem](https://i.ibb.co/Gkzpm75/Screenshot-from-2024-02-03-16-29-57.png)



## entre em contato comigo (ficarei extremamente feliz)

- E-mail : hebertsantosdeveloper@gmail.com
- Linkedin: [@hebert santos](https://www.linkedin.com/in/hebert-santos-241429243/)
- portifolio : [clique aqui](https://ihebert.vercel.app/)
