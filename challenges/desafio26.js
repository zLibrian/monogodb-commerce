db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        tipo: { $eq: "sódio" },
        percentual: { $gt: 20, $lt: 40 },
      },
    },
  }, {
    $addToSet: {
      tags: "contém sódio",
    },
  },
);

db.produtos.find({}, { _id: false, nome: true, tags: true });