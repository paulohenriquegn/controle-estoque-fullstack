const express = require('express');
const app = express(); // ← Esta linha é ESSENCIAL!

// Rotas devem vir DEPOIS desta definição
app.get('/', (req, res) => {
  res.send('Sistema de Estoque Funcionando!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
