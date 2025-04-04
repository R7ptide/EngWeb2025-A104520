const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    series: String,
    author: [String],
    rating: Number,
    description: String,
    language: String,
    isbn: String,
    genres: [String],
    characters: [String],
    bookFormat: String,
    edition: String,
    pages: Number,
    publisher: String,
    publishDate: String,
    firstPublishDate: String,
    awards: [String],
    numRatings: Number,
    ratingsByStars: [Number],
    likedPercent: Number,
    setting: [String],
    coverImg: String,
    bbeScore: Number,
    bbeVotes: Number,
    price: Number
}, { versionKey: false });

module.exports = mongoose.model("Livro", livroSchema);