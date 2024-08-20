const express = require("express");
const {
  allBlogs,
  updateViews,
  updateLikes,
  blogDetails,
} = require("../controllers/blogController");

const router = express.Router();

router.route("/blogs").get(allBlogs);

router.route("/blogs/updateViews/:id").post(updateViews);

router.route("/blogs/updateLikes/:id").post(updateLikes);

router.route("/blogs/:id").get(blogDetails);

// router.route("/add-property").post(
//   upload.fields([
//     {
//       name: "images",
//       maxCount: 5, // max count
//     },
//   ]),
//   addProperty
// );

module.exports = router;
