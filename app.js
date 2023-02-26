const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { PORT } = require("./constants");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const notFoundRoutes = require("./routes/notFound");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(notFoundRoutes);

app.listen(PORT, () => {
  console.log("server is up and running", PORT);
});
