const User = require('../models/user');
const BadRequest = require('../errors/BadRequest');
const NotFound = require('../errors/NotFound');

const createUser = (req, res, next) => {
  const { name, avatar, about } = req.body;
  User.create({ name, avatar, about })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest(`Ошибка ${err.name}, Переданы некорректные данные при создании пользователя.`));
      } else {
        next(err);
      }
    });
};

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      next(err);
    });
};

const getUser = (req, res, next) => {
  const { userId } = req.params;
  User.findById(userId)
    .then((user) => {
      if (!user) {
        throw new NotFound(`Ошибка ${NotFound.name},Пользователь по указанному _id не найден.`);
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequest('Передан некорректный id'));
        return;
      }
      next(err);
    });
};

const updateUser = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        throw new NotFound(`Ошибка ${NotFound.name},Пользователь с указанным _id не найден.`);
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest(`Ошибка ${err.name}, Переданы некорректные данные при обновлении профиля.`));
      } else {
        next(err);
      }
    });
};

const updateUserAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        throw new NotFound(`Ошибка ${NotFound.name},Пользователь с указанным _id не найден.`);
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest(`Ошибка ${err.name}, Переданы некорректные данные при обновлении профиля.`));
      } else {
        next(err);
      }
    });
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  updateUserAvatar,
};
