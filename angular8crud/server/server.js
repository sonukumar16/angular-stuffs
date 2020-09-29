const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  morganBody = require('morgan-body'),
  config = require("./DB");

const productRoute = require("./routes/product.route");
mongoose.Promise = global.Promise;
mongoose
  .connect(config.DbConnectionUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database" + err);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(cors());
morganBody(app,{theme:'usa'});
app.use("/products", productRoute);

const port = process.env.PORT || 4000;

const server = app.listen(port,() => {
  console.log("Listening on port " + port);
});
