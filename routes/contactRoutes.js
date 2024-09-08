const { Router } = require("express");
const router = Router();
const {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  deleteEnquiry,
  submitData,
} = require("../controllers/contactController.js");

// route for enquires
router.route("/").post(createEnquiry).get(getAllEnquiries);

// route for enquiry by id
router.route("/:enquiryId").get(getEnquiryById).delete(deleteEnquiry);

router.route("/submit-data").post( submitData);
// router.post('/submit-data', submitData);

module.exports = router;
