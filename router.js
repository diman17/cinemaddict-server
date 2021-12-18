const { Router } = require('express');
const filmsController = require('./films-controller');

const router = new Router();

router.get('/films', filmsController.getFilmsAll);

router.get('/films/:filmId', filmsController.getFilmById);

router.post('/films', filmsController.createFilm);

router.put('/films/:filmId', filmsController.updateFilm);

router.get('/films/:filmId/comments', filmsController.getFilmsCommentsAll);

router.get('/films/:filmId/comments/:commentId', filmsController.getFilmsCommentById);

router.post('/films/:filmId/comments', filmsController.createComment);

router.delete('/films/:filmId/comments/:commentId', filmsController.deleteFilmsCommentById);

module.exports = router;
