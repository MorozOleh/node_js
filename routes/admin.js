const express = require("express");
const { ROUT_PATH } = require("../constants");
const { htmlBone, typography, input, button, form } = require("../template");

const router = express.Router();

router.post(ROUT_PATH.product, (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

router.use(ROUT_PATH.addProduct, (_, res) => {
  res.send(
    htmlBone({
      title: "Add product",
      body: [
        typography({ element: "h1", text: "Add product page" }),
        form({
          action: ROUT_PATH.product,
          method: "POST",
          fields: [
            input({ name: "title", type: "text", class: "input" }),
            input({ name: "author", type: "text", class: "input" }),
            button({ text: "Submit", type: "submit" }),
          ],
        }),
      ],
    })
  );
});

module.exports = router;
