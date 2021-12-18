const filmModel = require("./film-schema");
const { getCommentById, deleteCommentById } = require("./utils");

class FilmsController {
  async getFilmsAll(req, res) {
    try {
      const films = await filmModel.find();

      res.status(200).json(films);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async createFilm(req, res) {
    try {
      const film = await filmModel.create(req.body);

      res.status(200).json(film);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getFilmById(req, res) {
    try {
      const { filmId } = req.params;

      if (!filmId) {
        res.status(400).json({ message: "filmId not specified" });
      }

      const film = await filmModel.findById(filmId);

      res.status(200).json(film);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getFilmsCommentsAll(req, res) {
    try {
      const { filmId } = req.params;

      if (!filmId) {
        res.status(400).json({ message: "filmId not specified" });
      }

      const film = await filmModel.findById(filmId);

      res.status(200).json(film.comments);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getFilmsCommentById(req, res) {
    try {
      const { filmId, commentId } = req.params;

      if (!filmId) {
        res.status(400).json({ message: "filmId not specified" });
      }

      if (!commentId) {
        res.status(400).json({ message: "commentId not specified" });
      }

      const film = await filmModel.findById(filmId);

      const comment = getCommentById(film, commentId);

      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteFilmsCommentById(req, res) {
    try {
      const { filmId, commentId } = req.params;

      if (!filmId) {
        res.status(400).json({ message: "filmId not specified" });
      }

      if (!commentId) {
        res.status(400).json({ message: "commentId not specified" });
      }

      const film = await filmModel.findById(filmId);

      deleteCommentById(film, commentId);

      await filmModel.findByIdAndUpdate(filmId, film, { new: true });

      res.status(200).json(film);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

const filmsController = new FilmsController();

module.exports = filmsController;
