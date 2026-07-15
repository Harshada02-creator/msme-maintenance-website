const express = require("express");
const router = express.Router();

const {
  addMachine,
  getMachines
} = require("../controllers/machineController");

router.post("/", addMachine);
router.get("/", getMachines);

module.exports = router;