const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const PropertySchema = new Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   analystName: {
//     type: String,
//     required: true,
//   },
//   ownerName: {
//     type: String,
//     required: true,
//   },
//   ownersContactNumber: {
//     type: String,
//     required: true,
//   },
//   ownersAlternateContactNumber: {
//     type: String,
//   },
//   locality: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   spaceType: {
//     type: String,
//     required: true,
//   },
//   propertyType: {
//     type: String,
//     required: true,
//   },
//   currentResidenceOfOwner: {
//     type: String,
//   },
//   rent: {
//     type: Number,
//     required: true,
//   },
//   concession: {
//     type: String,
//   },
//   petsAllowed: {
//     type: Boolean,
//     required: true,
//   },
//   preference: {
//     type: String,
//   },
//   bachelors: {
//     type: String,
//   },
//   type: {
//     type: String,
//   },
//   bhk: {
//     type: Number,
//     required: true,
//   },
//   floor: {
//     type: Number,
//     required: true,
//   },
//   nearestLandmark: {
//     type: String,
//   },
//   typeOfWashroom: {
//     type: String,
//   },
//   coolingFacility: {
//     type: String,
//   },
//   carParking: {
//     type: Boolean,
//   },
//   subscriptionAmount: {
//     type: Number,
//   },
//   commentByAnalyst: {
//     type: String,
//   },
//   photos: [
//     {
//       type: String,
//       required: true,
//     },
//   ],
//   locationLink: {
//     type: String,
//   },
//   registrationDate: {
//     type: Date,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Property = mongoose.model("Property", PropertySchema);
// module.exports = Property;

/* 
above code is for everyone 
uncomment the above code when doing your task


below code is for cloudinady testing purpose so comment that when doing your 

*/

const PropertySchema = new Schema({
  photos: {
    type: String,
    required: true,
  },
});

const Property = mongoose.model("Property", PropertySchema);
module.exports = Property;
