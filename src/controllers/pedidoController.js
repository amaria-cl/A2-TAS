const pedidoService = require('../services/pedidoService');

function listar(req, res) {
  const pedidos = pedidoService.listar();
  res.status(200).json(pedidos);
}

module.exports = { listar };