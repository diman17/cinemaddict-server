const filmsService = require('../services/films-service');

class FilmsController {
  async getFilmsAll(req, res) {
    try {
      const films = await filmsService.getFilmsAll();
      res.status(200).json(films);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getFilmById(req, res) {
    try {
      const { filmId } = req.params;
      const film = await filmsService.getFilmById(filmId);
      res.status(200).json(film);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async createFilm(req, res) {
    try {
      const film = await filmsService.createFilm(req.body);
      res.status(200).json(film);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async updateFilm(req, res) {
    try {
      const { filmId } = req.params;
      const updatedFilm = await filmsService.updateFilm(req.body, filmId);
      res.status(200).json(updatedFilm);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getFilmsCommentsAll(req, res) {
    try {
      const { filmId } = req.params;
      const comments = await filmsService.getFilmsCommentsAll(filmId);
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getFilmsCommentById(req, res) {
    try {
      const { filmId, commentId } = req.params;
      const comment = await filmsService.getFilmsCommentById(filmId, commentId);
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async createComment(req, res) {
    try {
      const { filmId } = req.params;
      await filmsService.createComment(req.body, filmId);
      res.status(200).json(`Comment ${req.body.text} has been added`);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async deleteFilmsCommentById(req, res) {
    try {
      const { filmId, commentId } = req.params;
      await filmsService.deleteFilmsCommentById(filmId, commentId);
      res.status(200).json(`Comment from id=${commentId} has been deleted`);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = new FilmsController();
