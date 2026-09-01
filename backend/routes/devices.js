const express = require("express");

const {
    getAllDevices,
} = require("../controllers/deviceController");

const router = express.Router();

router.get("/", getAllDevices);

module.exports = router;