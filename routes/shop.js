const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

const { ROUT_PATH } = require("../constants");

router.get(ROUT_PATH.about, (_, res) => {
  res.sendFile(path.join(rootDir, "views", "about.html"));
});

router.get(ROUT_PATH.home, (_, res) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
