const Property = require("../models/propertyModel.js");
const { uploadOnCloudinary } = require("../utils/cloudinary.js");

const addProperty = async (req, res) => {
  try {
    /**
     * Cloudinary logic to handle multiple files
     */
    if (!req.files || !req.files.images || req.files.images.length === 0) {
      return res.status(400).json({ message: "Image files are required" });
    }

    const imageLocalPaths = req.files.images.map((file) => file.path);

    const uploadPromises = imageLocalPaths.map((path) =>
      uploadOnCloudinary(path)
    );
    const imgResults = await Promise.all(uploadPromises);

    const failedUploads = imgResults.filter((result) => !result);
    if (failedUploads.length > 0) {
      return res.status(400).json({ message: "Failed to upload some images" });
    }

    const imageUrls = imgResults.map((result) => result.url);

    const property = await Property.create({
      photos: imageUrls,
    });

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
