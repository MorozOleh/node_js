const express = require("express");
const path = require("path");
const router = express.Router();

const { ROUT_PATH } = require("../constants");

router.get(ROUT_PATH.about, (_, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "about.html"));
});

router.get(ROUT_PATH.home, (_, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
