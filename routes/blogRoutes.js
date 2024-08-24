const express = require("express");
const {
  allBlogs,
  updateViews,
  updateLikes,
  blogDetails,
  createBlog,
} = require("../controllers/blogController");

const upload = require("../middlewares/multer.js");

const router = express.Router();

router.route("/blogs").get(allBlogs);

router.route("/blogs/updateViews/:id").post(updateViews);

router.route("/blogs/updateLikes/:id").post(updateLikes);

router.route("/blogs/:slug").get(blogDetails);

router.route("/blogs/new").post(upload.single("image"), createBlog);

module.exports = router;
