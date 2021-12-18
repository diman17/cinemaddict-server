const { Router } = require("express");
const filmsController = require("./films-controller");

const router = new Router();

router.get("/films", filmsController.getFilmsAll);

router.post("/films", filmsController.createFilm);

router.get("/films/:filmId", filmsController.getFilmById);

router.get("/films/:filmId/comments", filmsController.getFilmsCommentsAll);

router.get("/films/:filmId/comments/:commentId", filmsController.getFilmsCommentById);

router.delete("/films/:filmId/comments/:commentId", filmsController.deleteFilmsCommentById);

module.exports = router;
