var Livro = require('../models/livro')

module.exports.getLivros = () => {
    return Livro
        .find()
        .exec();
}

module.exports.getLivroById = id => {
    return Livro
        .findById(id)
        .exec();
}

module.exports.getLivrosByAuthor = author => {
    return Livro    
        .find({author: author})
        .exec();
}

module.exports.getLivrosByCharacter = character => {
    return Livro    
        .find({characters: character})
        .exec();
}

module.exports.getLivrosByGenre = genre => {
    return Livro    
        .find({genres: genre})
        .exec();
}

module.exports.getGenres = () => {
    return Livro
        .distinct('genres')
        .exec()
}

module.exports.getCharacters = () => {
    return Livro
        .distinct('characters')
        .exec()
}

module.exports.insert = livro => {
    LivroToSave = new Livro(livro)
    return LivroToSave.save()
}

module.exports.delete = id => {
    return Livro
        .findByIdAndDelete(id, {new: true})
        .exec()
}

module.exports.update = (livro, id) => {
    return Livro
        .findByIdAndUpdate(id, livro, {new: true})
        .exec()
}