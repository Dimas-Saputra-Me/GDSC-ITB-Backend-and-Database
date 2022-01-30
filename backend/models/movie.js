const mongoose = require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title:  String,
  imageurl: String,
  genre:   String,
  rating: String,
  description: String,
  link: String,
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;