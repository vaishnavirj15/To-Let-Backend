const express = require("express");
const { addProperty } = require("../controllers/propertyController.js");
const upload = require("../middlewares/multer.js");

const router = express.Router();

router.route("/add-property").post(
  upload.fields([
    {
      name: "images",
      maxCount: 5, // max count
    },
  ]),
  addProperty
); //change names and methods according to your endpoints

//eg.

/*
router.route("/").get(); //change names and methods according to your endpoints

router.route("/").put(addProperty); //change names and methods according to your endpoints

router.route("/").delete(addProperty); //change names and methods according to your endpoints

*/

module.exports = router;
