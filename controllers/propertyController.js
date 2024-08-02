const Property = require("../models/propertyModel.js");
const { uploadOnCloudinary } = require("../utils/cloudinary.js");

const addProperty = async (req, res) => {
  // your all logic to get other fileds here ok?
  // check all required fileds are there or not
  // also check if the user is exit or not from the auth middleware

  // i dont know the frontend varialbe so i just used image and for now we are accepting only one image till everything is functional

  /* 
    images and cloudinary logic starts here
  */
  try {
    let imageLocalPath;
    if (
      req.files &&
      Array.isArray(req.files.image) &&
      req.files.image.length > 0
    ) {
      imageLocalPath = req.files.image[0].path;
    }

    console.log(imageLocalPath);

    if (!imageLocalPath) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const img = await uploadOnCloudinary(imageLocalPath);

    console.log(img);

    if (!img) {
      return res.status(400).json({ message: "Failed to upload image" });
    }

    // here i just saved image but you need to uncomment the othere fields from model and add here
    const property = await Property.create({
      photos: img.url,
    });

    console.log(property);

    if (!property) {
      return res
        .status(500)
        .json({ message: "Something went wrong while creating property" });
    }

    return res.status(201).json({
      statusCode: 201,
      property,
      msg: "Property registered successfully.",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  /**
   *image and cloudinary logic ends here
   */
};

//logic for update properties
const updateProperty = (req, res) => {
  // check if user is authenticated or not with the help of auth middlware which will be added later when auth team will push their code ok?
  // after checking get the fields that are in the update form and check if required fields are present or not if not give res with error msg
  // ***************i'll(pratik) do the update image part later so focus on other fields of the update form ***************
  // log at each step for your verification
  // and after that send a response with a statuscode and msg and uploaded data if needed
};

//logic for delet property
const deleteProperty = (req, res) => {};
// below just add your function names seprated by commas
module.exports = {
  addProperty,
  updateProperty,
  deleteProperty,
};

/**
 * after above done do below steps
 *
 * 1. go to (propertyRoutes.js) file
 *   - then add your route, there are some instructions and eg. follow them and also import your above method there and add there
 * 2.  then your done just explore the files such as server.js
 */
