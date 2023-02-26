const express = require("express");
const { typography } = require("../template");

const router = express.Router();

router.use((_, res) => {
  res.status(404).send(typography({ element: "h1", text: "Page not found" }));
});

module.exports = router;
