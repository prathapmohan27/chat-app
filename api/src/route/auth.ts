import express from 'express';

const route = express.Router();

route.post('', (req, res) => {
  res.send('Hello World!');
});

module.exports = route;
