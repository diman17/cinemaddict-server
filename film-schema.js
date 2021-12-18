const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  title: String,
  age: String,
  rating: String,
  director: String,
  writters: [String],
  actors: [String],
  date: String,
  country: String,
  duration: String,
  genre: String,
  srcPoster: String,
  description: String,
  comments: [
    {
      srcEmoji: String,
      text: String,
      author: String,
      day: String,
    },
  ],
  isWatchlist: Boolean,
  isWatched: Boolean,
  isFavorite: Boolean,
});

module.exports = mongoose.model('film', filmSchema);
