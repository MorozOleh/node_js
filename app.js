const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./constants");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const notFoundRoutes = require("./routes/notFound");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(adminRoutes);
app.use(shopRoutes);
app.use(notFoundRoutes);

app.listen(PORT, () => {
  console.log("server is up and running", PORT);
});
