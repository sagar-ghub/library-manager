const express = require("express");
const getController = require("../controller/getController");
const router = express.Router();

router.get("/allbooks", getController.getBooks);
router.get("/books", getController.getBooksByQuery);

module.exports = router;
