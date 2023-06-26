const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const userRoutes = require('./routes/userRoutes');
const cardRoutes = require('./routes/cardRoutes');

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use((req, res, next) => {
  req.user = {
    _id: '6498e8f4d396dfb7273f27a6',
  };

  next();
});

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/cards', cardRoutes);

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? 'Ошибка сервера' : message,
  });
  console.log(`${err.statusCode} ${err.name}`);
  next();
});

app.listen(3000, () => {
  console.log('Сервер запущен');
});
