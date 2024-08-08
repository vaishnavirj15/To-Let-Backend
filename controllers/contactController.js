const { asyncHandler } = require("../utils/asyncHandler");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse.js");
const Contact = require("../models/contactModel.js");

const getAllEnquiries = asyncHandler(async (req, res) => {
  const enquiries = await Contact.find({});

  if (!enquiries) {
    throw new ApiError(404, "No enquiries found");
  }

  res.json(
    new ApiResponse(200, enquiries, "Enquiries retrieved successfully!")
  );
});

const createEnquiry = asyncHandler(async (req, res) => {
  const { name, email, message, topic } = req.body;
  const requiredFields = { name, email, message, topic };

  for (const [key, value] of Object.entries(requiredFields)) {
    if (!value) {
      throw new ApiError(400, `${key} is required`);
    }
  }

  const enquiry = await Contact.create({ name, email, message, topic });

  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        enquiry,
        "Your enquiry has been successfully submitted!"
      )
    );
});

const getEnquiryById = asyncHandler(async (req, res) => {
  const { enquiryId } = req.params;
  const enquiry = await Contact.findById(enquiryId);

  if (!enquiry) {
    throw new ApiError(404, "Enquiry not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, enquiry, "Enquiry retrieved successfully"));
});

const deleteEnquiry = asyncHandler(async (req, res) => {
  const { enquiryId } = req.params;
  const enquiry = await Contact.findByIdAndDelete(enquiryId);

  if (!enquiry) {
    throw new ApiError(404, "Enquiry not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, null, "Enquiry deleted successfully"));
});

module.exports = {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  deleteEnquiry,
};
