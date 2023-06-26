const userRoutes = require('express').Router();

const {
  createUser, getUsers, getUser, updateUser, updateUserAvatar,
} = require('../controllers/users');

userRoutes.post('/', createUser);
userRoutes.get('/', getUsers);
userRoutes.get('/:userId', getUser);
userRoutes.patch('/me', updateUser);
userRoutes.patch('/me/avatar', updateUserAvatar);

module.exports = userRoutes;
