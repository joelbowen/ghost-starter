const express = require('express');
const apiRoutes = express.Router();

apiRoutes.get('/test/1', function(req, res) {
  res.send('A custom route');
});

module.exports = apiRoutes;
