const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: String,
    pages: Number,
    genres: [String],
    rating: Number 
})

const Book = mongoose.model("book", bookSchema)
module.exports = Book