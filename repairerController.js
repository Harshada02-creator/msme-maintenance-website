let repairers = [];

const addRepairer = (req, res) => {
  const repairer = req.body;

  repairers.push(repairer);

  res.json({
    message: "Repairer Details Saved",
    repairer
  });
};

const getRepairers = (req, res) => {
  res.json({
    repairers
  });
};

module.exports = {
  addRepairer,
  getRepairers
};