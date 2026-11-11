const express = require('express');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensagem: 'API de pedidos funcionando' });
});

app.use('/pedidos', pedidoRoutes);

module.exports = app;