const productRoutes = require("express").Router();

// Require Product model in our routes module
let Product = require("../models/Product");

// Defined store route
productRoutes.route("/add").post((req, res) => {
  console.log("body---->>", req.body);
  let product = new Product(req.body);
  product
    .save()
    .then((product) => {
      res.status(200).json({ Product: "Product has been added successfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
productRoutes.route("/").get((req, res) => {
  Product.find((err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
  });
});

// Defined edit route
productRoutes.route("/edit/:id").get((req, res) => {
  let id = req.params.id;
  Product.findById(id, (err, product) => {
    res.json(product);
  });
});

//  Defined update route
productRoutes.route("/update/:id").post((req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (!product) res.status(404).send("Record not found");
    else {
      product.ProductName = req.body.ProductName;
      product.ProductDescription = req.body.ProductDescription;
      product.ProductPrice = req.body.ProductPrice;

      product
        .save()
        .then((product) => {
          res.json("Update complete");
        })
        .catch((err) => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
productRoutes.route("/delete/:id").get((req, res) => {
  Product.findByIdAndRemove({ _id: req.params.id }, (err, product) => {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = productRoutes;
