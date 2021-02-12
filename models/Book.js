const mongoose = require('mongoose');

// Book Schema
var BookSchema = mongoose.Schema({
	uuid: { type: String, unique : true, required : true },
	name: { type: String, required : true },
	releaseDate: { type: Number, default: (new Date()).getTime() },
	authorName: { type: String }
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
