const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{ model: Product }],
  }).then((result) => {
    // console.log(result);
    res.json(result);
  });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: { id: req.params.id },
    include: [{ model: Product }],
  }).then((result) => {
    res.json(result);
  });
});

router.post("/", async (req, res) => {
  // create a new category
  const data = await Category.create({
    category_name: req.body.category_name,
  });
  res.send(data);
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(
    { category_name: req.body.category_name },
    { where: { id: req.params.id } }
  )
    .then(() => {
      res.json(`updated at id ${req.params.id}`);
    })
    .catch(() => {
      res.json("Failed to update");
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.json("destroyed");
    })
    .catch(() => {
      res.json("failed to destroy");
    });
});

module.exports = router;
