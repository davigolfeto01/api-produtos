API REST de Produtos com Node.js

Este projeto consiste no desenvolvimento de uma API REST criada para a disciplina, com o objetivo de simular o controle de um estoque de produtos. A aplicação foi construída utilizando Node.js junto com o framework Express, permitindo trabalhar conceitos básicos de back-end e requisições HTTP.

Funcionalidades

A API possui as seguintes funcionalidades principais:

Exibição de todos os produtos cadastrados
Consulta de um produto específico através do ID
Filtragem de produtos por categoria (como Eletrônicos e Móveis)
Organização dos produtos por preço, do menor para o maior
Tecnologias Utilizadas

Para o desenvolvimento do projeto, foram utilizadas as seguintes tecnologias:

Node.js (versão 24 ou superior)
Express
Postman (utilizado para realizar os testes da API)
Como Executar o Projeto

Para rodar o projeto na sua máquina, siga os passos abaixo:

No terminal, dentro da pasta do projeto, instale as dependências com:
npm install
Em seguida, inicie o servidor com:
node index.js

Após isso, o servidor estará funcionando no endereço:

http://localhost:3000
Endpoints para Testes

Com o servidor em execução, é possível testar os seguintes endpoints no Postman:

Listar todos os produtos:
GET http://localhost:3000/api/produtos
Buscar produto por ID (exemplo: ID 3):
GET http://localhost:3000/api/produtos/3
Filtrar produtos por categoria:
GET http://localhost:3000/api/produtos?categoria=Eletronicos
Ordenar produtos por preço:
GET http://localhost:3000/api/produtos?ordenar=preco
