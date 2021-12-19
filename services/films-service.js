const filmModel = require('../schemas/film-schema');
const { getCommentById, deleteCommentById, addComment } = require('../utils/utils');

class FilmsService {
  async getFilmsAll() {
    const films = await filmModel.find();
    return films;
  }

  async getFilmById(filmId) {
    const film = await filmModel.findById(filmId);
    return film;
  }

  async createFilm(film) {
    const newFilm = await filmModel.create(film);
    return newFilm;
  }

  async updateFilm(film, filmId) {
    const updatedFilm = await filmModel.findByIdAndUpdate(filmId, film, { new: true });
    return updatedFilm;
  }

  async getFilmsCommentsAll(filmId) {
    const film = await filmModel.findById(filmId);
    return film.comments;
  }

  async getFilmsCommentById(filmId, commentId) {
    const film = await filmModel.findById(filmId);
    return getCommentById(film, commentId);
  }

  async createComment(comment, filmId) {
    const film = await filmModel.findById(filmId);

    addComment(comment, film);

    await filmModel.findByIdAndUpdate(filmId, film, { new: true });
  }

  async deleteFilmsCommentById(filmId, commentId) {
    const film = await filmModel.findById(filmId);

    deleteCommentById(film, commentId);

    await filmModel.findByIdAndUpdate(filmId, film, { new: true });
  }
}

module.exports = new FilmsService();
