const Blog = require("../models/blogModel.js");
const { uploadOnCloudinary } = require("../utils/cloudinary.js");
const upload = require("../middlewares/multer.js");

// Route for Getting all Blogs Data
const allBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
};

const createBlog = async (req, res) => {
  const dataWithCloudinaryImgUrl = { ...req.body, image: req.file.path };
  const newBlog = new Blog(dataWithCloudinaryImgUrl);
  await newBlog.save();
  res.send("success");
};

// Route to update views of a Specific blog
const updateViews = async (req, res) => {
  const { id } = req.params;
  await Blog.findByIdAndUpdate(id, req.body);
  res.send("success");
};

// Route to Update the Likes of a blog
const updateLikes = async (req, res) => {
  const { id } = req.params;
  await Blog.findByIdAndUpdate(id, req.body);
  res.send("success");
};

// Route to get details of Specific Blog
const blogDetails = async (req, res) => {
  const { slug } = req.params;
  const blog = await Blog.findOne({ slug: slug });
  res.json(blog);
};

// Serve static files from the uploads folder
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// console.log(
//   "Static files are being served from",
//   path.join(__dirname, "uploads")
// );
// app.use(bodyParser.json());

module.exports = {
  allBlogs,
  updateViews,
  updateLikes,
  blogDetails,
  createBlog,
};
