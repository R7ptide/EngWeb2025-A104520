var Aluno = require("../models/aluno")

module.exports.list = () => {
    return Aluno
    .find()
    .sort({_id: 1})
    .exec()
}

module.exports.findById = id => {
    return Aluno
    .findOne({_id : id})
    .exec()
}

module.exports.insert = (aluno) => {
    return Aluno.findOne({ _id: aluno.id }).exec()
      .then(alunoExistente => {
        if (!alunoExistente) {
          var newAluno = new Aluno(aluno);
          return newAluno.save();
        } else {
          return Promise.reject(new Error("Aluno já existe!"));
        }
      });
  };
  

module.exports.update = (id, aluno) => {
    return Aluno
        .findByIdAndUpdate(id, aluno, {new: true })
        .exec()
}


module.exports.delete = id => {
    return Aluno.findByIdAndDelete(id).exec()
}

