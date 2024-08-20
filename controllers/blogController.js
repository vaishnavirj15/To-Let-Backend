const Blog = require("../models/blogModel.js");
const { uploadOnCloudinary } = require("../utils/cloudinary.js");
const upload = require("../middlewares/multer.js");

// Route for Getting all Blogs Data
// app.get("/blogs", async (req, res) => {
const allBlogs = async (req, res) => {
  console.log("HEYY");
  const blogs = await Blog.find({});
  res.json(blogs);
};

// Route to create new blog
//   app.post("/blogs/new", upload.single("image"), async (req, res) => {
//   app.post("/blogs/new", upload.single("image"), async (req, res) => {

//     // console.log(req.body);
//     const dataWithCloudinaryImgUrl = { ...req.body, image: req.file.path };
//     const newBlog = new Blog(dataWithCloudinaryImgUrl);
//     await newBlog.save();
//     res.send("success");
//   });

// Route to update views of a Specific blog
//   app.post("/blogs/updateViews/:id", async (req, res) => {
const updateViews = async (req, res) => {
  const { id } = req.params;
  await Blog.findByIdAndUpdate(id, req.body);
  res.send("success");
};

// Route to Update the Likes of a blog
// app.post("/blogs/updateLikes/:id", async (req, res) => {
const updateLikes = async (req, res) => {
  const { id } = req.params;
  await Blog.findByIdAndUpdate(id, req.body);
  res.send("success");
};

// Route to get details of Specific Blog
// app.get("/blogs/:id", async (req, res) => {
const blogDetails = async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  res.json(blog);
};

// Route to get all user data
// app.post("/getuserdata", (req, res) => {
//   res.json({ username: req.session.user_name, role: req.session.user_role });
// });

// Route to Destroy Session and Logout
// app.post("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       return res.send("Error logging out");
//     }
//     res.send("Logged Out");
//   });
// });

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
};
