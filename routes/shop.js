const express = require("express");
const router = express.Router();
const { htmlBone, typography } = require("../template");

const { ROUT_PATH } = require("../constants");

router.get(ROUT_PATH.about, (_, res) => {
  res.send(
    htmlBone({
      title: "About Page",
      body: [typography({ element: "h1", text: "Greeting from about page" })],
    })
  );
});

router.get(ROUT_PATH.home, (req, res) => {
  console.log("we are on home page or whichever");

  res.send(
    htmlBone({
      title: "Home Page",
      body: [typography({ element: "h1", text: "Home Page" })],
    })
  );
});

module.exports = router;
