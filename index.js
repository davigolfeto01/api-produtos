const express = require('express');
const app = express();

const PORT = 3000;

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, categoria: "Eletrônicos", estoque: 10 },
  { id: 2, nome: "Mouse", preco: 80, categoria: "Eletrônicos", estoque: 50 },
  { id: 3, nome: "Cadeira Gamer", preco: 900, categoria: "Móveis", estoque: 5 },
  { id: 4, nome: "Mesa", preco: 600, categoria: "Móveis", estoque: 8 },
  { id: 5, nome: "Teclado", preco: 150, categoria: "Eletrônicos", estoque: 20 }
];

app.get('/api/produtos', (req, res) => {
  let resultado = [...produtos];

  const { categoria, ordenar } = req.query;

  if (categoria) {
    resultado = resultado.filter(p =>
      p.categoria.toLowerCase() === categoria.toLowerCase()
    );
  }

  if (ordenar === 'asc') {
    resultado.sort((a, b) => a.preco - b.preco);
  } else if (ordenar === 'desc') {
    resultado.sort((a, b) => b.preco - a.preco);
  }

  res.json(resultado);
});

app.get('/api/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  res.json(produto);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
