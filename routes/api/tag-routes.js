const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  let data = await Tag.findAll({ include: [{ model: Product }] });
  res.send(data);
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  let data = await Tag.findAll({
    where: {
      id: req.params.id,
    },
    include: [{ model: Product }],
  });
  res.send(data);
});

router.post("/", async (req, res) => {
  // create a new tag
  const data = await Tag.create({
    tag_name: req.body.tag_name,
  });
  res.send(data);
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({ tag_name: req.body.tag_name }, { where: { id: req.params.id } })
    .then(() => {
      res.json(`updated at id ${req.params.id}`);
    })
    .catch(() => {
      res.json("Failed to update");
    });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
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
