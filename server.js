const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const companyRoutes = require("./routes/companyRoutes");
const repairerRoutes = require("./routes/repairerRoutes");
const machineRoutes = require("./routes/machineRoutes");
const requestRoutes = require("./routes/requestRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MSME Backend is Running!");
});

app.use("/auth", authRoutes);
app.use("/company", companyRoutes);
app.use("/repairer", repairerRoutes);
app.use("/machine", machineRoutes);
app.use("/request", requestRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});