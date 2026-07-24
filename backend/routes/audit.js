const express = require("express");
const router = express.Router();

const { auditWebsite } = require("../controllers/auditController");

router.post("/", auditWebsite);

module.exports = router;