const express               = require("express")
const productsController    = require('../../controllers/products');
const router                = express.Router();

// Matches with "/api/books"
router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);
    .get(productsController.findAll)
    .post(productsController.create)

// Matches with "/api/books/:id"
router
  .route("/:id")
    .get(productsController.read)
    .put(productsController.update)
    .delete(productsController.delete)

module.exports = router;
