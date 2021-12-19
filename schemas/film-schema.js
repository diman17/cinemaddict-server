const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  title: String,
  age: String,
  rating: String,
  director: String,
  writters: [String],
  actors: [String],
  date: Number,
  country: String,
  duration: Number,
  genre: String,
  srcPoster: String,
  description: String,
  comments: [
    {
      srcEmoji: String,
      text: String,
      author: String,
      day: Number,
    },
  ],
  isWatchlist: Boolean,
  isWatched: Boolean,
  isFavorite: Boolean,
});

module.exports = mongoose.model('film', filmSchema);
