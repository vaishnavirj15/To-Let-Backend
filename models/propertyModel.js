const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  ownersContactNumber: {
    type: String,
    required: true,
  },
  ownersAlternateContactNumber: {
    type: String,
  },
  locality: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  spaceType: {
    type: String,
    enum: ["Commercial", "Residential"],
    required: true,
  },
  propertyType: {
    type: String,
    enum: ["House", "Flat", "PG", "Office", "Shop"],
    required: true,
  },
  currentResidenceOfOwner: {
    type: String,
    enum: ["Same City", "Same Place", "Different City"],
  },
  rent: {
    type: Number,
    required: true,
  },
  concession: {
    type: Boolean,
    required: true,
  },
  petsAllowed: {
    type: Boolean,
    required: true,
  },
  preference: {
    type: String,
    enum: ["Bachelors", "Family", "Any"],
    required: true,
  },
  bachelors: {
    type: String,
    enum: ["Male", "Female", "Others"],
    required: true,
  },
  type: {
    type: String,
    enum: ["Non-Furnished", "Semi-Furnished", "Fully-Furnished"],
    required: true,
  },
  bhk: {
    type: Number,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  nearestLandmark: {
    type: String,
  },
  typeOfWashroom: {
    type: String,
    enum: ["Western", "Indian", "Both"],
    required: true,
  },
  coolingFacility: {
    type: String,
    enum: ["AC", "Fan", "Cooler"],
    required: true,
  },
  carParking: {
    type: Boolean,
    required: true,
  },
  subscriptionAmount: {
    type: Number,
  },
  commentByAnalyst: {
    type: String,
  },
  photos: {
    type: [String], // change to an array of strings to store cloudinary links in db
    required: true,
  },
  locationLink: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});



const Property = mongoose.model("Property", PropertySchema);
module.exports = Property;
