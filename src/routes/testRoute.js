// routes/testRoute.js
const express = require('express');
const router = express.Router();

router.get('/exemplo', (req, res) => {
  res.send('Exemplo de rota funcionando corretamente!');
});

module.exports = router;
