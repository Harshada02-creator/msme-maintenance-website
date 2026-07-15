const express = require("express");
const router = express.Router();

const {
  addRepairer,
  getRepairers
} = require("../controllers/repairerController");

router.post("/", addRepairer);
router.get("/", getRepairers);

module.exports = router;