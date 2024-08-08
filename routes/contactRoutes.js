const { Router } = require("express");
const router = Router();
const {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  deleteEnquiry,
} = require("../controllers/contactController.js");

// route for enquires
router.route("/").post(createEnquiry).get(getAllEnquiries);

// route for enquiry by id
router.route("/:enquiryId").get(getEnquiryById).delete(deleteEnquiry);

module.exports = router;
