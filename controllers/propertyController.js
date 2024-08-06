const Property = require("../models/propertyModel.js");
const { uploadOnCloudinary } = require("../utils/cloudinary.js");

const addProperty = async (req, res) => {
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

const updateProperty = async (req, res) => {
  try {
    const userId = req.user._id;

    // Check if property ID is provided
    const propertyId = req.params.id;
    if (!propertyId) {
      return res.status(400).json({ message: "Property ID is required" });
    }

    // Find the property by ID
    let property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Check if the authenticated user is the owner of the property
    if (property.userId.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "Unauthorized: You do not own this property" });
    }

    // Get the fields from the update form
    const { title, description, price, address, otherFields } = req.body;

    // Validate required fields (add more fields as required)
    if (!title || !price || !address) {
      return res.status(400).json({
        message: "Title, price, and address are required fields",
      });
    }

    // Update the property fields
    property.title = title || property.title;
    property.description = description || property.description;
    property.price = price || property.price;
    property.address = address || property.address;
    // Add other fields as needed
    // property.otherFields = otherFields || property.otherFields;

    // Save the updated property
    const updatedProperty = await property.save();

    // Log the updated property
    console.log(updatedProperty);

    // Send the updated property as a response
    return res.status(200).json({
      statusCode: 200,
      property: updatedProperty,
      message: "Property updated successfully.",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//logic for delet property
const deleteProperty = (req, res) => {};

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
 */
