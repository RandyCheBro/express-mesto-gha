const cardRoutes = require('express').Router();

const {
  createCard, getCards, deleteCard, addLike, deleteLike,
} = require('../controllers/cards');

cardRoutes.post('/', createCard);
cardRoutes.get('/', getCards);
cardRoutes.delete('/:cardId', deleteCard);
cardRoutes.put('/:cardId/likes', addLike);
cardRoutes.delete('/:cardId/likes', deleteLike);

module.exports = cardRoutes;
