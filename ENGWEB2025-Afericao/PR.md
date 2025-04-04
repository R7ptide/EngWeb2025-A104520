# Esercício 1
## 1.2
1. db.livros.countDocuments({"title": {$regex: "Love"}})
2. db.livros.find({"author": {$regex: ".+Austen"}}, {"title": 1, "_id": 0}).sort({"title": 1})
3. db.livros.distinct("author")
4. db.livros.aggregate({$unwind: "$genres"}, {$group:{_id: "$genres", count: {$sum : 1}}})
5. db.livros.find({"characters": "Sirius Black"}, {"title": 1, "isbn": 1, "_id": 0}).sort({"title": 1})