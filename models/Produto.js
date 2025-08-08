const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  codigoBarras: { type: String, unique: true },
  quantidade: { type: Number, default: 0 }
});

module.exports = mongoose.model('Produto', ProdutoSchema);
