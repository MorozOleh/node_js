const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.use((_, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

module.exports = router;
