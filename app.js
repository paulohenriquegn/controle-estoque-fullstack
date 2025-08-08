app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Sistema de Estoque</title>
        <style>
          body { background-color: #f0f0f0; font-family: Arial; text-align: center; padding: 50px; }
          h1 { color: #2c3e50; }
        </style>
      </head>
      <body>
        <h1>📦 Bem-vindo ao Sistema de Estoque!</h1>
        <p>Use <strong>/api/produtos</strong> ou <strong>/api/fornecedores</strong> para acessar os endpoints.</p>
      </body>
    </html>
  `);
});
