const express = require("express");
const { getUserInfo } = require("../controllers/userController");
const router = express();

router.get("/info",getUserInfo)

module.exports = router
