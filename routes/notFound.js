const express = require("express");

const router = express.Router();

router.use((_, res) => {
  res.status(404).render("404", { pageTitle: "Not Found" });
});

module.exports = router;
